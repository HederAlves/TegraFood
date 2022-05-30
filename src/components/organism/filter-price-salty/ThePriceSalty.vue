<template>
    <!-- componente de ordenação-->
    <TheOrderAZ @order-az="orderAZ"/>
    <!-- todos os preços em ordem crescente -->
    <TheAscendingSalty v-if="products" />
    <!-- todos os preços em ordem decrescente -->
    <TheDescendingSalty v-if="productsOrder" />
</template>

<script>
import TheOrderAZ from '../../atmos/TheOrderAZ.vue';
import TheAscendingSalty from '../../molecules/order-az-salty/products/TheAscendingSalty.vue';
import TheDescendingSalty from '../../molecules/order-az-salty/products/TheDescendingSalty.vue';

export default {
    name: "ThePriceDessert",
    components: { TheOrderAZ, TheAscendingSalty, TheDescendingSalty },

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