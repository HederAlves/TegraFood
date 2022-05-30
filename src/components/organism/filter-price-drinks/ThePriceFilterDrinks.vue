<template>
    <!-- componente de ordenação --> 
    <TheOrderAZ @order-az="orderAZ"/>
    <!-- preços filtrados em ordem crescente -->
    <TheAscendingDrinksFilter v-if="products" />
    <!-- preços filtrados em ordem decrescente -->
    <TheDescendingDrinksFilter v-if="productsOrder" />
</template>

<script>
import TheOrderAZ from '../../atmos/TheOrderAZ.vue';
import TheAscendingDrinksFilter from '../../molecules/order-az-drinks/products-filter-price/TheAscendingDrinksFilter.vue';
import TheDescendingDrinksFilter from '../../molecules/order-az-drinks/products-filter-price/TheDescendingDrinksFilter.vue';

export default {
    name: "ThePriceFilterDrinks",
    components: { TheOrderAZ, TheAscendingDrinksFilter, TheDescendingDrinksFilter },

    data() {
        return {
            products: true,
            productsOrder: false
        };
    },
    methods: {
        orderAZ() {
            this.products = !this.products;
            this.productsOrder = !this.productsOrder;
        },
    },
}
</script>