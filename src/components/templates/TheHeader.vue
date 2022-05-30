<template>
    <header>
        <ul class="listHeader">
            <li> <router-link to="/shoppingcart"><img class="imageIcon" src="/icons/shopping-cart.png" alt="Icone carrinho de compras"></router-link></li>
            <li><img class="imageIcon" src="/icons/notifications.png" alt="Icone de Notificação"></li>
            <li><img class="imagePerfil" src="/images/perfil-people.png" alt="Imagem de perfil"></li>
        </ul>
    </header>
</template>

<script>
export default {
    name: "TheHeader"
}
</script >

<style scoped>
header {
    @apply flex justify-end;
    background: #E6A11F;
}
.listHeader {
    @apply flex items-center;
}
.imagePerfil {
    border-radius: 100%;
    padding: 15px;
}
.imageIcon {
    padding: 15px;
}
</style>