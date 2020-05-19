<template>
  <v-card style="height: 100%">
    <v-img :src="'file://' + productImg" height="25vw" contain style="filter: grayscale(20%)"></v-img>
    <v-card-text class="mt-8 ml-12">
      <p class="display-4 black--text">{{productTitle}}</p>
      <p class="mt-n4 display-1 font-weight-thin black--text" style="margin-left: 3.25vw">{{productSubTitle}}</p>
      <p class="mt-n1 overline black--text" style="margin-left: 6vw">{{productDescription}}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import { findFileByExtension, getFileLineAt } from "../../libs/utils.js";

export default {
  props: {
    path: String
  },

  data: () => ({
    productImg: "",
    productTitle: "",
    productSubTitle: "",
    productDescription: ""
  }),

  created() {
    this.productImg = this.path + findFileByExtension(this.path, ".png");
    this.productTitle = getFileLineAt(
      this.path + findFileByExtension(this.path, ".txt"),
      0
    );
    this.productSubTitle = getFileLineAt(
      this.path + findFileByExtension(this.path, ".txt"),
      1
    );
    this.productDescription = getFileLineAt(
      this.path + findFileByExtension(this.path, ".txt"),
      2
    );
    
  }
};
</script>

<style scoped>
</style>