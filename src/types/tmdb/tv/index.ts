export interface TvResponse {
  backdrop_path: string;
  created_by?: CreatedByEntity[] | null;
  episode_run_time?: number[] | null;
  first_air_date: string;
  genres?: GenresEntity[] | null;
  homepage: string;
  id: number;
  in_production: boolean;
  languages?: string[] | null;
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAirOrNextEpisodeToAir;
  name: string;
  next_episode_to_air: LastEpisodeToAirOrNextEpisodeToAir;
  networks?: NetworksEntityOrProductionCompaniesEntity[] | null;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country?: string[] | null;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies?: NetworksEntityOrProductionCompaniesEntity[] | null;
  production_countries?: ProductionCountriesEntity[] | null;
  seasons?: SeasonsEntity[] | null;
  spoken_languages?: SpokenLanguagesEntity[] | null;
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

interface CreatedByEntity {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

interface GenresEntity {
  id: number;
  name: string;
}

interface LastEpisodeToAirOrNextEpisodeToAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

interface NetworksEntityOrProductionCompaniesEntity {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}

interface ProductionCountriesEntity {
  iso_3166_1: string;
  name: string;
}

interface SeasonsEntity {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

interface SpokenLanguagesEntity {
  english_name: string;
  iso_639_1: string;
  name: string;
}
