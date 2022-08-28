import { createStore } from "vuex";
import { searchStore } from "@/store/modules/search";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    search: searchStore,
  },
});
