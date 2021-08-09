import { useEffect, useState } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';

import Tmdb from '../../services/tmdb';

import { useAuth } from '../../contexts/auth';

import useDocumentTitle from '../../hooks/useDocumentTitle';

import Layout from '../../components/Layout';
import Grid from '../../components/Grid';
import Card from '../../components/Card';
import CardSkeleton from '../../components/Skeletons/Card';

import * as S from './styles';

const Watchlist = () => {
  const { token, user } = useAuth();

  useDocumentTitle('Watchlist - Flexrr');

  const [watchlist, setWatchlist] = useState([] as any);
  const [mediaType, setMediaType] = useState<'movies' | 'tv'>('movies');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

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
          setIsLoadingMore(true);

          setWatchlist((prevResults: any) => [
            ...prevResults,
            ...watchlistResponse.results,
          ]);

          setIsLoadingMore(false);
        } else {
          setWatchlist(watchlistResponse.results);
        }

        setTotalPages(watchlistResponse.total_pages);
        setTotalResults(watchlistResponse.total_results);

        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchWatchlist();
  }, [mediaType, currentPage, token, user]);

  const changeMediaType = (type: 'movies' | 'tv') => {
    if (type === mediaType) {
      return;
    }

    setIsLoading(true);
    setWatchlist([]);
    setCurrentPage(1);
    setMediaType(type);
  };

  const loadMoreResults = () => {
    if (currentPage === totalPages) {
      return;
    }

    setCurrentPage((prev) => prev + 1);
  };

  return (
    <Layout>
      <S.Container>
        <S.Header>
          <S.HeaderTop>
            <h1>Watchlist</h1>
            <S.ButtonsWrapper>
              <S.StyledButton
                variant={mediaType === 'movies' ? `orange` : `transparent`}
                onClick={() => changeMediaType('movies')}
              >
                Movies
              </S.StyledButton>
              <S.StyledButton
                variant={mediaType === 'tv' ? 'orange' : 'transparent'}
                onClick={() => changeMediaType('tv')}
              >
                TV
              </S.StyledButton>
            </S.ButtonsWrapper>
          </S.HeaderTop>

          <S.HeaderBottom>
            {!isLoading &&
              totalResults !== 0 &&
              (totalResults > 1 ? (
                <p>
                  There are {totalResults} items on your{' '}
                  {mediaType === 'tv' ? 'TV Shows' : mediaType} watchlist
                </p>
              ) : (
                <p>
                  There is only {totalResults} item on your{' '}
                  {mediaType === 'tv' ? 'TV Shows' : mediaType} watchlist
                </p>
              ))}
          </S.HeaderBottom>
        </S.Header>

        {isLoading ? (
          <Grid cols={6} gap="16px 10px">
            {[...Array(6)].map((i) => (
              <CardSkeleton key={i} />
            ))}
          </Grid>
        ) : (
          <>
            {watchlist?.length === 0 && (
              <S.NotFoundWrapper>
                <h2>
                  You haven't added any {mediaType === 'tv' ? 'TV Shows' : mediaType} to
                  your watchlist
                </h2>
                <p>Go to Discover and choose one to add.</p>
              </S.NotFoundWrapper>
            )}

            <Grid cols={6} gap="16px 10px">
              {watchlist
                ? watchlist.map((item: any) => (
                    <Card
                      key={item.id}
                      id={item.id}
                      mediaType={mediaType === 'movies' ? 'movie' : mediaType}
                      posterSrc={item.poster_path}
                      onHoverData={{
                        title: item.title || item.original_name,
                        backdropSrc: item.backdrop_path || item.poster_path,
                        overview: item.overview,
                        releaseDate: item.release_date || item.first_air_date,
                        genresIds: item.genre_ids,
                      }}
                    />
                  ))
                : [...Array(6)].map((i) => <CardSkeleton key={i} />)}
            </Grid>

            <S.Footer>
              {currentPage !== totalPages && totalPages > 1 && (
                <S.StyledButton
                  variant="orange"
                  onClick={() => loadMoreResults()}
                  disabled={isLoadingMore}
                >
                  {!isLoadingMore ? 'Load more' : <SyncLoader size={5} />}
                </S.StyledButton>
              )}
            </S.Footer>
          </>
        )}
      </S.Container>
    </Layout>
  );
};

export default Watchlist;
