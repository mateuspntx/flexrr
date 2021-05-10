import Tmdb from '../../services/tmdb';

import Layout from '../../components/Layout';
import Hero from '../../components/Hero';

const Movies = () => {
  return (
    <Layout>
      <Hero id={587807} mediaType={'movie'} />
    </Layout>
  );
};

export default Movies;
