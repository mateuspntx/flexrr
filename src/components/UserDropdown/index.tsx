import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Tmdb from '../../services/tmdb';

import { useAuth } from '../../contexts/auth';

import Button from '../Button';

import DefaultUserAvatar from '../../assets/images/light_default_user-avatar.png';

import * as S from './styles';

const UserDropdown = () => {
  const { user, onLogout } = useAuth();
  const location = useLocation();

  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  return (
    <>
      {user && (
        <S.Container>
          <S.Avatar
            src={
              (user.avatar.gravatar.hash &&
                `https://www.gravatar.com/avatar/${user.avatar.gravatar.hash}?s=200`) ||
              (user.avatar.tmdb.avatar_path &&
                Tmdb.image(`w300/${user.avatar.tmdb.avatar_path}`)) ||
              DefaultUserAvatar
            }
            alt={user.username}
            title={user.username}
            onClick={() => setIsDropdownVisible((prev) => !prev)}
          />

          {isDropdownVisible && (
            <S.Wrapper>
              <S.UsernameWrapper>
                <Link to="/watchlist">
                  <h3>{user.username}</h3>
                </Link>
              </S.UsernameWrapper>

              <Link to="/watchlist">
                <Button variant="transparent">Watchlist</Button>
              </Link>
              <Button variant="red" onClick={() => onLogout()}>
                Logout
              </Button>
            </S.Wrapper>
          )}
        </S.Container>
      )}

      {!user && (
        <S.Container>
          <Link to={`/login?redirect_to=${location.pathname}`}>
            <p>Login</p>
          </Link>
        </S.Container>
      )}
    </>
  );
};

export default UserDropdown;
