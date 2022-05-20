<template>
    <section class="filterSection">
        <ul class="listFilter">
            <li><a class="titleFilter" href="/store">Produtos</a></li>
            <li><a class="titleFilter" href="/store">Todos</a></li>
        </ul>
        <ul class="listFilter">
            <li><a href="/store"><img src="../../assets/icons/sort-by-alpha.png" alt=""></a></li>
            <li><a href="/store"><img src="../../assets/icons/filter.png" alt=""></a></li>
        </ul>
    </section>
</template>

<script>
export default {
    name: "TheFilters"
}
</script>

<style scoped>
.filterSection {
  @apply flex justify-between;
}
.listFilter {
    @apply flex mt-12 mx-7 justify-between w-24;
}
.titleFilter {
    @apply text-3xl pr-5 font-bold;
    color: #223263;
}
.titleFilter:hover {
    text-decoration: underline;
    color: #E6A11F;
}
</style>