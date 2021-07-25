import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import Tmdb from '../../services/tmdb';

import { truncateText, getMovieReleaseDate } from '../../utils';

import CardSkeleton from '../Skeletons/Card';

import * as S from './styles';

import NoPosterPlaceholder from '../../assets/images/no_poster-placeholder.png';
import DefaultUserAvatar from '../../assets/images/light_default_user-avatar.png';

interface CardProps {
  id: string;
  mediaType: string;
  title?: string | null;
  posterSrc: string;
  onHoverData?: OnHoverData;
}

interface OnHoverData {
  title: string;
  backdropSrc?: string;
  overview?: string | null;
  releaseDate?: string | null;
  genresIds?: number[] | null;
}

export interface CardPosition {
  top: number | undefined;
  left: number | undefined;
  right: number | undefined;
}

const CardPositionInitialState = {
  top: 0,
  left: 0,
  right: 0,
};

const Card = ({ id, mediaType, title, posterSrc, onHoverData }: CardProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [position, setPosition] = useState<CardPosition>(CardPositionInitialState);

  const cardContainerRef = useRef() as React.RefObject<HTMLDivElement>;
  const hoverContainerRef = useRef() as React.RefObject<HTMLDivElement>;

  const onMouseOver = useCallback(() => {
    const { top, left, right } =
      cardContainerRef?.current?.getBoundingClientRect() as DOMRect;

    if (hoverContainerRef.current) {
      hoverContainerRef.current.style.willChange = 'transform, opacity';
    }

    setPosition({ top, left, right });

    setIsHovering(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    if (hoverContainerRef.current) {
      hoverContainerRef.current.style.willChange = 'auto';
    }

    setIsHovering(false);
  }, []);

  useEffect(() => {
    let cardContainerRefValue = cardContainerRef.current;

    if (onHoverData && document.body.clientWidth > 900 && cardContainerRefValue) {
      cardContainerRefValue.addEventListener('mouseover', onMouseOver);
      cardContainerRefValue.addEventListener('mouseleave', onMouseLeave);

      return () => {
        cardContainerRefValue?.removeEventListener('mouseenter', onMouseOver);
        cardContainerRefValue?.removeEventListener('mouseleave', onMouseLeave);
      };
    }
  }, [onMouseOver, onMouseLeave, onHoverData]);

  return (
    <>
      {id || posterSrc ? (
        <Link to={`/${mediaType}/${id}`}>
          <S.Container isLoading={isLoading} ref={cardContainerRef}>
            {posterSrc ? (
              <S.PosterWrapper
                src={Tmdb.image(`w500/${posterSrc}`)}
                loading="lazy"
                onLoad={() => setIsLoading(false)}
                opacity={isLoading}
              />
            ) : (
              <S.PosterWrapper
                src={mediaType === 'person' ? DefaultUserAvatar : NoPosterPlaceholder}
                loading="lazy"
                onLoad={() => setIsLoading(false)}
                opacity={isLoading}
              />
            )}

            {title &&
              (!posterSrc ? (
                <S.Details>
                  <h3>{title}</h3>
                </S.Details>
              ) : (
                mediaType === 'person' && (
                  <S.Details>
                    <h3>{title}</h3>
                  </S.Details>
                )
              ))}

            {mediaType !== 'person' && onHoverData && isHovering ? (
              <S.HoverContainer position={position} ref={hoverContainerRef}>
                <S.HoverImage>
                  {onHoverData.backdropSrc ? (
                    <img
                      src={Tmdb.image(`w500/${onHoverData.backdropSrc}`)}
                      alt={onHoverData.title}
                    />
                  ) : (
                    <img src={NoPosterPlaceholder} alt={onHoverData.title} />
                  )}
                </S.HoverImage>

                <S.HoverDetails>
                  <header>
                    <h4>{onHoverData.title}</h4>
                    <p>{truncateText(String(onHoverData.overview), 150)}</p>
                  </header>
                  <footer>
                    <p>
                      {onHoverData.genresIds &&
                        onHoverData.genresIds
                          .slice(0, 3)
                          .map((genreId) => Tmdb.getGenre(mediaType, genreId))
                          .join(' 🞄 ')}
                    </p>
                    <p>
                      {onHoverData.releaseDate &&
                        getMovieReleaseDate(onHoverData.releaseDate).year}
                    </p>
                  </footer>
                </S.HoverDetails>
              </S.HoverContainer>
            ) : null}
          </S.Container>
        </Link>
      ) : (
        <CardSkeleton />
      )}
    </>
  );
};

export default Card;
