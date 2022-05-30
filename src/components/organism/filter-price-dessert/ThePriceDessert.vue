<template>
    <!-- componente de ordenação -->    
    <TheOrderAZ @order-az="orderAZ"/>
    <!-- todos os preços em ordem crescente -->
    <TheAscendingDessert v-if="products" />
    <!-- todos os preços em ordem decrescente -->
    <TheDescendingDessert v-if="productsOrder" />
</template>

<script>
import TheOrderAZ from '../../atmos/TheOrderAZ.vue';
import TheAscendingDessert from '../../molecules/order-az-dessert/products/TheAscendingDessert.vue';
import TheDescendingDessert from '../../molecules/order-az-dessert/products/TheDescendingDessert.vue';

export default {
    name: "ThePriceDessert",
    components: { TheOrderAZ, TheAscendingDessert, TheDescendingDessert },

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