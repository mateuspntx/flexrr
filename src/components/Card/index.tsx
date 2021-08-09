import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import Tmdb from '../../services/tmdb';

import { truncateText, getMovieReleaseDate } from '../../utils';

import CardSkeleton from '../Skeletons/Card';

import * as S from './styles';

import NoPosterPlaceholder from '../../assets/images/no_poster-placeholder.png';
import DefaultUserAvatar from '../../assets/images/light_default_user-avatar.png';
import WatchlistButton from '../WatchlistButton';

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
  const [playHoverEnterAnimation, setPlayHoverEnterAnimation] = useState<boolean>(false);
  const [playHoverLeaveAnimation, setPlayHoverLeaveAnimation] = useState<boolean>(false);

  const [mediaVideoId, setMediaVideoId] = useState<string>('');
  const [videoResponseFetched, setVideoResponseFetched] = useState<boolean>(false);
  const [canShowVideo, setCanShowVideo] = useState<boolean>(true);
  const [playVideoOpacityAnimation, setPlayVideoOpacityAnimation] =
    useState<boolean>(false);

  const cardContainerRef = useRef() as React.RefObject<HTMLDivElement>;
  const hoverContainerRef = useRef() as React.RefObject<HTMLDivElement>;

  const YoutubePlayerOptions = {
    width: '100%',
    height: '100%',
    playerVars: {
      fs: 0,
      mute: 1,
      autoplay: 1,
      controls: 1,
      showinfo: 0,
      autohide: 1,
      disablekb: 1,
      modestbranding: 1,
      cc_load_policy: 0,
      iv_load_policy: 3,
    },
  };

  const onMouseEnter = useCallback(async () => {
    await setIsHovering(true);

    if (!cardContainerRef || !cardContainerRef.current) {
      return;
    }

    const { top, left, right } =
      cardContainerRef?.current?.getBoundingClientRect() as DOMRect;

    if (hoverContainerRef.current) {
      hoverContainerRef.current.style.willChange = 'transform, opacity';
    }

    setPosition({ top, left, right });

    if (!isHovering) {
      setPlayHoverLeaveAnimation(false);
      setPlayHoverEnterAnimation(true);

      const onAnimationEnd = () => {
        const fetchVideoData = async () => {
          try {
            if (videoResponseFetched) {
              return;
            }

            const videoResponse = await Tmdb.getVideos(mediaType, id);

            const trailerId = videoResponse.results.filter(
              (video: { type: string }) => video.type === 'Trailer'
            );

            setMediaVideoId(trailerId[0].key);

            setVideoResponseFetched(true);
          } catch (err) {
            console.log(err);
          }
        };

        fetchVideoData();
      };

      const onAnimationCancel = async () => {
        await setIsHovering(false);
        setPlayHoverEnterAnimation(false);
      };

      hoverContainerRef.current?.addEventListener('animationend', onAnimationEnd);
      hoverContainerRef.current?.addEventListener('animationcancel', onAnimationCancel);

      return () => {
        hoverContainerRef.current?.removeEventListener('animationend', onAnimationEnd);
        hoverContainerRef.current?.removeEventListener(
          'animationcancel',
          onAnimationCancel
        );
      };
    }
  }, [id, isHovering, mediaType, videoResponseFetched]);

  const onMouseLeave = useCallback(() => {
    if (isHovering) {
      setPlayHoverEnterAnimation(false);
      setPlayHoverLeaveAnimation(true);

      if (hoverContainerRef.current) {
        hoverContainerRef.current.style.willChange = 'auto';
      }

      const onAnimationEnd = async () => {
        await setIsHovering(false);
        setPlayHoverLeaveAnimation(false);
      };

      const onAnimationCancel = async () => {
        await setIsHovering(false);
        setPlayHoverLeaveAnimation(false);
      };

      hoverContainerRef.current?.addEventListener('animationend', onAnimationEnd);
      hoverContainerRef.current?.addEventListener('animationcancel', onAnimationCancel);

      return () => {
        hoverContainerRef.current?.removeEventListener('animationend', onAnimationEnd);
        hoverContainerRef.current?.removeEventListener(
          'animationcancel',
          onAnimationCancel
        );
      };
    }
  }, [isHovering]);

  useEffect(() => {
    let cardContainerRefValue = cardContainerRef.current;
    let onHoverCheck = onHoverData && document.body.clientWidth > 1260;
    let onHoverTimer: any;

    if (onHoverCheck && cardContainerRefValue) {
      cardContainerRefValue.addEventListener('mouseenter', () => {
        onHoverTimer = setTimeout(() => {
          onMouseEnter();
        }, 500);
      });

      cardContainerRefValue.addEventListener('mouseleave', () => {
        clearTimeout(onHoverTimer);
        onMouseLeave();
      });

      return () => {
        cardContainerRefValue?.removeEventListener('mouseenter', () => {
          onHoverTimer();
          onMouseEnter();
        });
        cardContainerRefValue?.removeEventListener('mouseleave', () => {
          clearTimeout(onHoverTimer);
          onMouseLeave();
        });
      };
    }
  }, [onMouseEnter, onMouseLeave, onHoverData]);

  const onYoutubeVideoReady = (e: { target: { getPlayerState: () => number } }) => {
    if (e.target.getPlayerState() === -1) {
      setCanShowVideo(false);

      return;
    }

    setPlayVideoOpacityAnimation(true);
  };

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
              <S.HoverContainer
                position={position}
                ref={hoverContainerRef}
                playHoverEnterAnimation={playHoverEnterAnimation}
                playHoverLeaveAnimation={playHoverLeaveAnimation}
              >
                <S.HoverImageContainer>
                  <S.FallbackBackdrop>
                    {onHoverData.backdropSrc ? (
                      <img
                        src={Tmdb.image(`w500/${onHoverData.backdropSrc}`)}
                        alt={onHoverData.title}
                      />
                    ) : (
                      <img src={NoPosterPlaceholder} alt={onHoverData.title} />
                    )}
                  </S.FallbackBackdrop>

                  {mediaVideoId && canShowVideo && (
                    <S.VideoWrapper
                      videoId={mediaVideoId}
                      /* @ts-ignore */
                      opts={YoutubePlayerOptions}
                      onReady={onYoutubeVideoReady}
                      playVideoOpacityAnimation={playVideoOpacityAnimation}
                    />
                  )}
                </S.HoverImageContainer>

                <S.HoverDetails>
                  <header>
                    <h4>{onHoverData.title} </h4>

                    <Link
                      to={(location) => ({
                        ...location,
                        hash: '#',
                      })}
                    >
                      <S.WatchlistButtonWrapper>
                        <WatchlistButton mediaId={id} mediaType={mediaType} />
                      </S.WatchlistButtonWrapper>
                    </Link>

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
