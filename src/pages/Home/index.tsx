import { useState, useEffect } from 'react';

import Tmdb from '../../services/tmdb';

import { shuffleArray } from '../../utils';

import Layout from '../../components/Layout';
import Grid from '../../components/Grid';
import Card from '../../components/Card';
import Hero from '../../components/Hero';
import CardSkeleton from '../../components/Skeletons/Card';

import { TrendingResponse } from '../../types/tmdb';

import * as S from './styles';

const Home = () => {
  const [trendingList, setTrendingList] = useState([] as TrendingResponse[]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingResponse = await Tmdb.getTrending('all', 'day');
        setTrendingList(shuffleArray(trendingResponse));
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
            {trendingList.length > 0
              ? trendingList.slice(1, 19).map((item) => (
                  <Card
                    key={item.id}
                    id={item.id}
                    mediaType={item.media_type}
                    posterSrc={item.poster_path}
                    onHoverData={{
                      title: item.title || item.original_name,
                      backdropSrc: item.backdrop_path || item.poster_path,
                      overview: item.overview,
                      releaseDate: item.release_date || item.first_air_date,
                      genresIds: item.genre_ids,
                    }}
                  />
                ))
              : [...Array(6)].map((i) => <CardSkeleton key={i} />)}
          </Grid>
        </S.WhatsPopular>
      </Layout>
    </>
  );
};

export default Home;
