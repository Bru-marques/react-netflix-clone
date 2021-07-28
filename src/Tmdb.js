/* eslint-disable default-case */ /* eslint-disable no-unreachable */ /* eslint-disable import/no-anonymous-default-export */
/*Fetch data from The Movie DB */
const API_KEY = "84af8151eaafddda1850b13512c3504f";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  return (await fetch(`${API_BASE}${endpoint}`)).json();
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Netflix Originals",
        items: await basicFetch(
          `/discover/tv/?with_network=213&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trends",
        title: "Trending Now",
        items: await basicFetch(`/trending/all/week?&api_key=${API_KEY}`),
      },
      {
        slug: "toprated",
        title: "Top Rated",
        items: await basicFetch(`/movie/top_rated/?&api_key=${API_KEY}`),
      },
      {
        slug: "action",
        title: "Action",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comedy",
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Horror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentary",
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};
    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(`/movie/${movieId}?&api_key=${API_KEY}`);
          break;
        case "tv":
          info = await basicFetch(`/tv/${movieId}?&api_key=${API_KEY}`);
          break;
          defaul: info = null;
          break;
      }
    }
    return info;
  },
};
