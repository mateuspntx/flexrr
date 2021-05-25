import { useParams } from 'react-router-dom';

import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import CastBox from '../../components/CastBox';
import FactsBox from '../../components/FactsBox';
import ReviewBox from '../../components/ReviewBox';

import * as S from './styles';
import RecommendationsBox from '../../components/RecommendationsBox';

const Movies = () => {
  const { movieId } = useParams<{ movieId: string }>();

  return (
    <Layout>
      <Hero id={movieId} mediaType="movie" variant="full" />
      <S.ContentContainer>
        <FactsBox id={movieId} mediaType="movie" />
        <CastBox id={movieId} mediaType="movie" />
        <ReviewBox id={movieId} mediaType="movie" />
        <RecommendationsBox id={movieId} mediaType="movie" />
      </S.ContentContainer>
    </Layout>
  );
};

export default Movies;
