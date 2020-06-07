<template>
  <div class="container-q4s5">
    <div class="top-container">
      <v-img class="img" contain :src="image_src"></v-img>
      <div class="text-container">
        <p class="text-1">{{title}}</p>
        <p class="text-2">{{subtitle}}</p>
      </div>
    </div>
    <div class="bottom-container">
      <paper-player
        height="4vw"
        width="90%"
        :eventid="'paper-player-fx-' + title + '-' + index"
        :src="player_srcs"
        :spectrogram="true"
        :title="title.toUpperCase()"
        color="#212121"
      ></paper-player>
    </div>
    <div class="footer">
      <span class="text-3">{{description}}</span>
    </div>
  </div>
</template>

<script>
import store from "@/stores/solodisco.js";
export default {
  props: {
    index: Number
  },
  data: () => ({
    image_src: "",
    player_srcs: [],
    title: "",
    subtitle: "",
    description: ""
  }),

  created() {
    this.image_src = store.state.selected_product.slides[this.index].image;
    this.player_srcs = store.state.selected_product.slides[this.index].audios;
    this.title = store.state.selected_product.slides[this.index].name;
    this.subtitle = store.state.selected_product.slides[this.index].desc;
    this.description =
      store.state.selected_product.name +
      " • " +
      store.state.selected_product.desc;
  }
};
</script>

<style scoped>
.container-q4s5 {
  height: 100%;
  background: white;
  padding-top: 6vw;
  padding-left: 6vw;
  padding-right: 6vw;
}

.top-container {
  height: 44vh;
  /* margin: 4vw; */

  display: flex;
  justify-content: space-between;
}
.img {
  width: 33vw;
  filter: grayscale(20%);
}
.text-container {
  margin-left: 4vw;
}
.text-1 {
  font-size: 7vw;
  line-height: 7vw;
  font-weight: 300;
  letter-spacing: -0.015625em;
  text-transform: capitalize;
}
.text-2 {
  font-size: 2.2vw;
  line-height: 2.2vw;
  font-weight: 100;
  text-transform: capitalize;
}

.bottom-container {
  height: 30vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 14vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.text-3 {
  font-size: 0.8rem;
  line-height: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.1666666667em;
  text-transform: uppercase;
}
</style>