<template>
  <div class="mainContainer">
    <img class="imageLogin" src="/images/image-login.png" alt="imagem de lanches" />
    <section class="sectionForm">
      <h1 class="titleLogin">Vamos começar!</h1>
      <p>Crie uma nova conta</p>
      <TheFormRegister />
      <p>Não tem uma conta?<router-link class="stringRouter" to="/">Entrar</router-link></p>
    </section>
  </div>
</template>
  
  <script>
import TheFormRegister from '../components/templates/TheFormRegister.vue';

export default {
    name: "Login",
    components: { TheFormRegister }
};
</script>
  
<style scoped>
.mainContainer {
  @apply flex justify-between;
  color: #9098B1;
}
.titleLogin {
    @apply font-bold text-2xl text-black;
}
.sectionForm {
  @apply flex flex-col justify-around items-center mt-8 mr-72;
  height: 560px;
}
.stringRouter{
    color:darkturquoise;
    font-weight: bold;
    padding-left: 5px;
}
</style>