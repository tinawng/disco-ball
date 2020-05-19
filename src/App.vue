<template>
  <v-app>
    <!-- <transition name="slide" mode="out-in"> -->
      <router-view />
    <!-- </transition> -->
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}

.v-btn--active:before {
  opacity: 0 !important;
}

.soft-edges {
  border-radius: 14px !important;
}
.large-edges {
  border-radius: 28px !important;
}
.fit-parent {
  height: 100% !important;
  width: 100% !important;
  max-height: 100% !important;
  max-width: 100% !important;
}
.half-large {
  font-size: 24px !important;
}
.nu {
  border-radius: 27px;
  background: #f7f5f0;
  box-shadow: inset 5px 5px 10px #d2d0cc, inset -5px -5px 10px #ffffff;
}
.na {
  border-radius: 27px;
  background: #f7f5f0;
  box-shadow: 7px 7px 12px #deddd8, -7px -7px 12px #ffffff;
}

.hl {
  background: red !important;
}
.hlb {
  background: blue !important;
}

/* .slide-enter-active,
.slide-leave-active {
  transition: opacity 1.61s, transform 1.61s;
}
.slide-enter {
  transform: translateY(-100%);
}
.slide-leave-to {
  transform: translateY(-100%);
} */
</style>
