import { useEffect, useState } from 'react';

import Tmdb from '../../services/tmdb';

import { RecommendationsResponse } from '../../types/tmdb';

import Card from '../../components/Card';

import * as S from './styles';

interface RecommendationsProps {
  id: string;
  mediaType: string;
}

const RecommendationsBox = ({ id, mediaType }: RecommendationsProps) => {
  const [recommList, setRecommList] = useState({} as RecommendationsResponse);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recommResponse = await Tmdb.getRecommendations(mediaType, id);

        setRecommList(recommResponse);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id, mediaType]);

  return (
    <S.Container>
      <h1>Recommendations</h1>
      <S.Wrapper>
        {recommList.results?.slice(0, 6).map((item) => (
          <Card
            key={item.id}
            id={item.id}
            mediaType={item.media_type}
            posterSrc={item.poster_path}
          />
        ))}
      </S.Wrapper>
    </S.Container>
  );
};

export default RecommendationsBox;
