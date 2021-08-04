import * as S from './styles';

interface ErrorMessageProps {
  children: React.ReactNode;
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <S.Container>{children}</S.Container>;
};

export default ErrorMessage;
