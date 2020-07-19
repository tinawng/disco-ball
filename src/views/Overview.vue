<template>
  <section>
    <Hero />
  </section>
</template>

<script>
export default {
  components: {
    Hero: () => import("@/components/overview/Hero")
  }
};
</script>

<style>
section {
  background-color: rgb(250, 250, 250);
}
</style>