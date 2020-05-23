<template>
  <div
    class="container-1z3e"
    :style="'background-image: url(\'https://medias.arturia.net/images/products/'+ selectedProduct +'/large-'+selectedProduct+'-banner.jpg\')'"
  >
    <span class="album-title">{{selectedAlbum.name}}</span>
    <img class="album-cover" :src="selectedAlbum.cover" />
  </div>
</template>

<script>
import store from "@/stores/bartender.js";
export default {
  computed: {
    selectedProduct() {
      return store.state.selected_product;
    },
    selectedAlbum() {
      return store.state.selected_album;
    }
  }
};
</script>

<style scoped>
.container-1z3e {
  display: flex;
  justify-content: space-between;

  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
}
.album-title {
  line-height: 6vw;
  font-size: 6vw;
  font-weight: 700;
  color: white;
  text-transform: capitalize;
}
.album-cover {
  /* width: 15.5vw; */
  height: 100%;
}
</style>