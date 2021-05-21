export interface ReviewsResponse {
  id: number;
  page: number;
  results?: ResultsEntity[] | null;
  total_pages: number;
  total_results: number;
}

type ResultsEntity = {
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};

type AuthorDetails = {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
};
