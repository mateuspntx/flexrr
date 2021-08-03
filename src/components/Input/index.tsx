import { InputHTMLAttributes } from 'react';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input = ({ name, ...rest }: InputProps) => {
  return <S.Input name={name} {...rest} />;
};

export default Input;
