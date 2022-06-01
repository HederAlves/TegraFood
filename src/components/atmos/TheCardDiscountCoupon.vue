<template>
  <div class="discountCouponCard">
    <h1>Cupom de desconto</h1>
    <input type="text" />
    <button>Adicionar</button>
  </div>
</template>
<script>
export default {
  name: "TheCardDiscountCoupon",
};
</script>
<style scoped>
.discountCouponCard {
  @apply flex justify-center mx-5 border;
  width: 734px;
  height: 128px;
  border-radius: 8px;
  box-shadow: 3px 3px 8px 1px rgba(0, 0, 0, 0.3);
}

h1 {
  @apply text-3xl font-bold self-center mb-2 mr-3;
  color: #223263;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

input {
  align-self: center;
  width: 260px;
  height: 48px;
  box-sizing: border-box;
  border: solid 2px #ebf0ff;
  border-radius: 5px;
}

input:focus {
  outline: none;
}

Button {
  align-self: center;
  background: #dc9000;
  color: white;
  width: 140px;
  height: 50px;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
}
</style>
