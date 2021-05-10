export const getMovieRuntime = (data: number) => {
  const minutes = data % 60;
  const hours = (data - minutes) / 60;

  return { hours, minutes };
};
