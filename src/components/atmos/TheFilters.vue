<template>
  <button @click="$emit('filterPrice')">
    <img src="/icons/filter.png" alt="" />
  </button>
</template>
<script>
export default {
  name: "TheFilters",
  emits: ["filterPrice"],
};
</script>
<style scoped>
button {
  @apply inline-flex justify-end mr-5 mt-20 mb-3;
  width: 975px;
}
</style>
