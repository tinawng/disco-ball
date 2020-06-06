import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    selected_product: {},
  },
  mutations: {
    selectedProduct(state, val) {
      state.selected_product = val;
    }
  },
  actions: {
  },
  getters: {
  }
});

export default store;