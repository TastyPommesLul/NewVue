<script setup lang="ts">

import NavBar from "@/components/NavBar.vue";
</script>


<template>
    <router-view />

    <NavBar />
</template>


<style scoped>
router-view{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
