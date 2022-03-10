import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = {
  state: {
    count: 0,
  },
};


export default new Vuex.Store(store);
