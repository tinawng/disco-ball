<template>
  <div class="container-0y2i">
    <div class="nav">Nav</div>
    <div class="view">
      <div style="height: 100vh; line-height: 100vh">
        <span class="view-title">brute</span>
      </div>
      <v-parallax dark :src="'./assets/images/airy/matrix.jpg'" style="height: 20vw; width: 77vw"></v-parallax>
      <span class="" ref="subtitle">The Matrix</span>
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
            entry.target.classList.add("view-subtitle")
            observer.unobserve(entry.target);
          }
        });
      }
    );

    intersectionObserver.observe(this.$refs["subtitle"]);
  }
};
</script>

<style scoped>
.container-0y2i {
  font-family: "ZonaPro ExtraLight";
  height: 500vh;
}

.nav {
  position: fixed;
  right: 0;
  width: 23vw;
  height: 100vh;

  background: #171717;
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

  animation-duration: 6s;
  animation-name: letter-spacing;
}
.view-subtitle {
  font-size: 5vw;

  animation-duration: 1s;
  animation-name: sliding-up;
}

@keyframes sliding-up {
  from {
    margin-top: 6vw;
  }
  to {
    margin-top: 0vw;
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