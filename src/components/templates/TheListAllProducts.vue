<template>
    <!-- componente filtro de preço -->
    <TheFilters @filter-price="filterPrice"/>
    <!-- todos os preços -->
    <ThePriceAllProducts v-if="priceProductsAll" />
    <!-- preços filtrados -->
    <ThePriceFilterAllProducts v-if="priceFilter"/>
</template>

<script>
import TheFilters from '../atmos/TheFilters.vue';
import ThePriceAllProducts from '../organism/filter-price-all-products/ThePriceAllProducts.vue';
import ThePriceFilterAllProducts from '../organism/filter-price-all-products/ThePriceFilterAllProducts.vue';

export default {
    name: "TheListAllProducts",
    components: { TheFilters, ThePriceAllProducts, ThePriceFilterAllProducts },
    data() {
        return {
            priceProductsAll: true,
            priceFilter: false
        };
    },
    methods: {
        filterPrice(){
            this.priceFilter = !this.priceFilter;
            this.priceProductsAll = !this.priceProductsAll;
        },
    }
}
</script>