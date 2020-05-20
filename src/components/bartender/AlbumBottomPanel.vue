<template>
  <div>
    <slot></slot>
    BOTTOM {{album}}
  </div>
</template>

<script>
export default {
   props: ['album'],
}
</script>

<style scoped>

</style>