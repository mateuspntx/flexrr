import * as S from './styles';

import TMDbLogo from '../../assets/images/tmdb_logo.svg';

const Footer = () => {
  return (
    <S.Container>
      <p>
        Made with <span className="heart">&hearts; </span> by{' '}
        <a
          href="https://github.com/mateuspntx"
          target="_blank"
          rel="​noopener noreferrer"
        >
          Mateus Pontes
        </a>
      </p>

      <p>
        Powered by{' '}
        <a href="https://www.themoviedb.org/" target="_blank" rel="​noopener noreferrer">
          <img src={TMDbLogo} alt="TMDb" width="50px" />
        </a>
      </p>
    </S.Container>
  );
};

export default Footer;
