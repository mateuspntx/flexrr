import { memo, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import * as S from './styles';

const Navbar = () => {
  const history = useHistory();

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();

    searchInputRef.current?.value &&
      history.push(`/search?q=${searchInputRef.current.value}`);
  };

  return (
    <S.Container>
      <S.Logo>
        <Link to="/">
          <h1>Flexrr</h1>
        </Link>
      </S.Logo>
      <S.MenuWrapper>
        <S.SearchWrapper onSubmit={(e) => handleSearch(e)}>
          <S.SearchButton type="button" onClick={() => handleSearch()} />
          <S.SearchInput placeholder="Movies, TV Shows, People..." ref={searchInputRef} />
        </S.SearchWrapper>

        <Link to="/">Discover</Link>
        <Link to="/movie">Movies</Link>
        <Link to="/tv">TV Shows</Link>
      </S.MenuWrapper>
    </S.Container>
  );
};

export default memo(Navbar);
