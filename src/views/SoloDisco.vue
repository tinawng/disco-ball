<template>
  <div style="color: #212121">
    <v-row class="watermark" style="height: 5vh">
      <img class="watermark-logo" :src="'./assets/images/arturia-logo.svg'" />
      <span class="watermark-text">arturia</span>
    </v-row>
    <v-row style="height: 10vw; margin: 2vw; align-items: center">
      <span class="view-title">Products</span>
      <span class="view-subtitle">Software Instruments</span>
    </v-row>
    <v-row style="height: auto; margin: 0" v-for="family in families" :key="family.name">
      <div class="card card-family">
        <span class="card-family-name">{{family.name}}</span>
        <span class="card-family-desc">{{family.desc}}</span>
      </div>
      <div class="card" v-for="(product, index) in family.products" :key="index">
        <v-hover class="card-product" v-slot:default="{ hover }" close-delay="200">
          <div
            class="card-product"
            @click="dialog = true; store.commit('selectedProduct', product);"
          >
            <div style="flex: 0 0 50%; padding: 3vw;">
              <p class="card-product-name">{{product.name}}</p>
              <p class="card-product-desc">{{product.desc}}</p>
            </div>
            <div
              :class="[{'card-product-img-hover': hover}, 'card-product-img']"
              :style="'background-image: url(' + product.image + ')'"
            ></div>
          </div>
        </v-hover>
      </div>
    </v-row>

    <v-dialog v-if="store.state.selected_product.slides" v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <!-- CLOSE BUTTON -->
      <v-btn class="dialog-btn-close" dark fab @click="dialog = false; window_step=0">
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>
      <!-- NAVIGATION BUTTONS -->
      <transition name="transition-nav-btn">
        <v-btn v-if="window_step != 0" class="dialog-btn-left" dark fab @click="window_step--">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </transition>
      <transition name="transition-nav-btn">
        <v-btn
          v-if="window_step != store.state.selected_product.slides.length-1"
          class="dialog-btn-right"
          dark
          fab
          @click="window_step++"
        >
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </transition>
      <!-- SLIDER -->
      <v-window v-model="window_step" class="fixed-bar" style="height: 100%">
        <!-- SLIDES -->
        <v-window-item
          v-for="(slide, index) in store.state.selected_product.slides"
          :key="slide.image"
          :value="index"
          style="height: 100%"
        >
          <!-- v-if slide.type == ... -->
          <OverviewSlide v-if="slide.type == 'overview'" :index="index"></OverviewSlide>
          <ABPlayerSlide v-if="slide.type == 'abplayer'" :index="index" :key="slide.image"></ABPlayerSlide>
        </v-window-item>
      </v-window>
    </v-dialog>
  </div>
</template>

<script>
import store from "@/stores/solodisco.js";
import { utils } from "disco-puzzle";
import OverviewSlide from "@/components/solodisco/OverviewSlide.vue";
import ABPlayerSlide from "@/components/solodisco/ABPlayerSlide.vue";
export default {
  components: {
    OverviewSlide,
    ABPlayerSlide
  },

  data: () => ({
    families: [],
    dialog: false,
    window_step: 0,
    store: undefined
  }),

  created() {
    this.store = store;
    this.families = utils.getJSONsync(
      "https://tinawng.github.io/assets/json/solodisco.json"
    );
  }
};
</script>

<style scoped>
.watermark {
  margin: 1vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.watermark-logo {
  height: 4vh;
}
.watermark-text {
  margin-left: 0.45vw;
  font-size: 3vh;
  font-weight: 900;
  line-height: 2rem;
  text-transform: uppercase;
}

.view-title {
  flex: 0 0 100%;

  font-size: 7.5vw;
  line-height: 7.5vw;
  font-weight: 400;
  letter-spacing: -0.015625em;
}
.view-subtitle {
  padding-left: 1vmin;
  font-size: 2vw;
  line-height: 3.5vw;
  font-weight: 100;
}

.card {
  height: 20vw;
  flex: 0 0 50%;
  border: thin solid rgba(0, 0, 0, 0.12);
  background: white;
}
.card-family {
  padding: 1.5vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}
.card-family-name {
  font-size: 7vw;
  line-height: 10vw;
  font-weight: 300;
  letter-spacing: -0.015625em;
  text-transform: capitalize;
}
.card-family-desc {
  font-size: 2.2vw;
  line-height: 2.2vw;
  font-weight: 100;
  text-transform: uppercase;
}
.card-product {
  height: 100%;
  width: 100%;

  display: flex;
}
.card-product-name {
  font-size: 2.2vw;
  line-height: 2.2vw;
}
.card-product-desc {
  font-size: 1.25vw;
  line-height: 1.8vw;
  font-weight: 100;
  text-transform: lowercase;
}
.card-product-img {
  margin-left: 5%;

  height: 90%;
  width: 60%;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: left center;

  transition-property: margin-left;
  transition-timing-function: cubic-bezier();
  transition-duration: 0.485s;
}
.card-product-img-hover {
  margin-left: -12%;
}

.dialog-btn-close {
  position: fixed;
  top: 4vh;
  right: 4vh;
  z-index: 9;
}
.dialog-btn-right {
  position: fixed;
  bottom: 4vh;
  right: 4vh;
  z-index: 9;
}
.dialog-btn-left {
  position: fixed;
  bottom: 4vh;
  left: 4vh;
  z-index: 9;
}

.transition-nav-btn-enter-active, .transition-nav-btn-leave-active {
  transition: transform .414s;
}
.transition-nav-btn-enter, .transition-nav-btn-leave-to{
  transform: scale(0,0);
}
</style>