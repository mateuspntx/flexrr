import * as S from './styles';

interface GridProps {
  children: React.ReactNode;
  cols: number;
  gap?: string;
}

const Grid = ({ cols, gap, children }: GridProps) => {
  return (
    <S.Container colsNumber={cols} gapNumber={gap}>
      {children}
    </S.Container>
  );
};

export default Grid;
