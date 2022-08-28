import axios from "axios";

export const movieStore = {
  state: () => ({
    data: null,
    loading: false,
  }),
  mutations: {
    SET_MOVIE_INFO(state, movie) {
      state.data = movie;
    },
    SET_MOVIE_INFO_LOADING(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    async fetchMovieInfo({ commit }, payload) {
      await commit("SET_MOVIE_INFO_LOADING", true);
      try {
        const data = await axios.post(`?apikey=cd264dd9&i=${payload}`);
        commit("SET_MOVIE_INFO", data.data);
      } catch (error) {
        console.log(error);
      } finally {
        await commit("SET_MOVIE_INFO_LOADING", false);
      }
    },
  },
  getters: {
    getMovieItem(state) {
      return state.data;
    },
    getMovieItemLoading(state) {
      return state.loading;
    },
  },
};
