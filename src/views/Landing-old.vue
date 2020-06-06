<template>
  <!-- https://fr.wiktionary.org/wiki/%E6%81%8B -->
  <div class="container-2j8y">
    <div class="badge inset-shadow">
      <span class="chinese-font badge-text text-shadow">恋</span>
    </div>
    <div class="buttons-group">
      <v-btn x-large outlined color="#fd8e4b64" to="/microfreak">microfreak</v-btn>
      <v-btn x-large outlined color="#F5005742" to="/dancefloor">dancefloor</v-btn>
      <v-btn x-large outlined color="#21212164" to="/solodisco">solodisco</v-btn>
      <v-btn x-large outlined color="#64AAB464" to="/bartender">bartender</v-btn>
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
  padding: 5vw;
  background: #f5f5f5;
  user-select: none;

  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
}

.badge {
  height: 32vw;
  width: 50vw;
  border-radius: 3vw;
  text-align: center;
  line-height: 30vw;
}
.badge-text {
  font-size: 25vw;
  color: #f3f3f3;
}

.buttons-group {
  width: 80%;
  display: flex;
  justify-content: space-evenly;
}

.theme--light.v-btn:hover::before {
  opacity: 0.8 !important;
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