import { Link } from 'react-router-dom';

import { Container, Logo, MenuWrapper } from './styles';

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <Link to="/">
          <h1>Flexrr</h1>
        </Link>
      </Logo>
      <MenuWrapper>
        <Link to="/">Discover</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/tv">TV Shows</Link>
      </MenuWrapper>
    </Container>
  );
};

export default Navbar;
