import * as S from './styles';

interface CardsCarouselProps {
  children: React.ReactNode;
  title?: string;
}

const CardsCarousel = ({ title, children }: CardsCarouselProps) => {
  return (
    <S.Container>
      {title && <h1>{title}</h1>}
      <S.CarouselContainer>
        <S.ScrollWrapper>{children}</S.ScrollWrapper>
      </S.CarouselContainer>
    </S.Container>
  );
};

export default CardsCarousel;
