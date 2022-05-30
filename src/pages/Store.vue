<template>
  <div class="bodyPage" id="app">
    <TheSidebarMenu 
     @products-list-all="selectionProducts" 
     @salty-list="selectionSalty"
     @dessert-list="selectionDessert"
     @drinks-list="selectionDrinks" 
    />
    <main>
      <TheHeader />
      <div class="containerTitlesFilter">
        <h1 class="titleFilter">Produtos</h1>
        <h1 class="titleFilter">Todos</h1>
      </div>
      <TheListAllProducts v-if="products" />
      <TheListSalty v-if="salty" />
      <TheListDessert v-if="dessert" />
      <TheListDrinks v-if="drinks" />
    </main>
  </div> 
</template>

<script>
import TheSidebarMenu from '../components/templates/TheSidebarMenu.vue';
import TheHeader from '../components/templates/TheHeader.vue';
import TheListAllProducts from '../components/templates/TheListAllProducts.vue';
import TheListSalty from '../components/templates/TheListSalty.vue';
import TheListDessert from '../components/templates/TheListDessert.vue';
import TheListDrinks from '../components/templates/TheListDrinks.vue';

export default {
  name: "Store",
  components: { TheSidebarMenu, TheHeader, TheListAllProducts, TheListSalty, TheListDessert, TheListDrinks },
  data(){
    return {
      products: true,
      salty: false,
      dessert: false,
      drinks: false
    }
  },
  methods: {
    selectionProducts(){
      this.products = !this.products;

      this.salty = false;
      this.dessert = false;
      this.drinks = false;
    },
    selectionSalty(){
      this.salty = !this.salty;

      this.products = false;
      this.dessert = false;
      this.drinks = false;
    },
    selectionDessert(){
      this.dessert = !this.dessert;

      this.products = false;
      this.salty = false;
      this.drinks = false;
   
    },
    selectionDrinks(){
      this.drinks = !this.drinks;
  
      this.products = false;
      this.salty = false;
      this.dessert = false;
    }
  }
};
</script>

<style scoped>
.bodyPage {
  @apply inline-flex;
  font-family: sans-serif;
}
main {
  @apply pb-5;
  width: 1100px;
}
.containerTitlesFilter{
  @apply flex absolute mt-6
}
.titleFilter{
  @apply mt-12 ml-16 text-3xl pr-5 font-bold;
    color: #223263;
}
.titleFilter:hover{
    text-decoration: underline;
    color: #E6A11F;

}
</style>
