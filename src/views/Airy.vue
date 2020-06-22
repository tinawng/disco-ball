<template>
  <div class="container-0y2i">
    <div class="nav">
      <div style="flex-grow: 5; display: flex; align-items: center;">
        <img class="nav-logo" :src="'./assets/images/arturia-logo.svg'" />
        <span class="nav-title">ARTURIA</span>
      </div>
      <div
        style="flex-grow: 1; display: flex; flex-direction: row-reverse; justify-content: space-around; align-items: center"
      >
        <span class="nav-title">MATRIX BRUTE</span>
        <span class="nav-subtitle">mini brute 2</span>
        <span class="nav-subtitle">micro brute</span>
        <span class="nav-subtitle">drum brute</span>
        <span class="nav-subtitle">drum brute impact</span>
      </div>
    </div>
    <div class="view">
      <div style="height: 100vh; line-height: 100vh">
        <span class="view-title">brute</span>
      </div>
      <v-parallax
        :src="'./assets/images/airy/matrix.jpg'"
        style="height: 26vw; width: 100vw; scroll-snap-align: start"
      ></v-parallax>
      <div class="product-container">
        <div ref="animated-row-0" class="product-row" style="scroll-snap-align: unset;">
          <div style="display: flex; flex-direction: column; align-items: center">
            <span class="product-title" style="margin-top: 4vw">The Matrix</span>
            <span class="product-subtitle" style="margin-top: 2vw">ANALOG AVANT-GARDE</span>
            <span
              class="product-desc"
              style="margin-top: .5vw;"
            >MatrixBrute is arguably the most powerful analog monophonic synthesizer ever ! As flexible as a modular system but offering presets, MatrixBrute is a dream machine for everyone interested in creating a sound palette of their own.</span>
          </div>
        </div>
        <div class="spacer"></div>

        <v-img :src="'./assets/images/airy/matrix-0.png'" contain></v-img>
        <div ref="animated-row-1" class="product-row" style="display: flex; flex-direction: column">
          <span class="product-title" style="text-align: right">Power beyond the matrix</span>
          <div class="mt-8" style="display: flex">
            <div class="product-desc" style="display: flex; flex-direction: column">
              The heart of the MatrixBrute is its unique modulation matrix that allows you to create your own routings. You can invent a sound palette of your own that will be sure to be heard in any mix !
              <v-icon style="padding-top: 20px; font-size: 80px">mdi-heart-half-full</v-icon>
            </div>
            <div class="product-desc" style="display: flex; flex-direction: column">
              The matrix can also be used to recall your presets. So go on stage, and select any of the 256 presets instantly! No menus or awkward selection screens, everything is at your fingertips.
              <v-icon style="padding-top: 20px; font-size: 80px">mdi-matrix</v-icon>
              <span class="product-baseline" style="padding-top: 8px">256 presets</span>
            </div>
            <div class="product-desc" style="display: flex; flex-direction: column">
              As if it was not enough, the matrix is also made to program and play sequences. This is no ordinary step-sequencer. With its ability to also be used as a modulation source, sounds evolve in melody and texture, just the way you want.
              <v-icon style="padding-top: 20px; font-size: 80px">mdi-stairs-box</v-icon>
            </div>
          </div>
        </div>

        <div class="spacer"></div>

        <v-img :src="'./assets/images/airy/matrix-1.png'" contain></v-img>
        <div ref="animated-row-2" class="product-row" style="display: flex; flex-direction: column">
          <span class="product-title" style="text-align: left">Sound beyond the power</span>
          <div style="display: flex; flex-direction: column">
            <div class="product-desc" style="margin-top: 30px; display: flex; align-items: center">
              <span
                style="width: 70%; text-align: left"
              >MatrixBrute is a truly empowering instrument!! It offers tons of connections so you can work in any set-up. It brings a quality keybed and a solid chassis.</span>
              <v-icon style="flex-grow: 1; font-size: 70px">mdi-piano</v-icon>
            </div>
            <div class="product-desc" style="margin-top: 30px; display: flex; align-items: center">
              <v-icon style="flex-grow: 1; font-size: 70px">mdi-surround-sound</v-icon>
              <span
                style="width: 70%; text-align: right"
              >No endless menus or screens to navigate or multi-function buttons to remember. Forget about connectivity issues. This is you in control. This is you inventing sounds. This is analog avant- garde.</span>
            </div>
            <div class="product-desc" style="margin-top: 30px; display: flex; align-items: center">
              <span
                style="width: 70%; text-align: left"
              >Offering a audiosignal path that is is 100% analog. The MatrixBrute gives you the sonic quality and power of a vast modular synthesizer but with the flexibility of presets.</span>
              <div style="flex-grow: 1; display: flex; flex-direction: column">
                <v-icon style="font-size: 70px">mdi-sine-wave</v-icon>
                <span class="product-baseline" style="padding-top: 8px">100% Analog</span>
              </div>
            </div>
          </div>
        </div>

        <div class="spacer"></div>

        <v-img :src="'./assets/images/airy/matrix-4.png'" contain></v-img>
        <div ref="animated-row-3" class="product-row" style="display: flex; flex-direction: column">
          <div style="display: flex; flex-direction: column">
            <div class="product-desc" style="margin-top: 30px; display: flex">
              <div style="flex: 0 0 50%; text-align: left">
                <p>
                  STEINER-PARKER
                  The Steiner-Parker multimode filter that we are known for in our MiniBrute and MicroBrute, has been brought back but this time we added our own flair to it. We added a DRIVE control to thicken up the filter sound. On top of this we changed it so that the slope can be 12db per octave, like the original, or 24db per octave for fatter sounds.
                </p>
                <p>
                  DR. BOB’S LADDER
                  The most famous filter used in synths is probably Dr. Robert Moog’s transistor ladder filter. We have brought you our version of this classic sounding filter with a new DRIVE control, 12 and 24db per octave slopes and LOW PASS, HIGH PASS and BAND PASS modes.
                </p>
              </div>

              <div
                style="flex: 0 0 50%; display: flex; flex-direction: row; align-items: center flex; flex-wrap: wrap"
              >
                <div style="flex: 0 0 50%; display: flex; flex-wrap: wrap; justify-content: center">
                  <img :src="'./assets/images/airy/matrix-6.png'" height="64px"/>
                  <span style="margin-top: 10px; font-size: 14px">Multiples routing paths</span>
                </div>
                <div style="flex: 0 0 50%;display: flex; flex-wrap: wrap; justify-content: center">
                  <img :src="'./assets/images/airy/matrix-5.png'" height="64px"/>
                  <span style="margin-top: 10px; font-size: 14px">Master cutoff controll</span>
                </div>
                <div style="flex: 0 0 50%; margin-top: 20px; display: flex; flex-wrap: wrap; justify-content: center">
                <v-icon style="margin-left: 20px; margin-right: 20px; font-size: 60px">mdi-air-filter</v-icon>
                  <span style="margin-top: 10px; font-size: 14px">Bob's unique ladder filter </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="spacer"></div>

        <div
          ref="animated-row-4"
          class="product-row"
          style="position: relative; display: flex; flex-direction: column"
        >
          <span class="product-title" style="text-align: left">Sound Corner</span>
          <paper-player
            height="50px"
            eventid="paper-player-fx"
            src="./assets/audios/dancefloor/blame-it-on-the-boogie.mp3"
            title="Kinda Disco"
            color="#424242"
            style="z-index: 9"
          ></paper-player>
          <live-spectrogram class="sp" color="#42424242" height="300px" width="980px"></live-spectrogram>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const intersectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("product-row-animation");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "-25%" }
    );
    Object.keys(this.$refs)
      .filter(ref => ref.includes("animated-row"))
      .forEach(ref => intersectionObserver.observe(this.$refs[ref]));
  }
};
</script>

