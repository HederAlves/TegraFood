<template>
    <!-- componente filtro de preço -->
    <TheFilters @filter-price="filterPrice"/>
    <!-- todos os preços -->
    <ThePriceDrinks v-if="priceDessert" />
    <!-- preços filtrados -->
    <ThePriceFilterDrinks v-if="priceFilter" />
</template>

<script>
import TheFilters from '../atmos/TheFilters.vue';
import ThePriceDrinks from '../organism/filter-price-drinks/ThePriceDrinks.vue';
import ThePriceFilterDrinks from '../organism/filter-price-drinks/ThePriceFilterDrinks.vue';

export default {
    name: "TheListAllProducts",
    components: { TheFilters, ThePriceDrinks, ThePriceFilterDrinks },
    data() {
        return {
            priceDessert: true,
            priceFilter: false
        };
    },
    methods: {
        filterPrice(){
            this.priceDessert = !this.priceDessert;
            this.priceFilter = !this.priceFilter;
        },
    }
}
</script>