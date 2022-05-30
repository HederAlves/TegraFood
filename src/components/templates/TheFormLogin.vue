<template>
  <form class="loginForm" @submit.prevent="login">
    <ul class="inputList">
      <li class="inputContainer">
        <img class="iconEmail" src="/icons/email.png" alt="" />
        <input
          class="inputLogin"
          type="email"
          placeholder="Seu e-mail"
          required="Digite seu Email"
          v-model="form.email"
        />
      </li>
      <li class="inputContainer">
        <img class="" src="/icons/password.png" alt="" />
        <input
          class="inputLogin"
          type="text"
          placeholder="Senha"
          required="Digite sua Senha"
          v-model="form.password"
        />
      </li>
    </ul>
    <button @click="login">Entrar</button>
  </form>
</template>

<script>

export default {
    name: "TheFormLogin",
    data() {
        return {
            form: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            let email = "dev@admin.com";
            let password = "admin"

            if(email === this.form.email && password === this.form.password) {
                this.$router.push( 'store' )
            } else {
                alert("Senha e login não conferem ou não existem")
            }
        },
    },
};
</script>

<style scoped>
.loginForm {
  @apply flex flex-col justify-around h-56;
}

.inputList {
  @apply flex flex-col justify-between;
  height: 120px;
}

.inputContainer {
  @apply flex p-2;
  width: 343;
  height: 48px;
  box-sizing: border-box;
  border: solid 2px #ebf0ff;
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

button {
  background: #dc9000;
  color: white;
  width: 343px;
  height: 57px;
  border-radius: 5px;
  text-align: center;
  margin: 0;
  font-weight: bold;
}
</style>
