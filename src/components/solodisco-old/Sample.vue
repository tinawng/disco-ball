<template>
  <v-card style="height: 100%; position: relative">
    <v-row style="padding-top: 5.5vw; padding-left: 5vw">
      <v-col cols="4">
        <v-img :src="'file://' + sampleImage" contain style="filter: grayscale(20%)"></v-img>
      </v-col>
      <v-col class="my-auto pl-8 pr-12" style="max-height: 340px; overflow: scroll; ">
        <p class="display-4 black--text text-capitalize">{{sampleName}}</p>
        <p class="mt-1 ml-1 display-1 font-weight-thin black--text">{{sampleDescription}}</p>
      </v-col>
    </v-row>

    <div style="position: absolute; bottom: 0px; width: 100%">
      <v-row style="padding-bottom: 10vw">
        <v-col style="padding-right: 12vw; padding-left: 12vw">
          <PaperPlayer
            class="elevation-8"
            :src="[sampleMp3Dry, sampleMp3Wet]"
            :display_title="sampleName.toUpperCase() + ' DEMO'"
            color="#212121"
            :eventid="sampleName"
          />
        </v-col>
      </v-row>
      <v-row style="position: absolute; bottom: 0px; width: 100%">
        <v-col cols="12" class="mx-auto text-center">
          <p class="mb-3 overline black--text">{{footer}}</p>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
import PaperPlayer from "../PaperPlayer.vue";
import {
  pathRewind,
  getFileLines,
  getFileLineAt,
  findFileByExtension,
  findFilesByExtension,
  extractCleanText
} from "../../libs/utils.js";

export default {
  components: {
    PaperPlayer
  },
  props: {
    path: String
  },

  data: () => ({
    sampleName: "",
    sampleDescription: "",
    sampleImage: "",
    sampleMp3Dry: "",
    sampleMp3Wet: "",
    footer: ""
  }),

  created() {
    // get name from mp3 file
    this.sampleName = findFileByExtension(this.path, ".mp3");
    // remove file extension
    this.sampleName = this.sampleName.split(".")[0];
    // extract clean text
    this.sampleName = extractCleanText(this.sampleName);
    // remove ".dry" or ".wet"
    this.sampleName = this.sampleName.replace(".dry", "");
    this.sampleName = this.sampleName.replace(".wet", "");

    this.sampleDescription = getFileLines(
      this.path + findFileByExtension(this.path, ".txt")
    );

    this.sampleImage = this.path + findFileByExtension(this.path, ".jpg");

    let mp3files = findFilesByExtension(this.path, ".mp3");
    for (let i in mp3files) {
      if (mp3files[i].toLowerCase().includes(".dry"))
        this.sampleMp3Dry = "file://" + this.path + mp3files[i];
      if (mp3files[i].toLowerCase().includes(".wet"))
        this.sampleMp3Wet = "file://" + this.path + mp3files[i];
    }

    let productPath = pathRewind(this.path);
    let productTitle = getFileLineAt(
      productPath + findFileByExtension(productPath, ".txt"),
      0
    );
    let productSubTitle = getFileLineAt(
      productPath + findFileByExtension(productPath, ".txt"),
      1
    );
    this.footer = productTitle + " - " + productSubTitle;
  }
};
</script>

<style scoped>
</style>