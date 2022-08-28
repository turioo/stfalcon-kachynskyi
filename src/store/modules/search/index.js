import axios from "axios";

export const searchStore = {
  state: () => ({
    data: null,
    loading: false,
  }),
  mutations: {
    SET_MOVIES_LIST(state, movies) {
      state.data = movies;
    },
    SET_MOVIES_LIST_LOADING(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    async fetchMoviesList({ commit }, payload) {
      await commit("SET_MOVIES_LIST_LOADING", true);
      try {
        const data = await axios.post(`?apikey=cd264dd9&s=${payload}`);
        commit("SET_MOVIES_LIST", data.data.Search);
      } catch (error) {
        console.log(error);
      } finally {
        await commit("SET_MOVIES_LIST_LOADING", false);
      }
    },
  },
  getters: {
    getMoviesList(state) {
      return state.data;
    },
    getMoviesListLoading(state) {
      return state.loading;
    },
  },
};
