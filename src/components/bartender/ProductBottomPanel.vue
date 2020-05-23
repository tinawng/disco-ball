<template>
  <div>
    <div style="display: flex">
      <div style="display: flex; flex-wrap: wrap; align-items: center">
        <span class="text-big" style="margin-bottom: 0.7vw; flex: 0 0 100%">lastest release</span>
        <v-hover v-slot:default="{ hover }">
          <div
            style="position: relative"
            @click="selectAlbum(filterByProduct[0])"
          >
            <img class="cover-big" :src="filterByProduct[0].cover" />
            <transition name="quick-fade" mode="out-in">
              <v-icon
                v-if="hover"
                style="position: absolute; left: 0; height: 7vw; width: 7vw; font-size: 4vw; pointer-events: none;"
                color="#fffb"
              >mdi-play-circle-outline</v-icon>
            </transition>
          </div>
        </v-hover>
        <div class="cover-big-desc">
          <span class="text-medium">{{filterByProduct[0].name}}</span>
          <span class="text-small">{{filterByProduct[0].price}}</span>
        </div>
      </div>
      <div style="display: flex; flex-wrap: wrap; align-items: center">
         <span class="text-big" style="margin-bottom: 0.7vw; flex: 0 0 100%">best seller</span>
        <v-hover v-slot:default="{ hover }">
          <div style="position: relative"
            @click="selectAlbum(filterByProduct[1])">
            <img class="cover-big" :src="filterByProduct[1].cover" />
            <transition name="quick-fade" mode="out-in">
              <v-icon
                v-if="hover"
                style="position: absolute; left: 0; height: 7vw; width: 7vw; font-size: 4vw; pointer-events: none;"
                color="#fffb"
              >mdi-play-circle-outline</v-icon>
            </transition>
          </div>
        </v-hover>
        <div class="cover-big-desc">
          <span class="text-medium">{{filterByProduct[1].name}}</span>
          <span class="text-small">{{filterByProduct[1].price}}</span>
        </div>
      </div>
    </div>
    <div style="height: 3vw"></div>
    <span class="text-big" style="margin-bottom: 0.7vw; flex: 0 0 100%">Popular</span>
    <div style="height: 1vw"></div>
    <div v-for="(album, index) in filterByProduct" :key="index">
      <div class="album-list-row" @click="selectAlbum(album)">
        <img class="cover-small" :src="album.cover" />
        <span class="album-list-row-text" style="color: #fff8">{{index+1}}</span>
        <v-icon class="album-list-row-text" color="#fffd">mdi-play-outline</v-icon>
        <span class="album-list-row-text text-medium" style="flex: 0 0 50%">{{album.name}}</span>
        <span
          class="album-list-row-text text-small"
          style="padding-left: 1vmin; padding-right: 1vmin; border: thin solid; border-radius: 4px"
        >12 of {{album.presets}} presets</span>
        <v-icon class="album-list-row-text ml-auto" small color="#fffd">mdi-cart</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/stores/bartender.js";
export default {
  computed: {
    albums() {
      return store.state.albums;
    },
    selectedProduct() {
      return store.state.selected_product;
    },
    filterByProduct: function() {
      return this.albums.filter(album =>
        album.products.find(product => product === this.selectedProduct)
      );
    }
  },

  methods: {
    selectAlbum(album) {
      store.commit("selectAlbum", album);
      store.commit("changePanelView", 'album');
    }
  }
};
</script>

<style scoped>
.text-big {
  line-height: 1.3vw;
  font-size: 1.3vw;
  font-weight: 500;
  text-transform: capitalize;
}
.text-medium {
  line-height: 1.4vw;
  font-size: 1.2vw;
  font-weight: 300;
  text-transform: capitalize;
}
.text-small {
  line-height: 1rem;
  font-size: 0.625rem;
  font-weight: 400;
  letter-spacing: 0.1666666667em;
  color: #fff6;
  text-transform: uppercase;
}

.cover-big {
  width: 7vw;

  box-shadow: 0px 18px 15px -7px rgba(0, 0, 0, 0.3),
    0px 24px 38px 3px rgba(0, 0, 0, 0.48), 0px 9px 46px 8px rgba(0, 0, 0, 0.24);
  transition: filter 0.305s;
}
.cover-big:hover {
  filter: blur(4px);
}
.cover-big-desc {
  margin-left: 1.5vw;
  display: flex;
  flex-direction: column;
}
.cover-big-text {
  line-height: 1.4vw;
  font-size: 1.2vw;
  font-weight: 300;
  text-transform: capitalize;
}
.cover-big-subtext {
  line-height: 1.4vw;
  font-size: 0.8vw;
  font-weight: 400;
  letter-spacing: 0.16em;
  color: #fff6;
  text-transform: uppercase;
}
.cover-small {
  width: 3vw;
}

.album-list-row {
  margin-bottom: 1vmin;

  display: flex;
  align-items: center;

  transition: background 0.305s;
}
.album-list-row:hover {
  border-radius: 6px;
  background: #fff1;
}
.album-list-row-text {
  margin-left: 2vw;
}

.quick-fade-enter-active,
.quick-fade-leave-active {
  transition: opacity 0.305s;
}
.quick-fade-enter,
.quick-fade-leave-to {
  opacity: 0;
}
</style>