<template>
    <!-- componente filtro de preço -->
    <TheFilters @filter-price="filterPrice"/>
    <!-- todos os preços -->
    <ThePriceDessert v-if="priceDessert" />
    <!-- preços filtrados -->
    <ThePriceFilterDessert v-if="priceFilter" />
</template>

<script>
import TheFilters from '../atmos/TheFilters.vue';
import ThePriceDessert from '../organism/filter-price-dessert/ThePriceDessert.vue';
import ThePriceFilterDessert from '../organism/filter-price-dessert/ThePriceFilterDessert.vue';

export default {
    name: "TheListAllProducts",
    components: { TheFilters, ThePriceDessert, ThePriceFilterDessert },
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