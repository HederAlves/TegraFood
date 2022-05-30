<template>
  <div>
    <TheHeader />
    <h1 class="titleShoppingCart">Meu carrinho</h1>
  </div>
</template>

<script>
import TheHeader from '../components/templates/TheHeader.vue';

export default {
  name: "ShoppingCart",
  components: { TheHeader }
}
</script>

<style>
.titleShoppingCart{
  @apply mt-12 ml-16 text-3xl pr-5 font-bold;
    color: #223263;
}
</style>