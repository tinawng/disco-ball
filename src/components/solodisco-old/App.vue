<template>
  <v-app>
    <v-row class="fixed-bar">
      <v-col cols="12" class="pl-12" style="margin-top: 4vw; margin-bottom: 5vw">
        <p class="display-4 font-weight-regular">Products</p>
        <p class="headline font-weight-thin ml-1">Software Instruments</p>
      </v-col>
    </v-row>

    {{debug}}
    <div v-if="familyList">
      <FamilyGroup v-for="n in familyList.length" :key="n" :path="ressourcesPath + familyList[n-1] + '/'" :folder-name="familyList[n-1]" />
    </div>
    <div v-else>{{ chooseFolder() }}</div>
  </v-app>
</template>

<script>
let { dialog } = require("electron").remote;
import { getFoldersList } from "./libs/utils.js";
import FamilyGroup from "./components/cards/FamilyGroup.vue";

export default {
  name: "App",

  components: {
    FamilyGroup
  },

  data: () => ({
    debug: "",
    ressourcesPath: undefined,
    familyList: undefined
  }),

  created() {},

  methods: {
    chooseFolder() {
      let self = this;
      var dir = dialog.showOpenDialog(
        {
          properties: ["openDirectory"]
        },
        function(res) {
          self.ressourcesPath = res[0] + '/';
          self.familyList = getFoldersList(self.ressourcesPath);
        }
      );
    }
  }
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
.fixed-bar {
  -webkit-user-select: none;
  -webkit-app-region: drag;
}

button:focus {
  outline: 0 !important;
  outline-color: initial !important;
  outline-style: initial !important;
  outline-width: 0px !important;
  -webkit-appearance: none !important;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
}
</style>
