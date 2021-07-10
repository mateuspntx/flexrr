import * as S from './styles';

interface CarouselSliderProps {
  children: React.ReactNode;
  title?: string;
  gradientBar?: boolean;
}

const CarouselSlider = ({ title, gradientBar, children }: CarouselSliderProps) => {
  return (
    <S.Container>
      {title && <h1>{title}</h1>}
      <S.CarouselContainer>
        <S.ScrollWrapper gradientBar={gradientBar || false}>{children}</S.ScrollWrapper>
      </S.CarouselContainer>
    </S.Container>
  );
};

export default CarouselSlider;
