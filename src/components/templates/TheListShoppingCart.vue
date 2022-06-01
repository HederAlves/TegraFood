<template>
    <div>
        <section class="sectionProductsList" @click="" v-for="product in products" :key="product.id" v-if="listShoppingCart">
            <ul class="productCard">
                <li class="productInformation">
                    <img src="/images/lanche-x-burguer.png" alt="" />
                    <!-- <img :src="product.image"> -->
                    <article>
                        <h1 class="titleProduct">{{ product.title }}</h1>
                        <p class="descriptionProduct">{{ product.description }}</p>
                    </article>
                </li>
                <li>
                    <p class="priceProduct">{{ product.price }}</p>
                    <button class="purchaseButton">1x<img class="iconExpand" src="../../../public/icons/expand.png" alt=""></button>
                </li>
            </ul>
            <button @click="greet" class="trash"><img src="../../../public/icons/trash.png" alt=""></button>
        </section>
        <section class="sectionPayment">
            <TheCardDiscountCoupon />
            <TheTablePay />
        </section>
    </div>

</template> 

<script>
import TheCardDiscountCoupon from '../atmos/TheCardDiscountCoupon.vue';
import TheTablePay from '../atmos/TheTablePay.vue';

export default {
    name: "TheListShoppingCart",
    components: { TheCardDiscountCoupon, TheTablePay },
    emits: [ 'deleteAll'],

    data() {
        return {
            listShoppingCart: true,
            products: [],
        };
    },
    async mounted() {
        //API Todos os produtos filtrados e em ordem crescente simulando compra
        const resp = await fetch("https://tegra-food-skyot.herokuapp.com/products?page=1&order=ASC&max=10&min=5");
        const response = await resp.json();
        this.products = response.data;
    },
    methods: {
      greet: function () {
            this.listShoppingCart = false;
            console.log("oi")
        },
    }
}
</script>

<style scoped>
.sectionProductsList {
    @apply mt-2 flex;
}

.productCard {
    @apply flex justify-between mx-5 border pt-3 pb-1 px-5;
    width: 90.5%;
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
    width: 95px;
    height: 50px;
    border-radius: 5px;
    text-align: inherit;
    font-weight: bold;
    padding-left: 20px;
}

.iconExpand {
    position: absolute;
    margin: -14px 45px;
}

.trash {
    @apply self-center h-5;
}
.sectionPayment{
    @apply flex mt-2;
}
</style>
