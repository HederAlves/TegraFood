<template>
  <div class="bodyPage">
    <section class="menuSidebar">
      <img src="../../assets/images/logo-Tegrafood.png" alt="">
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
    <main>
      <header>
        <ul class="listHeader">
          <li><img class="imageIcon" src="../../assets/icons/shopping-cart.png" alt=""></li>
          <li><img class="imageIcon" src="../../assets/icons/notifications.png" alt=""></li>
          <li><img class="imagePerfil" src="../../assets/images/perfil-people.png" alt=""></li>
        </ul>
      </header>
      <section class="filterSection">
        <ul class="listFilter">
          <li><a class="titleFilter" href="">Produtos</a></li>
          <li><a class="titleFilter" href="">Todos</a></li>
        </ul>
        <ul class="listFilter">
          <li><a href=""><img src="../../assets/icons/sort-by-alpha.png" alt=""></a></li>
          <li><a href=""><img src="../../assets/icons/filter.png" alt=""></a></li>
        </ul>
      </section>

      <section class="sectionProdutosList">

      </section>

    </main>
  </div>
</template>
<script>
export default {
  name: 'menu'
}
</script>
<style>
.bodyPage {
  @apply flex;
  font-family: sans-serif;
}

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

main {
  width: 1100px;
}

.imageIcon {
  padding: 15px;
}

.filterSection {
  @apply flex justify-between;
}

.listFilter {
  @apply flex mt-16 mx-7 justify-between w-24;
}
.titleFilter{
  @apply text-3xl pr-5 font-bold;
  color: #223263;
}
.titleFilter:hover{
  text-decoration: underline;
  color: #E6A11F;
}
</style>
