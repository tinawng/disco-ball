<template>
  <div class="container-0y2i">
    <div class="nav">Nav</div>
    <div class="view">
      <div style="height: 100vh; line-height: 100vh">
        <span class="view-title">brute</span>
      </div>
      <div class="product-container">
        <v-parallax :src="'./assets/images/airy/matrix.jpg'" style="height: 22vw; width: 77vw; scroll-snap-align: start"></v-parallax>
        <div ref="animated-row-0" class="product-row" style="margin-bottom: -28vw; scroll-snap-align: unset;">
          <div style="display: flex; flex-direction: column; align-items: center">
            <span class="product-title" style="margin-top: 4vw">The Matrix</span>
            <span class="product-subtitle" style="margin-top: 2vw">ANALOG AVANT-GARDE</span>
            <span
              class="product-desc"
              style="margin-top: .5vw"
            >MatrixBrute is arguably the most powerful analog monophonic synthesizer ever ! As flexible as a modular system but offering presets, MatrixBrute is a dream machine for everyone interested in creating a sound palette of their own.</span>
          </div>
        </div>
        <div class="spacer"></div>

        <div ref="animated-row-1" class="product-row" style="display: flex; flex-direction: column">
          <div
            style="height: 100%; background-size: contain;background-position: 20vw; background-image: url('/assets/images/airy/matrix-0.png')"
          >
            <div style="width: 42vw; padding-left: 4vw">
              <span class="product-title">Power beyond the matrix</span>
            </div>
          </div>
          <div style="padding-left: 8vw; padding-right: 8vw; text-align: center;">
            <p
              class="product-subtitle"
            >The heart of the MatrixBrute is its unique modulation matrix that allows you to create your own routings. You can invent a sound palette of your own that will be sure to be heard in any mix !</p>
            <p
              class="product-subtitle"
            >The matrix can also be used to recall your presets. So go on stage, and select any of the 256 presets instantly! No menus or awkward selection screens, everything is at your fingertips.</p>
            <p
              class="product-subtitle"
            >As if it was not enough, the matrix is also made to program and play sequences. This is no ordinary step-sequencer. With its ability to also be used as a modulation source, sounds evolve in melody and texture, just the way you want.</p>
          </div>
        </div>

        <div class="spacer"></div>

        <div ref="animated-row-2" class="product-row" style="display: flex; flex-direction: column">
          <div
            style="height: 100%; background-size: contain;background-position: -36vw; background-image: url('/assets/images/airy/matrix-1.png')"
          >
            <div style="width: 42vw; margin-left: auto; padding-right: 4vw; text-align: right">
              <p class="product-title">Sound beyond the power</p>
              <p
                class="product-subtitle"
                style="margin-top: 15vw; margin-left: 5vw"
              >The heart of the MatrixBrute is its unique modulation matrix that allows you to create your own routings. You can invent a sound palette of your own that will be sure to be heard in any mix !</p>
            </div>
          </div>
          <div style="padding-left: 8vw; padding-right: 8vw; text-align: center;">
            <p
              class="product-subtitle"
            >The matrix can also be used to recall your presets. So go on stage, and select any of the 256 presets instantly! No menus or awkward selection screens, everything is at your fingertips.</p>
            <p
              class="product-subtitle"
            >As if it was not enough, the matrix is also made to program and play sequences. This is no ordinary step-sequencer. With its ability to also be used as a modulation source, sounds evolve in melody and texture, just the way you want.</p>
          </div>
        </div>

        <div class="spacer"></div>

        <span class="product-title">Sound Corner</span>
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
      { rootMargin: "-30%" }
    );
    Object.keys(this.$refs)
      .filter(ref => ref.includes("animated-row"))
      .forEach(ref => intersectionObserver.observe(this.$refs[ref]));
  }
};
</script>

<style scoped>
.container-0y2i {
  font-family: "ZonaPro ExtraLight";
  /* height: 500vh; */
}

.nav {
  position: fixed;
  right: 0;
  width: 23vw;
  height: 100vh;
  z-index: 9;

  background: #171717;
}

.spacer {
  height: 12vw;
}

.view {
  width: 77vw;

  display: flex;
  flex-direction: column;
  align-items: center;
}
.view-title {
  font-size: 8vw;
  letter-spacing: 3vw;
  text-transform: uppercase;

  animation-duration: 4s;
  animation-name: letter-spacing;
}

.product-container {
  
  max-height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}
.product-row {
  height: 45vw;
  opacity: 0;

  scroll-snap-align: start;
}
.product-row-animation {
  opacity: 1;

  animation-duration: 1s;
  animation-name: sliding-up;
}
.product-title {
  font-size: 5vw;
  line-height: 6vw;
}
.product-subtitle {
  font-size: 1.3vw;
  line-height: 1.6vw;
}
.product-desc {
  padding-left: 8vw;
  padding-right: 8vw;

  font-size: 1.1vw;
  line-height: 1.4vw;

  text-align: center;
}
.product-row-right {
  width: 100%;
  height: 40vw;

  padding-left: 5vw;

  background-size: 100vw;

  display: flex;
}
.product-row-left {
  width: 100%;
  height: 40vw;

  padding-left: 5vw;

  background-size: 100vw;

  display: flex;
  flex-direction: row-reverse;
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
    letter-spacing: 3vw;
  }
}
@font-face {
  font-family: "ZonaPro ExtraLight";
  src: url("/assets/fonts/ZonaPro-ExtraLight.otf");
}
</style>