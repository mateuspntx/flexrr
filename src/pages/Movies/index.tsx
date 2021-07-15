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
  action: [] as any,
  comedy: [] as any,
  horror: [] as any,
  romance: [] as any,
};

const Movies = () => {
  const { movieId } = useParams<{ movieId: string }>();

  const [trendingList, setTrendingList] = useState([] as TrendingResponse[]);
  const [genresList, setGenresList] = useState(INITIAL_GENRESLIST_STATE);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          trendingResponse,
          actionListResponse,
          comedyListResponse,
          horrorListResponse,
          romanceListResponse,
        ] = await Promise.all([
          Tmdb.getTrending('movie', 'week'),
          Tmdb.getGenreTrending('movie', 'action'),
          Tmdb.getGenreTrending('movie', 'comedy'),
          Tmdb.getGenreTrending('movie', 'horror'),
          Tmdb.getGenreTrending('movie', 'romance'),
        ]);

        setTrendingList(trendingResponse);

        setGenresList({
          action: actionListResponse.results,
          comedy: comedyListResponse.results,
          horror: horrorListResponse.results,
          romance: romanceListResponse.results,
        });
      } catch (err) {
        console.log(err);
      }
    };

    !movieId && fetchData();
  }, [movieId]);

  useDocumentTitle('Movies - Flexrr');

  return (
    <Layout>
      {movieId ? (
        <>
          <Hero id={movieId} mediaType="movie" variant="full" />
          <S.ContentContainer>
            <FactsBox id={movieId} mediaType="movie" />
            <CastBox id={movieId} mediaType="movie" />
            <ReviewBox id={movieId} mediaType="movie" />
            <RecommendationsBox id={movieId} mediaType="movie" />
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
            <h1>Movies</h1>
            <h2>Popular this Week</h2>
          </S.Header>

          <CarouselSlider gradientBar>
            {trendingList?.length > 0
              ? trendingList
                  .slice(0, 19)
                  .map((item) => (
                    <Card
                      key={item.id}
                      id={item.id}
                      mediaType="movie"
                      posterSrc={item.poster_path}
                    />
                  ))
              : [...Array(6)].map((i) => <CardSkeleton key={i} />)}
          </CarouselSlider>

          <CarouselSlider title="Action" gradientBar>
            {genresList.action.length > 0
              ? genresList.action
                  .slice(0, 19)
                  .map((item: any) => (
                    <Card
                      key={item.id}
                      id={item.id}
                      mediaType="movie"
                      posterSrc={item.poster_path}
                    />
                  ))
              : [...Array(6)].map((i) => <CardSkeleton key={i} />)}
          </CarouselSlider>

          <CarouselSlider title="Romance" gradientBar>
            {genresList.romance.length > 0
              ? genresList.romance
                  .slice(0, 19)
                  .map((item: any) => (
                    <Card
                      key={item.id}
                      id={item.id}
                      mediaType="movie"
                      posterSrc={item.poster_path}
                    />
                  ))
              : [...Array(6)].map((i) => <CardSkeleton key={i} />)}
          </CarouselSlider>

          <CarouselSlider title="Horror" gradientBar>
            {genresList.horror.length > 0
              ? genresList.horror
                  .slice(0, 19)
                  .map((item: any) => (
                    <Card
                      key={item.id}
                      id={item.id}
                      mediaType="movie"
                      posterSrc={item.poster_path}
                    />
                  ))
              : [...Array(6)].map((i) => <CardSkeleton key={i} />)}
          </CarouselSlider>

          <CarouselSlider title="Comedy" gradientBar>
            {genresList.comedy.length > 0
              ? genresList.comedy
                  .slice(0, 19)
                  .map((item: any) => (
                    <Card
                      key={item.id}
                      id={item.id}
                      mediaType="movie"
                      posterSrc={item.poster_path}
                    />
                  ))
              : [...Array(6)].map((i) => <CardSkeleton key={i} />)}
          </CarouselSlider>
        </S.ContentContainer>
      )}
    </Layout>
  );
};

export default Movies;
