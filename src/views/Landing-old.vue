<template>
  <!-- https://fr.wiktionary.org/wiki/%E6%81%8B -->
  <div class="container-2j8y">
    <div class="wing wing-left chinese-font">
      <v-btn class="shadow wing-left-btn wing-left-btn-0" depressed to="/microfreak">microfreak</v-btn>
      <v-btn class="shadow wing-left-btn" depressed to="/solodisco">solodisco</v-btn>
      <v-btn class="shadow wing-left-btn" depressed></v-btn>
    </div>
    <div class="badge inset-shadow">
      <span class="chinese-font badge-text text-shadow">恋</span>
    </div>
    <div class="wing wing-right chinese-font" zstyle="display: flex; align-content: space-between">
      <v-btn class="shadow wing-right-btn wing-right-btn-0" depressed to="/dancefloor">dancefloor</v-btn>
      <v-btn class="shadow wing-right-btn" depressed></v-btn>
      <v-btn class="shadow wing-right-btn" depressed></v-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-2j8y {
  height: 100vh;
  width: 100vw;
  background: #f5f5f5;
  user-select: none;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.badge {
  height: 80vh;
  width: 32vw;
  border-radius: 3vw;
  text-align: center;
  line-height: 80vh;
}
.badge-text {
  font-size: 30vw;
  color: #f3f3f3;
}

.wing {
  height: 70vh;
  width: 10vw;
  display: flex;
  flex-flow: row wrap;
  align-content: space-around;
}
.wing-left {
  border-top-right-radius: 1.6vw;
  border-bottom-right-radius: 1.6vw;
}
.wing-right {
  justify-content: flex-end;

  border-top-left-radius: 1.6vw;
  border-bottom-left-radius: 1.6vw;
}
.wing-left-btn {
  height: 10vh !important;
  width: 25vw;
  padding-left: 1.8vw !important;
  border-radius: inherit;
  justify-content: flex-start;

  font-size: 1.5vw;
  font-size: 1.8vh;
  text-transform: uppercase;
  color: #212121cc;

  transition: all 1.6s;
}
.wing-left-btn:hover {
  padding-left: 12vw !important;
  letter-spacing: 0.3em;
}
.wing-left-btn-0:hover {
  color: #fd8e4b;
}
.wing-right-btn {
  height: 10vh !important;
  width: 25vw;
  padding-left: 1.8vw !important;
  border-radius: inherit;
  justify-content: flex-end;

  font-size: 1.5vw;
  font-size: 1.8vh;
  text-transform: uppercase;
  color: #212121cc;

  transition: all 1.6s;
}
.wing-right-btn:hover {
  padding-right: 12vw !important;
  letter-spacing: 0.3em;
}
.wing-right-btn-0:hover {
  color: #F50057;
}

@font-face {
  font-family: "Noto Sans JP";
  src: url("/assets/fonts/NotoSansJP-Bold.otf");
}
.chinese-font {
  font-family: "Noto Sans JP";
}
.shadow {
  box-shadow: 0.3vw 0.3vw 0.6vw #e7e7e7, -0.3vw -0.3vw 0.6vw #ffffff !important;
}
.inset-shadow {
  box-shadow: inset 0.3vw 0.3vw 0.6vw #e4e4e4, inset -0.3vw -0.3vw 0.6vw #ffffff;
}
.text-shadow {
  text-shadow: 0.3vw 0.3vw 0.6vw #e7e7e7, -0.3vw -0.3vw 0.6vw #ffffff;
}
</style>