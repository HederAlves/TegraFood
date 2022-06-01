<template>
    <section class="sectionProductsList" v-for="product in products" :key="product.id">
        <ul class="productCard">
            <li class="productInformation">
                <img src="/images/lanche-x-burguer.png" alt="" />
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
    name: "TheAscendingDrinks",

    data() {
        return {
            products: [],
        };
    },
    async mounted() {
        //API Bebidas em ordem crescente
        const resp = await fetch("https://tegra-food-skyot.herokuapp.com/products?page=1&order=ASC&filter=bebida&category=bebida");
        const response = await resp.json();
        this.products = response.data;
    },
}
</script>