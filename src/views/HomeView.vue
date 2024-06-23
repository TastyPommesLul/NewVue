<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="header">
            <h1 class="headerTitle">Home</h1>
        </div>
        <div class="content">
            <h1 class="contentTitle">Welcome to the community server of yoltronz!</h1>

        </div>
    </div>
</template>

<style scoped lang="scss">

.container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.header{
    position: fixed;
    top: 0px;
    height: 70px;
    width: 100%;
}

.headerTitle{
    position: fixed;
    top: 10px;
    width: fit-content;
    height: fit-content;
    right: 3%;
}

.content{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

}

.contentTitle{
    position: fixed;
    top: 80px;
    right: 5%;
    margin-left: 20px;
}

</style>