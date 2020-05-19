<template>
  <v-row no-gutters>

    <v-col cols="6">
      <v-card outlined tile height="271" class="fixed-bar" style="position: relative">
        <v-card-text class="text-right" style="transform: translateY(40%);">
          <p class="display-4 black--text">{{familyName}}</p>
          <p class="mt-1 ml-1 display-1 font-weight-thin black--text">{{familyDescription}}</p>
        </v-card-text>
      </v-card>
    </v-col>
    
    <v-col cols="6"
      v-for="n in productsList.length"
      :key="n">
      <Thumbnail :path="path + productsList[n-1] + '/'"/>
    </v-col>

  </v-row>
</template>

<script>
import { getFoldersList, findFileByExtension, getFileLineAt } from "../../libs/utils.js";
import Thumbnail from "./Thumbnail.vue";

export default {
  components: {
    Thumbnail
  },

  props: {
    path: String
  },

  data: () => ({
    familyName: "",
    familyDescription: "",
    productsList: []
  }),

  created() {
    this.familyName = getFileLineAt(this.path + findFileByExtension(this.path, ".txt"), 0);
    this.familyDescription = getFileLineAt(this.path + findFileByExtension(this.path, ".txt"), 1);
    this.productsList = getFoldersList(this.path);
  }
}
</script>

<style scoped>
</style>