export interface CreditsResponse {
  id: number;
  cast?: CastEntity[] | null;
  crew?: CrewEntity[] | null;
}

type CastEntity = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
  roles?: RolesEntity[] | null;
  total_episode_count: number;
};

type CrewEntity = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string | null;
  credit_id: string;
  jobs?: JobsEntity[] | null;
  department: string;
  total_episode_count: number;
};

type RolesEntity = {
  credit_id: string;
  character: string;
  episode_count: number;
};

type JobsEntity = {
  credit_id: string;
  job: string;
  episode_count: number;
};
