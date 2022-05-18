<template>
  <div class="mainContainer">
    <img class="imageLogin" src="../assets/images/image-login.png" alt="imagem de lanches" />
    <section class="sectionForm">
      <h1 class="titleLogin">Bem vindo!</h1>
      <p>Faça seu login para continuar</p>
      <form class="loginForm" @submit.prevent="save">
      <ul>
        <li class="inputContainer ">
          <img class="iconEmail" src="../assets/icons/email.png" alt="">
          <input class="inputLogin" type="email" placeholder="Seu e-mail" required="Digite seu Email" />
        </li>
        <li class="inputContainer ">
          <img class="" src="../assets/icons/password.png" alt="">
          <input class="inputLogin" type="text" placeholder="Senha" required="Digite sua Senha" />
        </li>
      </ul>   
    <router-link class="buttonRouter" to="/store">Entrar</router-link>
      </form>
      <span>
        <p class="lineDivision">ou</p>
      </span>
      <button class="buttonGoogle"> <img class="iconGoogle" src="../assets/icons/Google.png" alt=""> Entrar com o Google</button>
      <p>Não tem uma conta?<router-link class="stringRouter" to="/register">Cadastre</router-link></p>
    </section>
  </div>
</template>
  
  <script>
export default {
  name: "Login",
};
</script>
  
<style scoped>
.mainContainer {
  @apply flex justify-between;
  color: #9098B1;
}
ul{
  @apply flex flex-col justify-between;
  height: 120px;
}
.sectionForm {
  @apply flex flex-col justify-around items-center mt-8 mr-72;
  height: 560px;
}

.loginForm {
  @apply flex flex-col justify-around h-56;
}

.titleLogin {
  @apply font-bold text-2xl text-black;
}

.inputContainer {
  @apply flex p-2;
  width: 343;
  height: 48px;
  box-sizing: border-box;
  border: solid 2px #EBF0FF;
  border-radius: 5px;
}

.inputLogin {
  position: absolute;
  margin: -8px 0px 0px 36px;
  width: 343;
  height: 44px;
}

.inputLogin:focus {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}

.iconEmail{
  padding: 5px 0px 3px 0px;
}

.buttonRouter {
  background: #DC9000;
  color: white;
  width: 343px;
  height: 57px;
  border-radius: 5px;
  text-align: center;
  padding-top: 15px;
  margin: 0;
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