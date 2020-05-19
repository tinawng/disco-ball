<template>
  <v-window v-model="step" class="fixed-bar" style="height: 100%">
    <v-btn
      class="ml-8"
      color="tertiary"
      dark
      absolute
      style="bottom: 16px;"
      left
      fab
      v-show="step != 0"
      @click="step--"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-btn
      class="mr-8"
      color="tertiary"
      dark
      absolute
      style="bottom: 16px;"
      right
      fab
      v-show="step != productSamples.length"
      @click="step++"
    >
      <v-icon>mdi-arrow-right</v-icon>
    </v-btn>

    <v-window-item :value="0" style="height: 100%">
      <Showcase :path="path" />
    </v-window-item>
    <v-window-item v-for="n in productSamples.length" :key="n" :value="n" style="height: 100%">
      <Sample :path="productSamples[n-1]" />
    </v-window-item>
  </v-window>
</template>

<script>
import Showcase from "../cards/Showcase.vue";
import Sample from "../cards/Sample.vue";
import {
  getFoldersList,
  findFileByExtension,
  getFileLineAt
} from "../../libs/utils.js";

export default {
  components: {
    Showcase,
    Sample
  },

  props: {
    path: String
  },

  data: () => ({
    productSamples: [],
    step: 0
  }),

  created() {
    let foldersList = getFoldersList(this.path);
    for (let i in foldersList) {
      this.productSamples.push(this.path + foldersList[i] + "/");
    }
  }
};
</script>

<style>
</style>