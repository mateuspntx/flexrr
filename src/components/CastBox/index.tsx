import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Tmdb from '../../services/tmdb';

import { CreditsResponse } from '../../types/tmdb';

import CastBoxSkeleton from '../Skeletons/CastBox';

import DefaultUserAvatar from '../../assets/images/light_default_user-avatar.png';

import * as S from './styles';

interface CastBoxProps {
  id: string;
  mediaType: string;
}

const CastBox = ({ id, mediaType }: CastBoxProps) => {
  const [creditsDetails, setCreditsDetails] = useState({} as CreditsResponse);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const creditsResponse = await Tmdb.getCredits(mediaType, id);

        setCreditsDetails(creditsResponse);

        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id, mediaType]);

  return (
    <>
      {creditsDetails.cast?.length !== 0 ? (
        isLoading ? (
          <CastBoxSkeleton />
        ) : (
          <S.Container>
            <S.HeaderWrapper>
              <h1>Top-billed Cast</h1>
              <Link to={`${id}/cast`}>
                <p>Full Cast and Crew</p>
              </Link>
            </S.HeaderWrapper>

            <S.ScrollWrapper className="themed-scroll">
              {creditsDetails.cast?.slice(0, 10).map((credit) => (
                <S.Wrapper key={credit.credit_id}>
                  <S.Photo
                    src={
                      credit.profile_path == null
                        ? DefaultUserAvatar
                        : Tmdb.image(`w300/${credit.profile_path!}`)
                    }
                    loading="lazy"
                  />
                  <S.Name>{credit.name}</S.Name>
                  <S.Character>{credit.character}</S.Character>
                </S.Wrapper>
              ))}
            </S.ScrollWrapper>
          </S.Container>
        )
      ) : (
        <S.Container>
          <h1>No cast details at this moment</h1>
        </S.Container>
      )}
    </>
  );
};
export default CastBox;
