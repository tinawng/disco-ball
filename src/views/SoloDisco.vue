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
    <v-row style="height: 20vw; margin: 0" v-for="family in families" :key="family.name">
      <div class="card card-family">
        <span class="card-family-name">{{family.name}}</span>
        <span class="card-family-desc">{{family.desc}}</span>
      </div>
      <div class="card" v-for="(product, index) in family.products" :key="index">
        <v-hover class="card-product" v-slot:default="{ hover }" close-delay="200">
          <div class="card-product" @click="dialog = true; selected_product = product">
            <div style="flex: 0 0 50%; padding: 3vw;">
              <p class="card-product-name">{{product.name}}</p>
              <p class="card-product-desc">{{product.desc}}</p>
            </div>
            <img
              :class="[{'card-product-img-hover': hover}, 'card-product-img']"
              :src="product.image"
            />
          </div>
        </v-hover>
      </div>
    </v-row>

    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <!-- CLOSE BUTTON -->
      <v-btn class="dialog-btn" dark fab @click="dialog = false">
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>
      <!-- SLIDER -->
      <v-window v-model="window_step" class="fixed-bar" style="height: 100%">
        <!-- NAVIGATION BUTTONS -->
        <v-btn dark fab @click="window_step--">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-btn dark fab @click="window_step++">
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
        <!-- SLIDES -->
        <v-window-item
          v-for="(slide, index) in selected_product.slides"
          :key="index"
          :value="index"
          style="height: 100%"
        >
          <!-- v-if slide.type == ... -->
          <OverviewSlide v-if="slide.type == 'overview'"></OverviewSlide>
          <ABPlayerSlide v-if="slide.type == 'abplayer'"></ABPlayerSlide>
        </v-window-item>
      </v-window>
    </v-dialog>
  </div>
</template>

<script>
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
    selected_product: {},
    dialog: false,
    window_step: 0
  }),

  created() {
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

  font-size: 16vh;
  line-height: 16vh;
  font-weight: 400;
  letter-spacing: -0.015625em;
}
.view-subtitle {
  padding-left: 1vmin;
  font-size: 4vh;
  line-height: 8vh;
  font-weight: 100;
}

.card {
  height: 100%;
  flex: 0 0 50%;
  border: thin solid rgba(0, 0, 0, 0.12);
  background: white;
  overflow: hidden;
}
.card-family {
  padding: 1.5vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}
.card-family-name {
  font-size: 16vh;
  line-height: 22vh;
  font-weight: 300;
  letter-spacing: -0.015625em;
  text-transform: capitalize;
}
.card-family-desc {
  font-size: 5.5vh;
  line-height: 5.5vh;
  font-weight: 100;
  text-transform: uppercase;
}
.card-product {
  height: 100%;
  width: 100%;

  display: flex;
}
.card-product-name {
  font-size: 1.8vw;
  line-height: 1.8vw;
}
.card-product-desc {
  font-size: 1.1vw;
  line-height: 2.5vw;
  font-weight: 100;
  text-transform: lowercase;
}
.card-product-img {
  margin-left: 4vw;

  height: 90%;

  transition-property: margin-left;
  transition-timing-function: cubic-bezier();
  transition-duration: 0.485s;
}
.card-product-img-hover {
  margin-left: -4vw;
}

.dialog-btn {
  position: fixed;
  top: 4vh;
  right: 4vh;
  z-index: 9;
}
</style>