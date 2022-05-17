<template>
<div>
  <Login />
</div>
</template>
<script>
import Login from './components/Template/Login.vue';
import Store from './components/Template/Store.vue';
export default {
    name: "App",
    components: { Login, Store }
}
</script>
