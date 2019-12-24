<template>
    <div class="drinks">

        <div class="top">
            <div class="krug"></div>
            <h3 class="top_title">Drinks</h3>
        </div>
            
        <div>
            <router-view/>
        </div>

    </div>
</template>

<style scoped>
    .drinks{
        width: 100%;

        text-align: center;
        display: inline-block;
    }
    .top{
        height: 250px;

        background-image: url("/drinks2.jpg");
        background-size: cover;
        
    }
    .content{
        margin: 40px 0 0 0;
    }
    .krug{
        background-image: url("/food.jpg");
    }
    .content > h3{
        float: left;
    }
    .content > button{
        height: 85px;
        width: 90%;

        display: inline-block;

        font-size: 40px;
    }
</style>