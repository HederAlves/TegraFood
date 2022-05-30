<template>
    <!-- componente filtro de preço -->
    <TheFilters @filter-price="filterPrice"/>
    <!-- todos os preços -->
    <ThePriceSalty v-if="price" />
    <!-- preços filtrados -->
    <ThePriceFilterSalty v-if="priceFilter" />
</template>

<script>
import TheFilters from '../atmos/TheFilters.vue';
import ThePriceFilterSalty from '../organism/filter-price-salty/ThePriceFilterSalty.vue';
import ThePriceSalty from '../organism/filter-price-salty/ThePriceSalty.vue';

export default {
    name: "TheListAllProducts",
    components: { TheFilters, ThePriceFilterSalty, ThePriceSalty },
    data() {
        return {
            price: true,
            priceFilter: false
        };
    },
    methods: {
        filterPrice(){
            this.price = !this.price;
            this.priceFilter = !this.priceFilter;
        },
    }
}
</script>