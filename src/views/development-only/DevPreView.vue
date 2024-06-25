<script setup lang="ts">

</script>

<template>
    <router-view />

    <nav class="navbar">
        <router-link to="/dev-preview/component" class="link"><h1>Component Preview</h1></router-link>
        <router-link to="/dev-preview/view" class="link"><h1>View Preview</h1></router-link>
    </nav>


</template>

<style scoped lang="scss">

.navbar{
    position: absolute;
    top: 10px;
    left: 35%;
    display: inline-flex;
    padding: -1px;
}
.link{
    margin-left: 15px;
    margin-right: 15px;

}
router-view{
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>