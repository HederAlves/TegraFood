<template>
    <table>
      <tr>
        <td class="tableLeft">Subtotal</td>
        <td class="tableRigth">R$ 83,00</td>
      </tr>
      <tr>
        <td class="tableLeft">Entrega</td>
        <td class="tableRigth"><a href="">Calcular</a></td>
      </tr>
      <tr>
        <td class="tableLeft">Total</td>
        <td class="tableRigth">R$ 83,00</td>
      </tr>
    </table>
</template>

<script>
export default {
  name: "TheTablePay",
};
</script>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0;
  height: 162px;
}
.tableRigth {
  @apply text-3xl font-bold pr-5 text-right;
  color: #223263;
  border: 0.25px solid rgba(0, 0, 0, 0.2);
  border-radius: 0px 6px 6px 0px;
  width: 200px;
}
.tableLeft {
  @apply text-base font-bold pl-5 uppercase;
  border: 0.25px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px 0px 0px 6px;
  width: 250px;
}
a {
  @apply text-sm text-black align-middle;
  text-decoration-line: underline;
  color: #223263;
}
</style>
