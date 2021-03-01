const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const TMDB_API_BASE = 'https://api.themoviedb.org/3';
const TMDB_IMAGES_URL = 'https://image.tmdb.org/t/p';

const fetcher = async (endpoint: string) => {
  return await fetch(`${TMDB_API_BASE}${endpoint}?&api_key=${TMDB_API_KEY}`);
};

const Tmdb = {
  image(imageSrc: string) {
    return `${TMDB_IMAGES_URL}/${imageSrc}`;
  },

  async getTrending() {
    try {
      const data = await fetcher('/trending/all/week');
      const trendingItems = await data.json();

      return trendingItems.results;
    } catch (err) {
      console.log(err);
    }
  },

  async getDetails(mediaType: string, id: number) {
    try {
      const data = await fetcher(`/${mediaType}/${id}`);
      const jsonData = await data.json();

      return jsonData;
    } catch (err) {
      console.log(err);
    }
  },

  async getImages(mediaType: string, id: number) {
    try {
      const data = await fetcher(`/${mediaType}/${id}/images`);
      const jsonData = await data.json();

      return jsonData;
    } catch (err) {
      console.log(err);
    }
  },
};

export default Tmdb;
