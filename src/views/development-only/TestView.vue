<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="header">
            <h1 class="headerTitle">Contact</h1>
        </div>
        <div class="content">
            <h1 class="contentTitle">Contact info</h1>


            <div class="discord">
                <div class="element1">
                    <h1>General Info: <br></h1>
                    <p>Discord: tastypommeslul <br></p>
                    <a href="mailto: tastypommeslul.contact@gmail.com"><p>Email</p></a>

                    <a href="https://discord.com/invite/una879y7cn"><p>Discord Server</p></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.container{
    position: absolute;
    left: 50%;
    width: 50px;
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
    .discord{
        position: fixed;
        top: 13%;
        right: 46.5%;
        .element1{
            text-align: center;
            color: black;
            padding: 7px;
            width: 256px;
            height: max-content ;
            background-color: #bababa;
            border-style: solid;
            border-radius: 5px;
            border-width: 3.5px;
            border-color: black;
        }
        p{
            margin-top: 15px;
            scale: 1.5;
        }
    }
}

.contentTitle{
    position: fixed;
    top: 7%;
    right: 49%;
    margin-left: 20px;
    scale: 1.4;
}

</style>
