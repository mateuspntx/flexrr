import { useState, useEffect } from 'react';

import Tmdb from '../../services/tmdb';

import Layout from '../../components/Layout';
import Grid from '../../components/Grid';
import Card from '../../components/Card';

import { TrendingResponse } from '../../types/tmdb';

import * as S from './styles';
import Hero from '../../components/Hero';

const INITIAL_GENRESLIST_STATE = {
  action: [] as any,
  comedy: [] as any,
};

const Home = () => {
  const [trendingList, setTrendingList] = useState([] as TrendingResponse[]);
  const [genresList, setGenresList] = useState(INITIAL_GENRESLIST_STATE as any);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [trendingResponse, actionListResponse, comedyListResponse] =
          await Promise.all([
            Tmdb.getTrending('all', 'day'),
            Tmdb.getGenreTrending('movie', 'action'),
            Tmdb.getGenreTrending('movie', 'comedy'),
          ]);

        setTrendingList(trendingResponse);

        setGenresList({
          action: actionListResponse.results,
          comedy: comedyListResponse.results,
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Layout>
        <Hero
          id={trendingList[0]?.id}
          mediaType={trendingList[0]?.media_type}
          featured={trendingList[0] as any}
          variant="simple"
        />

        <S.WhatsPopular>
          <h1>What's Popular</h1>
          <Grid cols={6}>
            {trendingList.slice(1, 7).map((item) => (
              <Card
                key={item.id}
                id={item.id}
                mediaType={item.media_type}
                posterSrc={item.poster_path}
                animation={true}
              />
            ))}
          </Grid>
        </S.WhatsPopular>

        <S.ActionGenre>
          <h1>Action</h1>
          <Grid cols={6}>
            {genresList.action.slice(0, 6).map((item: any) => (
              <Card
                id={item.id}
                mediaType="movie"
                posterSrc={item.poster_path}
                animation={true}
              />
            ))}
          </Grid>
        </S.ActionGenre>

        <S.ComedyGenre>
          <h1>Comedy</h1>
          <Grid cols={6}>
            {genresList.comedy.slice(0, 6).map((item: any) => (
              <Card
                id={item.id}
                mediaType="movie"
                posterSrc={item.poster_path}
                animation={true}
              />
            ))}
          </Grid>
        </S.ComedyGenre>
      </Layout>
    </>
  );
};

export default Home;
