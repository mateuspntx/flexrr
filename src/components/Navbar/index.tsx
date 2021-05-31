import { Link } from 'react-router-dom';

import * as S from './styles';

const Navbar = () => {
  return (
    <S.Container>
      <S.Logo>
        <Link to="/">
          <h1>Flexrr</h1>
        </Link>
      </S.Logo>
      <S.MenuWrapper>
        <S.SearchWrapper>
          <S.SearchButton />
          <S.SearchInput placeholder="Movies, TV Shows, People..." />
        </S.SearchWrapper>
        <Link to="/">Discover</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/tv">TV Shows</Link>
      </S.MenuWrapper>
    </S.Container>
  );
};

export default Navbar;
