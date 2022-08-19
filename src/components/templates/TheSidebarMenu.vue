<template>
        <section class="menuSidebar">
            <img src="/images/logo.png" alt="Logo">
            <ul>
                <li class="listSidebarButton">
                    <button class="buttonSidebar" @click="$emit('productsListAll')">Todos</button>
                </li>
                <li class="listSidebarButton">
                    <button class="buttonSidebar" @click="$emit('saltyList')">Salgados</button>
                </li>
                <li class="listSidebarButton">
                    <button class="buttonSidebar"  @click="$emit('dessertList')">Sobremesa</button>
                </li>
                <li class="listSidebarButton">
                    <button class="buttonSidebar"  @click="$emit('drinksList')">Bebidas</button>
                </li>
            </ul>
        </section>
</template>

<script>
export default {
    name: "TheSidebarMenu",
    emits: ['productsListAll', 'saltyList', 'dessertList','drinksList']
}
</script>

<style scoped>
.menuSidebar {
    display: inline-block;
    background: #6A0000;
    width: 254px;
    min-height: 1000px;
}
.listSidebarButton {
    color: white;
    margin: 0px 0px -2px -2px;
}
.buttonSidebar {
    width: 258px;
    text-align: center;
    height: 45px;
    border: solid 2px #EBF0FF;
}
.buttonSidebar:hover {
    background: #E6A11F;
}
.buttonSidebar:active {
    background: #E6A11F;
}
</style>