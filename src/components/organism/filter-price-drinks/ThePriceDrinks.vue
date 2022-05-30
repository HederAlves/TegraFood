<template>
    <!-- componente de ordenação --> 
    <TheOrderAZ @order-az="orderAZ"/>
    <!-- todos os preços em ordem crescente -->
    <TheAscendingDrinks v-if="products" />
    <!-- todos os preços em ordem decrescente -->
    <TheDescendingDrinks v-if="productsOrder" />
</template>

<script>
import TheOrderAZ from '../../atmos/TheOrderAZ.vue';
import TheAscendingDrinks from '../../molecules/order-az-drinks/products/TheAscendingDrinks.vue';
import TheDescendingDrinks from '../../molecules/order-az-drinks/products/TheDescendingDrinks.vue';

export default {
    name: "ThePriceDrinks",
    components: { TheOrderAZ, TheAscendingDrinks, TheDescendingDrinks },

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