import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { MovieResponse, TvResponse, ImagesResponse } from '../../types/tmdb';

import Tmdb from '../../services/tmdb';

import useDocumentTitle from '../../hooks/useDocumentTitle';

import { getMovieReleaseDate, getMovieRuntime, truncateText } from '../../utils';

import Backdrop from '../../components/Backdrop';
import CarouselSlider from '../../components/CarouselSlider';
import HeroSkeleton from '../Skeletons/Hero';
import Modal from '../Modal';

import * as S from './styles';

import NoPosterPlaceholder from '../../assets/images/no_poster-placeholder.png';

type DataResponse = TvResponse & MovieResponse;

interface HeroProps {
  id: string;
  mediaType: string;
  featured?: Featured;
  variant: 'full' | 'simple';
}

type Featured = {
  id: string;
  poster_path: string;
  backdrop_path: string;
  media_type: string;
  title: string;
  original_name: string;
  overview: string;
};

const Hero = ({ id, mediaType, variant, featured }: HeroProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [detailsData, setDetailsData] = useState({} as DataResponse);
  const [featuredImagesList, setFeaturedImagesList] = useState([] as ImagesResponse[]);
  const [imagesModalIsOpen, setImagesModalIsOpen] = useState<boolean>(false);
  const [activeImageSrcOnModal, setActiveSrcImageOnModal] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const [detailsResponse, imagesResponse] = await Promise.all([
          Tmdb.getDetails(mediaType, id),
          Tmdb.getImages(mediaType, id),
        ]);

        setDetailsData(detailsResponse);
        setFeaturedImagesList(imagesResponse.backdrops);

        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    variant === 'full' && fetchData();
  }, [id, mediaType, variant]);

  useDocumentTitle(
    variant === 'full' && !isLoading
      ? `${detailsData.title || detailsData.original_name} - Flexrr`
      : 'Flexrr'
  );

  const handleImagesModalOpen = (imageSrc: string) => {
    setImagesModalIsOpen(true);
    setActiveSrcImageOnModal(imageSrc);
  };

  const handleImagesModalClose = () => {
    setImagesModalIsOpen(false);
  };

  return (
    <>
      {variant === 'full' && (
        <>
          {isLoading ? null : (
            <Backdrop
              backdropSrc={Tmdb.image(
                `w1280/${detailsData.backdrop_path || detailsData.poster_path}`
              )}
            />
          )}

          <S.Container>
            {isLoading ? (
              <HeroSkeleton variant="full" />
            ) : (
              <>
                <S.PosterContainer>
                  {detailsData.poster_path ? (
                    <S.Poster src={Tmdb.image(`w500/${detailsData.poster_path}`)} />
                  ) : (
                    <S.Poster src={NoPosterPlaceholder} />
                  )}
                </S.PosterContainer>
                <S.DetailsContainer>
                  <S.DetailsHeader>
                    <S.TitleWrapper>
                      <S.Title>{detailsData.title || detailsData.original_name}</S.Title>

                      {detailsData.release_date ? (
                        <h3>({getMovieReleaseDate(detailsData.release_date).year})</h3>
                      ) : null}
                    </S.TitleWrapper>

                    <S.FactsWrapper>
                      {detailsData.genres ? (
                        <li>
                          {detailsData.genres.map((genre: any) => genre.name).join(', ')}
                        </li>
                      ) : null}

                      {detailsData.release_date ? (
                        <li>
                          {getMovieRuntime(detailsData.runtime).hours}h{' '}
                          {getMovieRuntime(detailsData.runtime).minutes}
                          min ({detailsData.runtime}min)
                        </li>
                      ) : null}
                    </S.FactsWrapper>
                  </S.DetailsHeader>

                  <S.Overview>{detailsData.overview}</S.Overview>

                  <S.FeaturedImagesWrapper>
                    <CarouselSlider>
                      {featuredImagesList?.length > 0
                        ? featuredImagesList.map((item: any, i) => (
                            <S.FeaturedImage
                              key={i}
                              src={Tmdb.image(`w500/${item.file_path}`)}
                              loading="lazy"
                              onClick={() =>
                                handleImagesModalOpen(
                                  Tmdb.image(`w1280/${item.file_path}`)
                                )
                              }
                            />
                          ))
                        : null}
                    </CarouselSlider>
                  </S.FeaturedImagesWrapper>

                  <Modal
                    title={detailsData.title || detailsData.original_name}
                    isOpen={imagesModalIsOpen}
                    onClose={() => handleImagesModalClose()}
                  >
                    <img
                      src={activeImageSrcOnModal}
                      alt=""
                      width="100%"
                      style={{ borderRadius: '5px' }}
                    />
                    <S.FeaturedImagesWrapper>
                      <CarouselSlider>
                        {featuredImagesList?.length > 0
                          ? featuredImagesList.map((item: any, i) => (
                              <S.FeaturedImage
                                key={i}
                                src={Tmdb.image(`w500/${item.file_path}`)}
                                loading="lazy"
                                onClick={() =>
                                  handleImagesModalOpen(
                                    Tmdb.image(`w1280/${item.file_path}`)
                                  )
                                }
                              />
                            ))
                          : null}
                      </CarouselSlider>
                    </S.FeaturedImagesWrapper>
                  </Modal>
                </S.DetailsContainer>
              </>
            )}
          </S.Container>
        </>
      )}

      {variant === 'simple' &&
        (featured ? (
          <>
            <Backdrop
              backdropSrc={Tmdb.image(
                `original/${featured.backdrop_path || featured.poster_path}`
              )}
              blur={false}
            />
            <Link to={`${featured.media_type}/${featured.id}`}>
              <S.Featured>
                <h1>{featured.title || featured.original_name}</h1>
                <p>{featured.overview ? truncateText(featured.overview, 200) : null}</p>
              </S.Featured>
            </Link>
          </>
        ) : (
          <HeroSkeleton variant="simple" />
        ))}
    </>
  );
};

export default Hero;
