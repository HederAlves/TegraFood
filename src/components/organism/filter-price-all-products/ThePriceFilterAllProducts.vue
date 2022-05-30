<template>
    <!-- componente de ordenação -->   
    <TheOrderAZ @order-az="orderAZ"/>
    <!-- preços filtrados em ordem crescente -->
    <TheAscendingAllProductsFilter v-if="products"/>
    <!-- preços filtrados em ordem decrescente -->
    <TheDescendingAllProductsFilter v-if="productsOrder" />
</template>

<script>
import TheOrderAZ from '../../atmos/TheOrderAZ.vue';
import TheAscendingAllProductsFilter from '../../molecules/order-az-all-products/all-products-filter-price/TheAscendingAllProductsFilter.vue';
import TheDescendingAllProductsFilter from '../../molecules/order-az-all-products/all-products-filter-price/TheDescendingAllProductsFilter.vue';


export default {
    name: "ThePriceProductsAll",
    components: { TheOrderAZ, TheAscendingAllProductsFilter, TheDescendingAllProductsFilter },

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