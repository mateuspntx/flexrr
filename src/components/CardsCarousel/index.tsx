import * as S from './styles';

interface CardsCarouselProps {
  children: React.ReactNode;
  title?: string;
  gradientBar?: boolean;
}

const CardsCarousel = ({ title, gradientBar, children }: CardsCarouselProps) => {
  return (
    <S.Container>
      {title && <h1>{title}</h1>}
      <S.CarouselContainer>
        <S.ScrollWrapper gradientBar={gradientBar || false}>{children}</S.ScrollWrapper>
      </S.CarouselContainer>
    </S.Container>
  );
};

export default CardsCarousel;