<style scoped>
.container-0y2i {
}

.sp {
  position: absolute;
  top: 50%;
  z-index: 1;
}

.nav {
  height: 52px;
  width: 100vw;

  padding-left: 15px;
  padding-right: 15px;

  position: fixed;
  top: 0;
  z-index: 99;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: white;
}
.nav-logo {
  height: 24px;
  margin-right: 5px;
}
.nav-title {
  font-family: "ZonaPro Regular";
  font-size: 17px;

  text-align: center;
}
.nav-subtitle {
  font-family: "ZonaPro Regular";
  font-size: 11px;

  text-align: center;
}

.view {
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
}
.view-title {
  font-family: "ZonaPro ExtraLight";

  font-size: 8vw;
  letter-spacing: 4vw;
  text-transform: uppercase;

  animation-duration: 4s;
  animation-name: letter-spacing;
}

.spacer {
  height: 300px;
}

.product-container {
  padding-bottom: 30vw;
  width: 980px;
}
.product-row {
  margin-left: auto;
  margin-right: auto;

  opacity: 0;
}
.product-row-animation {
  opacity: 1;

  animation-duration: 2s;
  animation-name: sliding-up;
}
.product-title {
  font-family: "ZonaPro ExtraLight";

  font-size: 80px;
  line-height: 1.05;
}
.product-subtitle {
  font-family: "ZonaPro Light";
  font-size: 24px;
  line-height: 1.05;

  text-align: center;
}
.product-desc {
  font-family: "ZonaPro Light";
  font-size: 17px;
  line-height: 1;

  text-align: center;
}
.product-baseline {
  font-family: "ZonaPro Regular";
  letter-spacing: 5px;
  font-size: 15px;
  text-transform: uppercase;
}

@keyframes sliding-up {
  from {
    padding-top: 6vw;
    opacity: 0;
  }
  to {
    padding-top: 0vw;
    opacity: 1;
  }
}
@keyframes letter-spacing {
  from {
    letter-spacing: 1vw;
  }
  to {
    letter-spacing: 4vw;
  }
}
@font-face {
  font-family: "ZonaPro ExtraLight";
  src: url("/assets/fonts/ZonaPro-ExtraLight.otf");
}
@font-face {
  font-family: "ZonaPro Light";
  src: url("/assets/fonts/ZonaPro-Light.ttf");
}
@font-face {
  font-family: "ZonaPro Regular";
  src: url("/assets/fonts/ZonaPro-Regular.ttf");
}
</style>