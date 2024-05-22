<script setup lang="ts">

</script>

<template>
    <nav class="navbar">
        <router-link :to="{ name: 'home' }" class="link"><h1>Home</h1></router-link>
        <router-link :to="{ name: 'contact'}" class="link"><h1>Contact</h1></router-link>
    </nav>
</template>

<style scoped>
.navbar{
    position: absolute;
    top: 5px;
    left: 10px;
    display: inline-flex;
    background-color: #3a3a3a;
    border-radius: 5px 5px 22px 22px;
}
.link{
    margin: 6px 5px 4px ;
    background-color: #3a3a3a;
    border-radius: 17.5px;
    padding: 3px 10px;
    border-color: #3a3a3a;
    border-style: solid;
    border-width: 2px;
    color: #86ffe9;
}
.router-link-active, .router-link-exact-active{
    background-color: rgb(77, 187, 132);
    border-color: #37485d;
    color: #37485d;
}
h1{
    font-weight: bold;
    font-family: Arial;
}
</style>