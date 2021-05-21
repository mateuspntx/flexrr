export interface RecommendationsResponse {
  page: number;
  results?: ResultsEntity[] | null;
  total_pages: number;
  total_results: number;
}

type ResultsEntity = {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[] | null;
  id: string;
  media_type: string;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
