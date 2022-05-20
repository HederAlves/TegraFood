<template >
    <form class="loginForm" @submit.prevent="save">
        <ul class="inputList">
            <li class="inputContainer ">
                <img class="iconEmail" src="/icons/user.png" alt="">
                <input class="inputLogin" type="email" placeholder="Nome completo" required="Digite seu Nome Completo" />
            </li>
            <li class="inputContainer ">
                <img class="iconEmail" src="/icons/email.png" alt="">
                <input class="inputLogin" type="email" placeholder="Seu e-mail" required="Digite seu Email" />
            </li>
            <li class="inputContainer ">
                <img class="" src="/icons/password.png" alt="">
                <input class="inputLogin" type="text" placeholder="Senha" required="Digite sua Senha" />
            </li>
            <li class="inputContainer ">
                <img class="" src="/icons/password.png" alt="">
                <input class="inputLogin" type="text" placeholder="Confirme a senha" required="Confirme sua Senha" />
            </li>
        </ul>
        <router-link class="buttonRouter" to="/store">Entrar</router-link>
    </form>
</template>

<script>
export default {
    name: "TheFormRegister"
}
</script>

<style scoped>
.loginForm {
    @apply flex flex-col justify-around h-80;
}
.inputList{
  @apply flex flex-col justify-between;
  height: 235px;
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
.iconEmail {
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
    font-weight: bold;
}
</style>