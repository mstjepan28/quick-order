<template>
    <div class="drinks">

        <div class="call stroke">
            Call the waiter
        </div>

        <div class="top">
            <div class="krug"></div>
            <h3>Drinks</h3>
        </div>
            
        <div class="options">
        <router-view/>
        </div>

    </div>
</template>


<style scoped>
    .top > h3{
        position: relative;
        top: -45px;

        font-size: 40px;
        text-decoration: underline;

        background: rgba(245, 166, 35, 0.7);
    }
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
        margin: 40px 0 75px 0;
    }
    .call{
        z-index: 1000;
        width: 100%;
        margin: 0 0 0 0;
    }
    .krug{
        width: 225px;
        height: 225px;

        margin: 10px 0 0 0;

        background-image: url("/food.jpg");
        background-size: cover;
        border: 3px rgba(245, 166, 35, 0.7) solid; 
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
    .options{
        margin-bottom: 75px;
    }
</style>