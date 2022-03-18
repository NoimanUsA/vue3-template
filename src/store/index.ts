import { createStore } from "vuex";
import test from "./modules/test";

const store = {
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    test,
  },
};

export default createStore(store);
