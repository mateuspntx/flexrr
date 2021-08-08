import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import BeatLoader from 'react-spinners/BeatLoader';

import Tmdb from '../../services/tmdb';

import { useAuth } from '../../contexts/auth';

import * as S from './styles';

import { ReactComponent as AddIcon } from '../../assets/images/plus-icon.svg';
import { ReactComponent as RemoveIcon } from '../../assets/images/check-icon.svg';

interface WatchlistButtonProps {
  userId?: number;
  mediaId: number | string;
  mediaType: string;
}

const WatchlistButton = ({ mediaId, mediaType }: WatchlistButtonProps) => {
  const { user, token } = useAuth();
  const history = useHistory();

  const [isOnWatchlist, setIsOnWatchlist] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchWatchlistState = async () => {
      if (!token) {
        return;
      }

      try {
        setIsLoading(true);

        const watchlistStateResponse = await Tmdb.getMediaAccountStates(
          Number(mediaId),
          mediaType,
          token.id
        );

        setIsOnWatchlist(watchlistStateResponse.watchlist);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchWatchlistState();
  }, [mediaId, mediaType, token]);

  const addToWatchlist = useCallback(async () => {
    if (!token || !user) {
      history.push('/login');

      return;
    }

    try {
      setIsLoading(true);

      const addToWatchlistResponse = await Tmdb.handleAccountWatchlist(
        user.id,
        token.id,
        mediaType,
        Number(mediaId),
        'add'
      );

      if (!addToWatchlistResponse.success) {
        return;
      }

      setIsOnWatchlist(true);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [history, mediaId, mediaType, token, user]);

  const removeFromWatchlist = useCallback(async () => {
    if (!token || !user) {
      return;
    }

    try {
      setIsLoading(true);

      const addToWatchlistResponse = await Tmdb.handleAccountWatchlist(
        user.id,
        token.id,
        mediaType,
        Number(mediaId),
        'remove'
      );

      if (!addToWatchlistResponse.success) {
        return;
      }

      setIsOnWatchlist(false);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [mediaId, mediaType, token, user]);

  return (
    <>
      {isLoading ? (
        <S.StyledButton variant="transparent" disabled={isLoading}>
          <BeatLoader size={2} color="#fff" />
        </S.StyledButton>
      ) : !isOnWatchlist ? (
        <S.StyledButton variant="transparent" onClick={() => addToWatchlist()}>
          <AddIcon title="Add to Watchlist" />
        </S.StyledButton>
      ) : (
        <S.StyledButton variant="transparent" onClick={() => removeFromWatchlist()}>
          <RemoveIcon title="Remove from Watchlist" />
        </S.StyledButton>
      )}
    </>
  );
};

export default WatchlistButton;
