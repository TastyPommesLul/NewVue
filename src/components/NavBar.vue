<script setup lang="ts">
import { ref } from 'vue'

let showNavBar = ref(false);



</script>

<template>

    <div @mouseenter="showNavBar = true" @mouseleave="showNavBar = false" class="outernav">
        <transition>
            <h1 v-if="!showNavBar" class="menu">...</h1>
        </transition>

        <transition>
            <nav class="navbar" v-if="showNavBar">
                <router-link :to="{ name: 'home' }" class="link">
                    <h1>Home</h1>
                </router-link>
                <router-link :to="{ name: 'contact'}" class="link">
                    <h1>Contact</h1>
                </router-link>
            </nav>
        </transition>
    </div>


</template>

<style scoped lang="scss">

.v-enter-active,
.v-leave-active{
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to{
    opacity: 0;
}
.outernav{
    position: absolute;
    top: 10px;
    left: 20px;
    display: inline-flex;
    padding: -1px;
}

.menu{
    position: absolute;
    top: -10px;
}

.navbar{
    position: absolute;
    top: -5px;
    left: -10px;
    display: inline-flex;
    border-radius: 5px 5px 22px 22px;
}
.link{
    margin: 6px 5px 4px ;
    background-color: #c5b3b4;
    border-radius: 17.5px;
    padding: 3px 10px;
    border-color: #c5b3b4;
    border-style: solid;
    border-width: 2px;
    color: #ffffff;
}
.router-link-active, .router-link-exact-active{
    background-color: #c5b3b4;
    border-color: #6f8a53;
    color: #585443;
}
h1{
    font-weight: bold;
    font-family: Arial;
}

</style>