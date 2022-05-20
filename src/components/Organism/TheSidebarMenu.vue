<template>
    <div>
        <section class="menuSidebar">
            <img src="/images/logo-Tegrafood.png" alt="Logo Tegrafood">
            <ul>
                <li class="listSidebarButton">
                    <button class="buttonSidebar">Todos</button>
                </li>
                <li class="listSidebarButton">
                    <button class="buttonSidebar">Pizza</button>
                </li>
                <li class="listSidebarButton">
                    <button class="buttonSidebar">Sobremesa</button>
                </li>
                <li class="listSidebarButton">
                    <button class="buttonSidebar">Pastel</button>
                </li>
                <li class="listSidebarButton">
                    <button class="buttonSidebar">Açai</button>
                </li>
                <li class="listSidebarButton">
                    <button class="buttonSidebar">Bebidas</button>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    name: "TheSidebarMenu"
}
</script>

<style scoped>
.menuSidebar {
    display: inline-block;
    background: #6A0000;
    width: 254px;
    height: 1598px;
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
</style>