<template>
  <main class="border-white bg-white rounded-xl p-5 shadow-2xl">
    <section class="flex justify-around border-b-4 pb-10">
      <div>
        <h1>Dados Gerais</h1>
      </div>
      <ul @submit.prevent="save">
        <div class="flex gap-10 mb-10">
          <input type="text" name="" class="border bg-slate-500 text-white" v-model="formData.email">
          <input type="text" name="" class="border bg-slate-500 text-white" v-model="formData.password">
          <input type="text" name="" class="border">
          <input type="text" name="" class="border">
          </div>
        <button @click="save">clique</button>
      </ul>
    </section>
  </main>
</template>
<script
  lang="ts"
  setup
>import { reactive } from 'vue';

  const formData = reactive({
    id: '',
    email: '',
    password: '',
  });
  async function save() {
    console.log("oi");
    console.log(formData)
    await fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }
</script>
