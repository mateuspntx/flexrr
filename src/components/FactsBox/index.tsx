import { useEffect, useState } from 'react';

import Tmdb from '../../services/tmdb';

import { MovieResponse, TvResponse } from '../../types/tmdb';

import { formatPrice } from '../../utils';

import * as S from './styles';

type DataResponse = TvResponse & MovieResponse;

interface FactsBoxProps {
  id: string;
  mediaType: string;
}

const FactsBox = ({ id, mediaType }: FactsBoxProps) => {
  const [detailsData, setDetailsData] = useState({} as DataResponse);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const detailsResponse = await Tmdb.getDetails(mediaType, id);

        setDetailsData(detailsResponse);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id, mediaType]);

  return (
    <S.Container>
      <p>
        <b>Status</b>
      </p>
      <p>{detailsData.status}</p>

      <p>
        <b>Original Language</b>
      </p>
      <p>
        {detailsData.spoken_languages &&
          (detailsData.spoken_languages.length === 0
            ? '-'
            : detailsData.spoken_languages[0].english_name)}
      </p>

      {mediaType === 'movie' && (
        <>
          <p>
            <b>Budget</b>
          </p>
          <p>{detailsData.budget === 0 ? '-' : formatPrice(detailsData.budget)}</p>

          <p>
            <b>Revenue</b>
          </p>
          <p>{detailsData.revenue === 0 ? '-' : formatPrice(detailsData.revenue)}</p>
        </>
      )}

      {mediaType === 'tv' && (
        <>
          <p>
            <b>Type</b>
          </p>
          <p>{detailsData.type === null ? '-' : detailsData.type}</p>
        </>
      )}
    </S.Container>
  );
};

export default FactsBox;
