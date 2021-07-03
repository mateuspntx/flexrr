import * as S from './styles';

interface GridProps {
  cols: number;
  children: React.ReactNode;
}

const Grid = ({ cols, children }: GridProps) => {
  return <S.Container colsNumber={cols}>{children}</S.Container>;
};

export default Grid;
