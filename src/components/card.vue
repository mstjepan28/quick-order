<template>
    <div class="container">
        <div class="row">
            <div class="col-2">
                <i class="fas fa-chevron-up" v-on:click="info.counter += 1"></i>
                <div>{{info.counter}}</div> 
                <i class="fas fa-chevron-down" v-on:click="info.counter = decrease(info.counter)"></i>
            </div>

            <router-link to="/food_info" class="col-3 prod_img" :style="{ backgroundImage: `url(${info.url})`}" ></router-link>

            <div class="col-7 details">
                <h6>{{info.title}}</h6>
                <hr/>
                {{info.description}}
            </div>
            
        </div>
    </div> 
</template>

<script>

    export default {
        props: ['info'],
        methods:{
            decrease: function(counter){
                if(counter > 0){
                    counter -= 1;
                }
                return counter
            }
        }
    }
    
</script>

<style scoped>
    .container{
        height: 75px;
        width: 100%;

        display: inline-block;
        margin-top: -2px;
        
        border-radius: 10px;
        border: 2px rgba(245, 166, 35, 0.7) solid;

        overflow: hidden;
    }

    .prod_img{
        width: 75px;
        height: auto;
        background-size: cover;
    }
    
    .details{
        position: relative;
        top: 2px;

        text-align: left;
        font-size: 7px;
    }

    hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px rgba(245, 166, 35, 0.7) solid;
        margin: 1em 0;
        padding: 0;
    }

    router-link{
        background: blue;
    }
</style>