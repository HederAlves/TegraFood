<template>
    <!-- componente de ordenação -->   
    <TheOrderAZ @order-az="orderAZ"/>
    <!-- preços filtrados em ordem crescente -->
    <TheAscendingDessertFilter v-if="products" />
    <!-- preços filtrados em ordem decrescente -->
    <TheDescendingDessertFilter v-if="productsOrder" />
</template>

<script>
import TheOrderAZ from '../../atmos/TheOrderAZ.vue';
import TheAscendingDessertFilter from '../../molecules/order-az-dessert/products-filter-price/TheAscendingDessertFilter.vue';
import TheDescendingDessertFilter from '../../molecules/order-az-dessert/products-filter-price/TheDescendingDessertFilter.vue';

export default {
    name: "ThePriceFilterDessert",
    components: { TheOrderAZ, TheAscendingDessertFilter, TheDescendingDessertFilter },

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