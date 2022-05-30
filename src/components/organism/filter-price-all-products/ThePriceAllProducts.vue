<template>
    <!-- componente de ordenação -->
    <TheOrderAZ @order-az="orderAZ"/>
    <!-- todos os preços em ordem crescente -->
    <TheAscendingAllProducts v-if="products"/>
    <!-- todos os preços em ordem decrescente -->
    <TheDescendingAllProductsOrder v-if="productsOrder" />
</template>

<script>
import TheOrderAZ from '../../atmos/TheOrderAZ.vue';
import TheAscendingAllProducts from '../../molecules/order-az-all-products/all-products/TheAscendingAllProducts.vue';
import TheDescendingAllProductsOrder from '../../molecules/order-az-all-products/all-products/TheDescendingAllProductsOrder.vue';

export default {
    name: "ThePriceProductsAll",
    components: { TheOrderAZ, TheAscendingAllProducts, TheDescendingAllProductsOrder },

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