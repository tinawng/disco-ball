import Vue from 'vue';
import Vuex from 'vuex';

const store = new Vuex.Store({
  state: {
    albums: [],
    panel_view: "product",
    selected_product: "mini-v",
    selected_album: {}
  },
  mutations: {
    addAlbum(state, val) {
      state.albums.push(val);
    },
    changePanelView(state, val) {
      state.panel_view = val;
    },
    selectProduct(state, val) {
      // Vue.set(state, 'selected_product', val);
      state.selected_product = val;
    },
    selectAlbum(state, val) {
      state.selected_album = val
    }
  },
  actions: {
  },
  getters: {
    getFilteredAlbum: (state) => {
      return state.albums.filter(album =>
        album.products.find(product => product === state.selected_product));
    }
  }
});

export default store;