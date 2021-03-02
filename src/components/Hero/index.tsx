import { useEffect, useState } from 'react';

import { MovieResponse, TvResponse, ImagesResponse } from '../../types/tmdb';

import Tmdb from '../../services/tmdb';

import { getMovieReleaseDate } from '../../utils';
import { getMovieRuntime } from '../../utils';

import HeroSkeleton from '../Skeletons/Hero';

import * as S from './styles';

type DataResponse = TvResponse & MovieResponse;

interface HeroProps {
  id: number;
  mediaType: string;
}

const Hero = ({ id, mediaType }: HeroProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [detailsData, setDetailsData] = useState({} as DataResponse);
  const [featuredImagesList, setFeaturedImagesList] = useState([] as ImagesResponse[]);

  featuredImagesList.length = 3;

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
  }, [id, mediaType]);

  return (
    <>
      <S.Backdrop backgroundSrc={Tmdb.image(`original/${detailsData.backdrop_path}`)} />
      <S.Container>
        {isLoading ? (
          <HeroSkeleton />
        ) : (
          <>
            <S.PosterContainer>
              {detailsData.poster_path ? (
                <S.Poster src={Tmdb.image(`w500/${detailsData.poster_path}`)} />
              ) : null}
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
                {featuredImagesList.length > 0
                  ? featuredImagesList.map((item: any) => (
                      <S.FeaturedImage src={Tmdb.image(`original/${item.file_path}`)} />
                    ))
                  : null}
              </S.FeaturedImagesWrapper>
            </S.DetailsContainer>{' '}
          </>
        )}
      </S.Container>
    </>
  );
};

export default Hero;
