<template>
  <div class="mainContainer">
    <img class="imageLogin" src="/images/image-login.png" alt="imagem de lanches" />
    <section class="sectionForm">
      <h1 class="titleLogin">Bem vindo!</h1>
      <p>Faça seu login para continuar</p>
      <TheFormLogin />
      <span>
        <p class="lineDivision">ou</p>
      </span>
      <button class="buttonGoogle"> <img class="iconGoogle" src="../../public/icons/google.png" alt=""> Entrar com o Google</button>
      <p>Não tem uma conta?<router-link class="stringRouter" to="/register">Cadastre</router-link></p>
    </section>
  </div>
</template>
  
  <script>
import TheFormLogin from '../components/templates/TheFormLogin.vue';
export default {
    name: "Login",
    components: { TheFormLogin }
};
</script>
  
<style scoped>
.mainContainer {
  @apply flex justify-between;
  color: #9098B1;
}
.sectionForm {
  @apply flex flex-col justify-around items-center mt-8 mr-72;
  height: 560px;
}
.titleLogin {
  @apply font-bold text-2xl text-black;
}
.buttonGoogle {
  color: #9098B1;
  width: 343px;
  height: 57px;
  border: solid 2px #EBF0FF;
  border-radius: 5px;
}
.iconGoogle{
  position: absolute;
  margin-left: 8px;
}
span {
  box-sizing: border-box;
  border-top: 2px solid #EBF0FF;
  width: 346px;
  text-align: center;
}
.lineDivision {
  position: absolute;
  margin: -16px 0px 0px 143px;
  background: white;
  padding: 0px 22px 0px 22px;
}
.stringRouter{
    color:darkturquoise;
    font-weight: bold;
    padding-left: 5px;
}
</style>