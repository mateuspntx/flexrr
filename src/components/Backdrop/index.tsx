import * as S from './styles';

interface BackdropProps {
  backdropSrc: string;
  blur?: boolean;
}

const Backdrop = ({ backdropSrc, blur }: BackdropProps) => {
  return <S.Backdrop backgroundSrc={backdropSrc} withBlur={blur ?? true} />;
};

export default Backdrop;
