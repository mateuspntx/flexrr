import { useEffect, useState } from 'react';

import Tmdb from '../../services/tmdb';

import { useAuth } from '../../contexts/auth';

import CarouselSlider from '../CarouselSlider';
import Card from '../Card';
import CardSkeleton from '../Skeletons/Card';

import * as S from './styles';

interface WatchlistCarouselProps {
  mediaType: 'tv' | 'movies';
}

const WatchlistCarousel = ({ mediaType }: WatchlistCarouselProps) => {
  const { token, user } = useAuth();

  const [watchlist, setWatchlist] = useState([] as any);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        if (!token || !user) {
          return;
        }

        const watchlistResponse = await Tmdb.getAccountWatchlist(
          user.id,
          mediaType,
          token.id,
          currentPage
        );

        if (currentPage > 1) {
          setWatchlist((prevResults: any) => [
            ...prevResults,
            ...watchlistResponse.results,
          ]);
        } else {
          setWatchlist(watchlistResponse.results);
        }

        setTotalPages(watchlistResponse.total_pages);

        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchWatchlist();
  }, [currentPage, mediaType, token, user]);

  const loadMoreResults = () => {
    if (currentPage === totalPages) {
      return;
    }

    setCurrentPage((prev) => prev + 1);
  };

  if (!token || !user) {
    return null;
  }

  return (
    <>
      {isLoading ? (
        <CarouselSlider title="Watchlist" titleLink="/watchlist" gradientBar>
          {[...Array(7)].map((i) => (
            <S.CardWrapper>
              <CardSkeleton key={i} />
            </S.CardWrapper>
          ))}
        </CarouselSlider>
      ) : (
        <CarouselSlider
          title="Watchlist"
          titleLink="/watchlist"
          gradientBar
          onScrollEnd={() => loadMoreResults()}
        >
          {watchlist ? (
            watchlist.map((item: any) => (
              <S.CardWrapper>
                <Card
                  key={item.id}
                  id={item.id}
                  mediaType="movie"
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
            ))
          ) : (
            <S.CardWrapper>
              {[...Array(7)].map((i) => (
                <CardSkeleton key={i} />
              ))}
            </S.CardWrapper>
          )}
        </CarouselSlider>
      )}
    </>
  );
};

export default WatchlistCarousel;
