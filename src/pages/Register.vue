<template>
  <div class="mainContainer">
   <TheFormRegister />
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