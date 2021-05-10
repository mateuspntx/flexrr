export interface MovieResponse {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: null;
  budget: number;
  genres?: GenresEntity[] | null;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies?: ProductionCompaniesEntity[] | null;
  production_countries?: ProductionCountriesEntity[] | null;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages?: SpokenLanguagesEntity[] | null;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface GenresEntity {
  id: number;
  name: string;
}

interface ProductionCompaniesEntity {
  id: number;
  logo_path?: string | null;
  name: string;
  origin_country: string;
}

interface ProductionCountriesEntity {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguagesEntity {
  english_name: string;
  iso_639_1: string;
  name: string;
}
