<template>
  <v-app>
    <transition :name="transitionName" mode="out-in">
      <router-view />
    </transition>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return { transitionName: null }
  },
  watch: {
    '$route' (to, from) {
      if (from.path === '/') {
        this.transitionName = 'slide';
      } else {
        this.transitionName = 'rev-slide';
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

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.809s, transform 1.414s;
  transition-delay: 0s;
}
.slide-enter {
  transform: translateY(100vh);
}
.slide-leave-to {
  opacity: 0;
}

.rev-slide-enter-active,
.rev-slide-leave-active {
  transition: opacity 0.809s, transform 1.414s;
  transition-delay: 0s;
}
.rev-slide-enter {
  opacity: 0;
}
.rev-slide-leave-to {
  transform: translateY(100vh);
}
</style>
