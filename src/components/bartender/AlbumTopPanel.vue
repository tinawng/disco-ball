<template>
  <div class="container-1z3e">
    <span class="album-title">{{album.name}}</span>
    <img class="album-cover" :src="album.cover" />
  </div>
</template>

<script>
export default {
  props: ["album"]
};
</script>

<style scoped>
.container-1z3e {
  display: flex;
  justify-content: space-between;
}
.album-title {
  line-height: 6vw;
  font-size: 6vw;
  font-weight: 700;
  color: white;
  text-transform: capitalize;
}
.album-cover {
  width: 20vw;
}
</style>