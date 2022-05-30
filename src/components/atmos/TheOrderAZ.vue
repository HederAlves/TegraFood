<template>
  <button @click="$emit('orderAz')">
    <img src="/icons/sort-by-alpha.png" alt="" />
  </button>
</template>
<script>
export default {
  name: "TheOrderAZ",
  emits: ["orderAz"],
};
</script>