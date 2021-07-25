import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Tmdb from '../../services/tmdb';

import useDocumentTitle from '../../hooks/useDocumentTitle';

import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import CastBox from '../../components/CastBox';
import FactsBox from '../../components/FactsBox';
import ReviewBox from '../../components/ReviewBox';
import RecommendationsBox from '../../components/RecommendationsBox';
import Card from '../../components/Card';
import CardSkeleton from '../../components/Skeletons/Card';
import Backdrop from '../../components/Backdrop';
import CarouselSlider from '../../components/CarouselSlider';

import { TrendingResponse } from '../../types/tmdb';

import * as S from './styles';

const INITIAL_GENRESLIST_STATE = {
  comedy: [] as any,
  romance: [] as any,
};

const TvShows = () => {
  const { tvshowId } = useParams<{ tvshowId: string }>();

  const [trendingList, setTrendingList] = useState([] as TrendingResponse[]);
  const [genresList, setGenresList] = useState(INITIAL_GENRESLIST_STATE);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [trendingResponse, comedyListResponse, romanceListResponse] =
          await Promise.all([
            Tmdb.getTrending('tv', 'week'),
            Tmdb.getGenreTrending('tv', 'comedy'),
            Tmdb.getGenreTrending('tv', 'romance'),
          ]);

        setTrendingList(trendingResponse);

        setGenresList({
          comedy: comedyListResponse.results,
          romance: romanceListResponse.results,
        });
      } catch (err) {
        console.log(err);
      }
    };

    !tvshowId && fetchData();
  }, [tvshowId]);

  useDocumentTitle('TV Shows - Flexrr');

  return (
    <Layout>
      {tvshowId ? (
        <>
          <Hero id={tvshowId} mediaType="tv" variant="full" />
          <S.ContentContainer>
            <FactsBox id={tvshowId} mediaType="tv" />
            <CastBox id={tvshowId} mediaType="tv" />
            <ReviewBox id={tvshowId} mediaType="tv" />
            <RecommendationsBox id={tvshowId} mediaType="tv" />
          </S.ContentContainer>
        </>
      ) : (
        <S.ContentContainer>
          {trendingList && (
            <Backdrop
              backdropHeight={360}
              backdropSrc={Tmdb.image(
                `w1280/${trendingList[0]?.backdrop_path || trendingList[0]?.poster_path}`
              )}
            />
          )}

          <S.Header>
            <h1>TV Shows</h1>
            <h2>Popular this Week</h2>
          </S.Header>

          <CarouselSlider gradientBar>
            {trendingList?.length > 0
              ? trendingList.map((item) => (
                  <S.CardWrapper>
                    <Card
                      key={item.id}
                      id={item.id}
                      mediaType="tv"
                      posterSrc={item.poster_path}
                      onHoverData={{
                        title: item.title || item.original_name,
                        backdropSrc: item.backdrop_path || item.poster_path,
                        overview: item.overview,
                        releaseDate: item.release_date || item.first_air_date,
                        genresIds: item.genre_ids,
                      }}
                    />
                  </S.CardWrapper>
                ))
              : [...Array(7)].map((i) => (
                  <S.CardWrapper>
                    <CardSkeleton key={i} />
                  </S.CardWrapper>
                ))}
          </CarouselSlider>

          <CarouselSlider title="Romance" gradientBar>
            {genresList.romance.length > 0
              ? genresList.romance.map((item: any) => (
                  <S.CardWrapper>
                    <Card
                      key={item.id}
                      id={item.id}
                      mediaType="tv"
                      posterSrc={item.poster_path}
                      onHoverData={{
                        title: item.title || item.original_name,
                        backdropSrc: item.backdrop_path || item.poster_path,
                        overview: item.overview,
                        releaseDate: item.release_date || item.first_air_date,
                        genresIds: item.genre_ids,
                      }}
                    />
                  </S.CardWrapper>
                ))
              : [...Array(7)].map((i) => (
                  <S.CardWrapper>
                    <CardSkeleton key={i} />
                  </S.CardWrapper>
                ))}
          </CarouselSlider>

          <CarouselSlider title="Comedy" gradientBar>
            {genresList.comedy.length > 0
              ? genresList.comedy.map((item: any) => (
                  <S.CardWrapper>
                    <Card
                      key={item.id}
                      id={item.id}
                      mediaType="tv"
                      posterSrc={item.poster_path}
                      onHoverData={{
                        title: item.title || item.original_name,
                        backdropSrc: item.backdrop_path || item.poster_path,
                        overview: item.overview,
                        releaseDate: item.release_date || item.first_air_date,
                        genresIds: item.genre_ids,
                      }}
                    />
                  </S.CardWrapper>
                ))
              : [...Array(7)].map((i) => (
                  <S.CardWrapper>
                    <CardSkeleton key={i} />
                  </S.CardWrapper>
                ))}
          </CarouselSlider>
        </S.ContentContainer>
      )}
    </Layout>
  );
};

export default TvShows;
