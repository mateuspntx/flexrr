import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'transparent' | 'red' | 'orange';
  children: React.ReactNode;
}

const Button = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <S.Button {...rest} variant={variant}>
      {children}
    </S.Button>
  );
};

export default Button;
