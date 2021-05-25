import { useParams } from 'react-router-dom';

import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import CastBox from '../../components/CastBox';
import FactsBox from '../../components/FactsBox';
import ReviewBox from '../../components/ReviewBox';
import RecommendationsBox from '../../components/RecommendationsBox';

import * as S from './styles';

const TvShows = () => {
  const { tvshowId } = useParams<{ tvshowId: string }>();

  return (
    <Layout>
      <Hero id={tvshowId} mediaType="tv" variant="full" />
      <S.ContentContainer>
        <FactsBox id={tvshowId} mediaType="tv" />
        <CastBox id={tvshowId} mediaType="tv" />
        <ReviewBox id={tvshowId} mediaType="tv" />
        <RecommendationsBox id={tvshowId} mediaType="tv" />
      </S.ContentContainer>
    </Layout>
  );
};

export default TvShows;
