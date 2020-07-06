<template>
  <!-- https://fr.wiktionary.org/wiki/%E6%81%8B -->
  <div class="container-2j8y">
    <div class="panel-left">
      <div class="badge-row">
        <img class="badge" :src="'./assets/images/landing/badge-left.png'" />
      </div>
      <v-hover v-slot:default="{ hover }">
        <div class="nav-row">
          <transition name="fade">
            <v-btn
              v-if="!hover"
              style="margin-right: 2vw"
              outlined
              depressed
              fab
              small
              color="#424242"
              @click="hover = !hover"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </transition>

          <div class="buttons-group">
            <v-btn
              :class="[hover ? 'button-hover' : '', 'button']"
              large
              outlined
              color="#424242"
              to="/dancefloor"
            >dancefloor</v-btn>
            <v-btn
              :class="[hover ? 'button-hover' : '', 'button']"
              large
              outlined
              color="#424242"
              to="/microfreak"
            >microfreak</v-btn>
            <v-btn
              :class="[hover ? 'button-hover' : '', 'button']"
              large
              outlined
              color="#424242"
              to="/solodisco"
            >solodisco</v-btn>
            <v-btn
              :class="[hover ? 'button-hover' : '', 'button']"
              large
              outlined
              color="#424242"
              to="/brute"
            >brute</v-btn>
          </div>
        </div>
      </v-hover>
    </div>
    <div
      class="panel-right"
      :style="' background-image: url(' +  [changeBG() ? './assets/images/landing/tumblr_nd3zlib9m91r4siero1_r2_1280.jpg' : './assets/images/landing/tumblr_nd3zlib9m91r4siero2_r3_1280.jpg'] + ')'"
    >
      <img class="badge" :src="'./assets/images/landing/badge-right.png'" />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    // window.onscroll = function(e) {
    //   window.scrollTo(0, 0);
    // };
  },

  methods: {
    changeBG() {
      var time = new Date();
      return time.getHours() % 2 == 0;
    }
  }
};
</script>

<style scoped>
.container-2j8y {
  height: 100vh;
  width: 100vw;

  display: flex;
}

.panel-left {
  width: 25vw;
  background-color: #fff;
  z-index: 1;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.panel-right {
  flex: 1 1 67vw;
  display: flex;
  justify-content: flex;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.badge-row {
  height: 35vh;

  flex: 0 1 100%;
  display: flex;
  justify-content: flex-end;
}
.badge {
  margin-top: 1.5vh;
  height: 33vh;
  opacity: 0.86;
  z-index: 1;
}

.nav-row {
  height: 65vh;
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.buttons-group {
  display: flex;
  flex-direction: column;
}
.button {
  margin: 1vmin;
  padding: 0px !important;
  width: 0px;
  min-width: 0px !important;
  overflow: hidden;

  transition: all 1.61s;
}
.button-hover {
  width: 200px;
}

.fade-leave-active {
  transition: opacity 0.305s;
}
.fade-enter-active {
  transition: opacity 1.61s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
