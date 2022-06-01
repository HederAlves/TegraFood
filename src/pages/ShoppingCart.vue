<template>
  <div>
    <TheHeader />
    <h1>Meu carrinho</h1>
    <div class="mainContainer">
      <TheListShoppingCart />
      <footer>
        <a>Escolher mais</a>
        <button>Fechar pedido<img class="icon" src="../../public/icons/shopping-cart-sm.png" alt=""></button>
      </footer>
    </div>
  </div>
</template>

<script>
import TheHeader from '../components/templates/TheHeader.vue';
import TheListShoppingCart from '../components/templates/TheListShoppingCart.vue';

export default {
  name: "ShoppingCart",
  components: { TheHeader, TheListShoppingCart, },

  data() {
    return {
      listShoppingCart: true
    }
  },
}
</script>

<style scoped>
.mainContainer {
  @apply flex flex-col justify-between ml-5;
  min-height: 470px;
}
h1 {
  @apply mt-14 ml-20 mb-4 text-3xl pr-5 font-bold;
  color: #223263;
}
footer {
  @apply flex justify-end gap-5 mt-16 mb-6;
  margin-right: 103px;
}
button {
  @apply text-left pl-5 font-semibold;
  background: #E6A11F;
  color: white;
  width: 180px;
  height: 57px;
  border: solid 2px #EBF0FF;
  border-radius: 5px;
}
.icon {
  position: absolute;
  margin: -19px 0px 0px 115px;
}
a {
  @apply text-black self-center font-semibold text-lg;
  text-decoration-line: underline;
  color: #223263;
}
</style>