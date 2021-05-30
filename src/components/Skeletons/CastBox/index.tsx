import * as S from './styles';

const CastBoxSkeleton = () => {
  return (
    <S.Container>
      <S.HeaderWrapper>
        <h1>Top-billed Cast</h1>
        <p>Full Cast and Crew</p>
      </S.HeaderWrapper>

      <S.ScrollWrapper className="themed-scroll">
        {[...Array(6)].map((i) => (
          <S.Wrapper key={i}>
            <S.Photo />
            <S.Name />
            <S.Character />
          </S.Wrapper>
        ))}
      </S.ScrollWrapper>
    </S.Container>
  );
};

export default CastBoxSkeleton;
