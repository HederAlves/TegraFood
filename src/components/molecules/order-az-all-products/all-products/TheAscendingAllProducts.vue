<template>
    <section class="sectionProductsList" v-for="product in products" :key="product.id">
        <ul class="productCard">
            <li class="productInformation">
                <img src="/images/lanche-x-burguer.png" alt="" />
                <!-- <img :src="products.image" />-->
                <article>
                    <h1 class="titleProduct">{{ product.title }}</h1>
                    <p class="descriptionProduct">{{ product.description }}</p>
                </article>
            </li>
            <li>
                <p class="priceProduct">{{ product.price }}</p>
                <button class="purchaseButton">Comprar</button>
            </li>
        </ul>
    </section>
</template> 

<script>
export default {
    name: "TheAscendingAllProducts",

    data() {
        return {
            products: [],
        };
    },
    async mounted() {
        //API Todos os produtos em ordem crescente
        const resp = await fetch("https://tegra-food-skyot.herokuapp.com/products");
        const response = await resp.json();
        this.products = response.data;
    },
}
</script>

<style scoped>
.sectionProductsList {
    @apply mt-2;
}

.productCard {
    @apply flex justify-between mx-5 border pt-3 pb-1 px-5;
    height: 128px;
    border-radius: 8px;
    box-shadow: 3px 3px 8px 1px rgba(0, 0, 0, 0.3);
}

.productInformation {
    @apply flex justify-between gap-10;
    vertical-align: middle;
}

.titleProduct {
    @apply text-3xl font-bold mt-5;
    color: #223263;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.descriptionProduct {
    @apply font-medium text-lg;
    color: rgba(0, 0, 0, 0.5);
}

.priceProduct {
    @apply text-2xl font-bold text-center mt-1 mb-2;
    color: #223263;
}

.purchaseButton {
    background: #dc9000;
    color: white;
    width: 140px;
    height: 50px;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
}
</style>
