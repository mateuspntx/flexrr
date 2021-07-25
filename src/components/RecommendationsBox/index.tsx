import { useEffect, useState } from 'react';

import Tmdb from '../../services/tmdb';

import { RecommendationsResponse } from '../../types/tmdb';

import Card from '../../components/Card';

import * as S from './styles';
import CarouselSlider from '../CarouselSlider';

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
    <>
      {recommList && recommList.results?.length !== 0 ? (
        <S.Container>
          <h1>Recommendations</h1>
          <CarouselSlider gradientBar>
            {recommList.results?.map((item) => (
              <S.CardWrapper>
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
              </S.CardWrapper>
            ))}
          </CarouselSlider>
        </S.Container>
      ) : null}
    </>
  );
};

export default RecommendationsBox;
