import { useEffect, useState } from 'react';
import { Redirect, useLocation } from 'react-router';
import SyncLoader from 'react-spinners/SyncLoader';

import Tmdb from '../../services/tmdb';

import useDocumentTitle from '../../hooks/useDocumentTitle';

import Layout from '../../components/Layout';
import Grid from '../../components/Grid';
import Card from '../../components/Card';
import CardSkeleton from '../../components/Skeletons/Card';

import * as S from './styles';
import Button from '../../components/Button';

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string | null>();
  const [searchData, setSearchData] = useState([] as any);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const useQuery = () => new URLSearchParams(useLocation().search);
  const historyQuery = useQuery().get('q')!;

  useEffect(() => {
    setSearchQuery(historyQuery);

    const fetchData = async () => {
      try {
        if (historyQuery !== searchQuery) {
          setIsLoading(true);
          setPageNumber(1);

          const searchResponse = await Tmdb.getSearch(historyQuery, 'multi', 1);

          setSearchData(searchResponse.results);
          setTotalPages(searchResponse.total_pages);
          setTotalResults(searchResponse.total_results);

          setIsLoading(false);
        } else if (pageNumber > 1) {
          setIsLoadingMore(true);

          const searchResponse = await Tmdb.getSearch(searchQuery, 'multi', pageNumber);

          setSearchData((prevResults: any) => [
            ...prevResults,
            ...searchResponse.results,
          ]);

          setIsLoadingMore(false);
        }
      } catch (err) {
        console.log(err);
      }
    };

    historyQuery && fetchData();
  }, [historyQuery, searchQuery, pageNumber]);

  useEffect(() => {
    const loadMoreDiv = document.querySelector('#loadMoreDiv') as Element;

    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        if (pageNumber === totalPages) {
          return;
        }

        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    });

    if (!isLoading && loadMoreDiv) {
      intersectionObserver.observe(loadMoreDiv);
    }

    return () => intersectionObserver.disconnect();
  }, [isLoading, pageNumber, totalPages]);

  useDocumentTitle(`Results for ${historyQuery} - Flexrr`);

  return (
    <>
      {!historyQuery && <Redirect to="/" />}

      <Layout>
        <S.Header>
          <h1>{historyQuery}</h1>
          <p>Found at least {totalResults && totalResults} results</p>
        </S.Header>
        <br />

        {isLoading ? (
          <Grid cols={6} gap="16px 10px">
            {[...Array(6)].map((i) => (
              <CardSkeleton key={i} />
            ))}
          </Grid>
        ) : (
          <>
            {searchData?.length === 0 && (
              <S.NotFoundWrapper>
                <h2>No results found</h2>
                <p>Try searching a different keyword</p>
              </S.NotFoundWrapper>
            )}

            <Grid cols={6} gap="16px 10px">
              {searchData
                ? searchData.map((item: any) => (
                    <Card
                      key={item.id}
                      id={item.id}
                      mediaType={item.media_type}
                      posterSrc={item.poster_path || item.profile_path}
                      title={item.name || item.title || item.original_name}
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

            {pageNumber !== totalPages && totalPages > 1 && (
              <S.Footer>
                {isLoadingMore && (
                  <Button style={{ width: '80px' }}>
                    {!isLoadingMore ? 'Load more' : <SyncLoader size={5} />}
                  </Button>
                )}
              </S.Footer>
            )}
          </>
        )}

        {!isLoading && searchData.length > 19 && <div id="loadMoreDiv"></div>}
      </Layout>
    </>
  );
};

export default SearchPage;
