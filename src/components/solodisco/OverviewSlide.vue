<template>
  <div class="container-b8g1">
    <v-img class="img" contain :src="image_src"></v-img>
    <div class="text-container">
      <p class="text-1">{{ title }}</p>
      <p class="text-2">{{ subtitle }}</p>
      <p class="text-3">{{ description }}</p>
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
    title: "",
    subtitle: "",
    description: ""
  }),

  created() {
    this.image_src = store.state.selected_product.slides[this.index].image;
    this.title = store.state.selected_product.name;
    this.subtitle = store.state.selected_product.desc;
    this.description = store.state.selected_product.slides[this.index].text;
  }
};
</script>

<style scoped>
.container-b8g1 {
  height: 100%;
  background: white;
}

.text-container {
  height: 40vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
.img {
  height: 60vh;
  filter: grayscale(20%);
}
.text-1 {
  margin-left: 4vw;

  font-size: 7vw;
  line-height: 7vw;
  font-weight: 300;
  letter-spacing: -0.015625em;
  text-transform: capitalize;
}
.text-2 {
  margin-left: 8vw;

  font-size: 2.2vw;
  line-height: 2.2vw;
  font-weight: 100;
  text-transform: capitalize;
}
.text-3 {
  margin-left: 12vw;

  font-size: .8vw;
  line-height: .8vw; 
  font-weight: 400;
  letter-spacing: 0.1666666667em;
  text-transform: uppercase;
}
</style>