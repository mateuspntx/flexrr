import { useState } from 'react';
import { Link } from 'react-router-dom';

import Tmdb from '../../services/tmdb';

import CardSkeleton from '../Skeletons/Card';

import * as S from './styles';

interface CardProps {
  id: string;
  mediaType: string;
  title?: string | null;
  posterSrc: string;
  animation?: boolean;
}

const Card = ({ id, mediaType, title, posterSrc, animation }: CardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {id || posterSrc ? (
        <Link to={`/${mediaType}/${id}`}>
          <S.Container hoverAnimation={animation || false} isLoading={isLoading}>
            <S.PosterWrapper
              src={Tmdb.image(`w300/${posterSrc}`)}
              loading="lazy"
              onLoad={() => setIsLoading(false)}
              opacity={isLoading}
            />
            {title && (
              <S.Details>
                <h3>{title}</h3>
              </S.Details>
            )}
          </S.Container>
        </Link>
      ) : (
        <CardSkeleton />
      )}
    </>
  );
};

export default Card;
