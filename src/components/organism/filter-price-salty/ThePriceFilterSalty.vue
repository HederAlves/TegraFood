<template>
    <!-- componente de ordenação-->
    <TheOrderAZ @order-az="orderAZ"/>
    <!-- preços filtrados em ordem crescente -->
    <TheAscendingSaltyFilter v-if="products" />
    <!-- preços filtrados em ordem decrescente -->
    <TheDescendingSaltyFilter v-if="productsOrder" />
</template>

<script>
import TheOrderAZ from '../../atmos/TheOrderAZ.vue';
import TheAscendingSaltyFilter from '../../molecules/order-az-salty/products-filter-price/TheAscendingSaltyFilter.vue';
import TheDescendingSaltyFilter from '../../molecules/order-az-salty/products-filter-price/TheDescendingSaltyFilter.vue';


export default {
    name: "ThePriceFilterSalty",
    components: { TheOrderAZ, TheAscendingSaltyFilter, TheDescendingSaltyFilter },

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