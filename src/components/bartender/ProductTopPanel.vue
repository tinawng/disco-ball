<template>
  <div
    class="container-6j5k"
    :style="'background-image: url(\'https://medias.arturia.net/images/products/'+ selectedProduct +'/large-'+selectedProduct+'-banner.jpg\')'"
  >
    <transition name="fade" mode="out-in">
      <span
        :key="selectedProduct"
        class="product-name"
      >{{selectedProduct.replace(/-/g, "").replace(/v$/, " v")}}</span>
    </transition>

    <transition name="slide">
      <img
        :key="selectedProduct"
        class="product-img"
        :src="'https://medias.arturia.net/images/products/'+ selectedProduct +'/'+selectedProduct+'-image.png'"
      />
    </transition>
  </div>
</template>

<script>
import store from "@/stores/bartender.js";
export default {
  computed: {
    selectedProduct() {
      return store.state.selected_product;
    }
  }
};
</script>

<style scoped>
.container-6j5k {
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
}

.product-name {
  line-height: 8vw;
  font-size: 8vw;
  font-weight: 700;
  color: white;
  text-transform: capitalize;

  z-index: 2;
}
.product-img {
  position: absolute;
  width: 60vw;
  top: 0vw;
  right: -5vw;

  filter: grayscale(40%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.61s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 1.61s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(50vw);
}
</style>