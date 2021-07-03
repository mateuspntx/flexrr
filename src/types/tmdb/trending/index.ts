export interface TrendingResponse {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[] | null;
  id: string;
  original_language: string;
  original_title: string | null;
  overview: string;
  poster_path: string;
  release_date: string | null;
  title: string | null;
  video: boolean;
  vote_average: number;
  vote_count: number;
  popularity: number;
  media_type: string;
  original_name: string | null;
  origin_country: string[] | null;
  name: string | null;
  first_air_date: string | null;
}
