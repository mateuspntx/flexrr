export interface ImagesResponse {
  id: number;
  backdrops?: BackdropsEntity[] | null;
  posters?: PostersEntity[] | null;
}

type BackdropsEntity = {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1?: null;
  vote_average: number;
  vote_count: number;
  width: number;
};

type PostersEntity = {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1?: string;
  vote_average: number;
  vote_count: number;
  width: number;
};
