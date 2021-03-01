import { useState, useEffect } from 'react';

import Tmdb from '../../services/tmdb';

import Layout from '../../components/Layout';
import Hero from '../../components/Hero';

import { TrendingResponse } from '../../types/tmdb';

const Home = () => {
  const [trendingList, setTrendingList] = useState([] as TrendingResponse[]);

  useEffect(() => {
    const fetchTrendingData = async () => {
      try {
        const data = await Tmdb.getTrending();

        setTrendingList(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTrendingData();
  }, []);

  return (
    <Layout>
      {trendingList.length > 0 ? (
        <Hero id={trendingList[0].id} mediaType={trendingList[0].media_type} />
      ) : null}
      <h1>Trending</h1>
    </Layout>
  );
};

export default Home;
