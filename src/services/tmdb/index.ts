const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const TMDB_API_BASE = 'https://api.themoviedb.org/3';
const TMDB_IMAGES_URL = 'https://image.tmdb.org/t/p';

const fetcher = async (endpoint: string, params?: string) => {
  return await fetch(
    `${TMDB_API_BASE}${endpoint}?api_key=${TMDB_API_KEY}&${params || ''}`
  );
};

const Tmdb = {
  image(imageSrc: string) {
    return `${TMDB_IMAGES_URL}/${imageSrc}`;
  },

  async getTrending(mediaType?: string, timeWindow?: string) {
    try {
      const data = await fetcher(
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
      const data = await fetcher(`/${mediaType}/${id}`);
      const jsonData = await data.json();

      return jsonData;
    } catch (err) {
      console.log(err);
    }
  },

  async getImages(mediaType: string, id: string) {
    try {
      const data = await fetcher(`/${mediaType}/${id}/images`);
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
      const data = await fetcher(
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
    try {
      const data = await fetcher(`/${mediaType}/${id}/credits`);
      const jsonData = await data.json();

      return jsonData;
    } catch (err) {
      console.log(err);
    }
  },

  async getReviews(mediaType: string, id: string) {
    try {
      const data = await fetcher(`/${mediaType}/${id}/reviews`);
      const jsonData = await data.json();

      return jsonData;
    } catch (err) {
      console.error(err);
    }
  },

  async getRecommendations(mediaType: string, id: string) {
    try {
      const data = await fetcher(`/${mediaType}/${id}/recommendations`);
      const jsonData = await data.json();

      return jsonData;
    } catch (err) {
      console.error(err);
    }
  },
};

export default Tmdb;
