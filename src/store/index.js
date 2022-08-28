import { createStore } from "vuex";
import { searchStore } from "@/store/modules/search";
import { movieStore } from "@/store/modules/movie";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    search: searchStore,
    movie: movieStore,
  },
});
