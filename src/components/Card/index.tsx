import { Link } from 'react-router-dom';

import Tmdb from '../../services/tmdb';

import * as S from './styles';

interface CardProps {
  id: string;
  mediaType: string;
  title?: string | null;
  posterSrc: string;
  animation?: boolean;
}

const Card = ({ id, mediaType, title, posterSrc, animation }: CardProps) => {
  return (
    <Link to={`/${mediaType}/${id}`}>
      <S.Container hoverAnimation={animation || false}>
        <S.PosterWrapper src={Tmdb.image(`w300/${posterSrc}`)} loading="lazy" />
        <S.Details>
          <h3>{title && title}</h3>
        </S.Details>
      </S.Container>
    </Link>
  );
};

export default Card;
