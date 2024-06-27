<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="content">
            <slot />
        </div>
    </div>
</template>

<style scoped lang="scss">
.container{
    display: flex;
    align-items: center;
    justify-content: center;
    .content{
        color: black;
        padding: 7px;
        background-color: #bababa;
        border-style: solid;
        border-radius: 5px;
        border-width: 3px;
        border-color: black;
    }
}
</style>