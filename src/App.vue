<template>
  <v-app>
    <transition :name="transitionName" mode="out-in">
      <router-view />
    </transition>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return { transitionName: null };
  },
  watch: {
    $route(to, from) {
      if (from.path === "/" && from.matched.length > 0) {
        this.transitionName = "landing-slide";
      } else {
        this.transitionName = "landing-rev-slide";
      }
    }
  }
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

.landing-slide-enter-active,
.landing-slide-leave-active {
  transition: opacity 0.809s, transform 1.414s;
  transition-delay: 0s;
}
.landing-slide-enter {
  transform: translateY(100vh);
}
.landing-slide-leave-to {
  opacity: 0;
}

.landing-rev-slide-enter-active,
.landing-rev-slide-leave-active {
  transition: opacity 0.809s, transform 1.414s;
  transition-delay: 0s;
}
.landing-rev-slide-enter {
  opacity: 0;
}
.landing-rev-slide-leave-to {
  transform: translateY(100vh);
}
</style>
