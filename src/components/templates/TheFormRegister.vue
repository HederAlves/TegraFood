<template>
  <div>
    <ul v-for="user of usersData" :key="user.id">
      <li>{{ user.email }}</li>
      <li>{{ user.password }}</li>
      <h1>oi</h1>
    </ul>
    <button @click="getData" class="bg-black text-white">listar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const usersData = ref([]);

async function getData() {
  const resp = await fetch('http://localhost:3000/users');
  const response = await resp.json();
  console.log(response[0]);
  usersData.value = response;
  console.log(usersData.value);
}

</script>