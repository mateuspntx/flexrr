import * as S from './styles';

interface BackdropProps {
  backdropSrc: string;
}

const Backdrop = ({ backdropSrc }: BackdropProps) => {
  return <S.Backdrop backgroundSrc={backdropSrc} />;
};

export default Backdrop;
