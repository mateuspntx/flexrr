import { useState } from 'react';

import * as S from './styles';

interface BackdropProps {
  backdropSrc: string;
  blur?: boolean;
  blurWidth?: number;
  blurAmount?: number;
}

const Backdrop = ({ backdropSrc, blur = true, blurWidth, blurAmount }: BackdropProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <S.Backdrop opacity={isLoading}>
      <S.Image src={backdropSrc} alt="" onLoad={() => setIsLoading(false)} />

      {blur && (
        <S.Blur blurWidth={blurWidth || 100} blurAmount={blurAmount || 80}>
          <div>
            <S.Image src={backdropSrc} alt="" onLoad={() => setIsLoading(false)} />
          </div>
        </S.Blur>
      )}
    </S.Backdrop>
  );
};

export default Backdrop;
