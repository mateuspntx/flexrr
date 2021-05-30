import { useState } from 'react';

import * as S from './styles';

interface BackdropProps {
  backdropSrc: string;
  blur?: boolean;
}

const Backdrop = ({ backdropSrc, blur }: BackdropProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <S.Backdrop withBlur={blur ?? true} opacity={isLoading}>
      <S.Image src={backdropSrc} alt="" onLoad={() => setIsLoading(false)} />
    </S.Backdrop>
  );
};

export default Backdrop;
