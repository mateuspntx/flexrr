export const getMovieReleaseDate = (date: string) => {
  const [year, month, day] = date.split('-');

  const full = `${month}/${day}/${year}`;

  return { year, month, day, full };
};
