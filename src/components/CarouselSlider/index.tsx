import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

interface CarouselSliderProps {
  children: React.ReactNode;
  title?: string;
  titleLink?: string;
  gradientBar?: boolean;
  onScrollEnd?: () => void;
}

const CarouselSlider = ({
  title,
  titleLink,
  gradientBar,
  onScrollEnd,
  children,
}: CarouselSliderProps) => {
  const [isScrollAtEnd, setIsScrollAtEnd] = useState(false);

  const carouselContainerRef = useRef() as React.RefObject<HTMLDivElement>;

  const handleScroll = useCallback(
    (e: Event) => {
      const scroll = e.target as Element;

      if (scroll.scrollLeft >= scroll.scrollWidth - scroll.clientWidth) {
        setIsScrollAtEnd(true);

        onScrollEnd && onScrollEnd();
      } else {
        setIsScrollAtEnd(false);
      }
    },
    [onScrollEnd]
  );

  useEffect(() => {
    let carouselContainerRefValue = carouselContainerRef;

    if (gradientBar) {
      if (carouselContainerRefValue.current) {
        carouselContainerRefValue.current.addEventListener('scroll', handleScroll);

        return () => {
          carouselContainerRefValue?.current?.removeEventListener('scroll', handleScroll);
        };
      }
    }
  }, [handleScroll, gradientBar]);

  return (
    <S.Container>
      {title && (
        <h1>
          <Link to={titleLink || '#'}>{title}</Link>
        </h1>
      )}
      <S.CarouselContainer ref={carouselContainerRef}>
        <S.ScrollWrapper isScrollAtEnd={isScrollAtEnd} gradientBar={gradientBar || false}>
          {children}
        </S.ScrollWrapper>
      </S.CarouselContainer>
    </S.Container>
  );
};

export default CarouselSlider;
