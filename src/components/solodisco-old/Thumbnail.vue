<template>
  <div>
    <v-card outlined tile @click="dialog = !dialog">
      <v-hover v-slot:default="{ hover }" close-delay="200">
        <v-row class="justify-space-between">
          <v-col cols="5" class="mr-auto px-8 py-6">
            <v-card-title class="headline font-weight-m" style>{{ productName }}</v-card-title>
            <v-card-subtitle class="mt-1 ml-1 font-weight-light">{{ productDescription }}</v-card-subtitle>
          </v-col>
          <v-col cols="6" :class="hover ? 'img-hover-in' : 'img-hover-out'">
            <img class="mb-2" height="230" :src="'file://' + path + productSVG" />
          </v-col>
        </v-row>
      </v-hover>
    </v-card>

    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
      <v-btn
        class="mt-12 mr-8"
        color="tertiary"
        dark
        absolute
        top
        right
        fab
        @click="dialog = false"
      >
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>
      <Window :path="path" />
    </v-dialog>
  </div>
</template>

<script>
import Window from "../dialogs/Window.vue";
import { findFileByExtension, getFileLineAt } from "../../libs/utils.js";

export default {
  components: {
    Window
  },

  props: {
    path: String
  },

  data: () => ({
    productName: "",
    productDescription: "",
    productSVG: "",
    dialog: false
  }),

  created() {
    this.productName = getFileLineAt(
      this.path + findFileByExtension(this.path, ".txt"),
      0
    );
    this.productDescription = getFileLineAt(
      this.path + findFileByExtension(this.path, ".txt"),
      1
    );
    this.productSVG = findFileByExtension(this.path, ".svg");
  }
};
</script>

<style scoped>
.img-hover-in {
  transition-property: margin-right;
  transition-timing-function: cubic-bezier();
  transition-duration: 0.485s;
  margin-right: 4vw;
}
.img-hover-out {
  transition-property: margin-right;
  transition-timing-function: cubic-bezier();
  transition-duration: 0.485s;
  margin-right: 0vw;
}
</style>