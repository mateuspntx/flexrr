import { movieGenresIds, tvGenresIds } from './constants';

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const TMDB_API_BASE = 'https://api.themoviedb.org/3';
const TMDB_IMAGES_URL = 'https://image.tmdb.org/t/p';

const api = {
  async get(endpoint: string, params?: string) {
    return await fetch(
      `${TMDB_API_BASE}${endpoint}?api_key=${TMDB_API_KEY}&${params || ''}`
    );
  },

  async post(
    endpoint: string,
    opts: { body?: {}; params?: string; method?: 'POST' | 'PUT' | 'DELETE' }
  ) {
    opts = {
      method: opts.method || 'POST',
      body: opts.body,
      params: opts.params,
    };

    return await fetch(
      `${TMDB_API_BASE}${endpoint}?api_key=${TMDB_API_KEY}&${opts.params || ''}`,
      {
        method: opts.method || 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(opts.body),
      }
    );
  },
};

const Tmdb = {
  image(imageSrc: string) {
    return `${TMDB_IMAGES_URL}/${imageSrc}`;
  },

  async getTrending(mediaType?: string, timeWindow?: string) {
    try {
      const data = await api.get(
        `/trending/${mediaType || 'all'}/${timeWindow || 'week'}`
      );
      const trendingItems = await data.json();

      return trendingItems.results;
    } catch (err) {
      console.log(err);
    }
  },

  async getDetails(mediaType: string, id: string) {
    try {
      const data = await api.get(`/${mediaType}/${id}`);
      const jsonData = await data.json();

      return jsonData;
    } catch (err) {
      console.log(err);
    }
  },

  async getImages(mediaType: string, id: string) {
    try {
      const data = await api.get(`/${mediaType}/${id}/images`);
      const jsonData = await data.json();

      return jsonData;
    } catch (err) {
      console.log(err);
    }
  },

  async getGenreTrending(mediaType: string, genre: string) {
    const genres = {
      action: '28',
      comedy: '35',
      horror: '27',
      romance: '10749',
      documentary: '99',
    } as any;

    try {
      const data = await api.get(
        `/discover/${mediaType}`,
        `with_genres=${genres[genre]}`
      );
      const jsonData = await data.json();

      return jsonData;
    } catch (err) {
      console.log(err);
    }
  },

  async getCredits(mediaType: string, id: string) {
    let creditsType = 'credits';

    if (mediaType === 'tv') {
      creditsType = 'aggregate_credits';
    }

    try {
      const data = await api.get(`/${mediaType}/${id}/${creditsType}`);
      const jsonData = await data.json();

      return jsonData;
    } catch (err) {
      console.log(err);
    }
  },

  async getReviews(mediaType: string, id: string) {
    try {
      const data = await api.get(`/${mediaType}/${id}/reviews`);
      const jsonData = await data.json();

      return jsonData;
    } catch (err) {
      console.error(err);
    }
  },

  async getRecommendations(mediaType: string, id: string) {
    try {
      const data = await api.get(`/${mediaType}/${id}/recommendations`);
      const jsonData = await data.json();

      return jsonData;
    } catch (err) {
      console.error(err);
    }
  },

  async getSearch(query: string, mediaType?: string, page?: number) {
    try {
      const data = await api.get(
        `/search/${mediaType || 'multi'}`,
        `query=${query}&page=${page || '1'}`
      );

      const jsonData = await data.json();

      return jsonData;
    } catch (err) {
      console.error(err);
    }
  },

  getGenre(mediaType: string, genreId: number) {
    let actualGenre: string | undefined;

    const movieGenre = movieGenresIds.find((genre) => genre.id === genreId);

    const tvGenre = tvGenresIds.find((genre) => genre.id === genreId);

    if (mediaType === 'movie') {
      actualGenre = movieGenre?.name;
    }

    if (mediaType === 'tv') {
      actualGenre = tvGenre?.name;
    }

    return actualGenre;
  },

  async getVideos(mediaType: string, id: string) {
    try {
      const data = await api.get(`/${mediaType}/${id}/videos`);
      const jsonData = await data.json();

      return jsonData;
    } catch (err) {
      console.error(err);
    }
  },

  async getRequestToken() {
    try {
      const response = await api.get(`/authentication/token/new`);

      return response.json();
    } catch (err) {
      console.error(err);
    }
  },

  async authentication(username: string, password: string, request_token: string) {
    try {
      const response = await api.post('/authentication/token/validate_with_login', {
        body: {
          username,
          password,
          request_token,
        },
      });

      return response.json();
    } catch (err) {
      console.error(err);
    }
  },

  async getSessionId(request_token: string) {
    try {
      const response = await api.post('/authentication/session/new', {
        params: `request_token=${request_token}`,
      });

      return response.json();
    } catch (err) {
      console.error(err);
    }
  },

  async deleteSession(session_id: string) {
    try {
      const response = await api.post('/authentication/session', {
        method: 'DELETE',
        body: { session_id },
      });

      return response.json();
    } catch (err) {
      console.error(err);
    }
  },

  async getAccountDetails(session_id: string) {
    try {
      const response = await api.get('/account', `session_id=${session_id}`);

      return response.json();
    } catch (err) {
      console.log(err);
    }
  },

  async getAccountWatchlist(
    id: number,
    mediaType: string,
    session_id: string,
    page?: number
  ) {
    try {
      const response = await api.get(
        `/account/${id}/watchlist/${mediaType}`,
        `session_id=${session_id}&page=${page || 1}`
      );

      return response.json();
    } catch (err) {
      console.log(err);
    }
  },

  async handleAccountWatchlist(
    userId: number,
    session_id: string,
    mediaType: string,
    mediaId: number,
    action: 'add' | 'remove'
  ) {
    let watchlistAction = true;

    if (action === 'add') {
      watchlistAction = true;
    }

    if (action === 'remove') {
      watchlistAction = false;
    }

    try {
      const response = await api.post(`/account/${userId}/watchlist`, {
        params: `session_id=${session_id}`,
        body: {
          media_type: mediaType,
          media_id: mediaId,
          watchlist: watchlistAction,
        },
      });

      return response.json();
    } catch (err) {
      console.error(err);
    }
  },

  async getMediaAccountStates(mediaId: number, mediaType: string, session_id: string) {
    try {
      const response = await api.get(
        `/${mediaType}/${mediaId}/account_states`,
        `session_id=${session_id}`
      );

      return response.json();
    } catch (err) {
      console.log(err);
    }
  },
};

export default Tmdb;
