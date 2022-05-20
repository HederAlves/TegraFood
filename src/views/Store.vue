<template>
  <div class="bodyPage">
    <TheSidebarMenu />
    <main>
      <TheHeader />
      <TheFilters />
      <section class="sectionProductsList">
        <!-- Componente dos produtos -->
      </section>
    </main>
  </div>
</template>

<script>
import TheHeader from '../components/Organism/TheHeader.vue';
import TheSidebarMenu from '../components/Organism/TheSidebarMenu.vue';
import TheFilters from '../components/Atmos/TheFilters.vue';
import ThePictureIcons from '../components/Atmos/ThePictureIcons.vue';
export default {
  name: "menu",
  components: { TheHeader, TheSidebarMenu, TheFilters, ThePictureIcons },
}
</script >

<style scoped>
.bodyPage {
  @apply flex;
  font-family: sans-serif;
}
main {
  width: 1100px;
}
.sectionProductsList{
  background: red;
}
</style>
