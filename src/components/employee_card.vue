<template>
    <div class="container mt-1">
        <div class="row">
            <router-link v-bind:to="'/employee_info/' + info.id" class="col-6 prod_img"  :style="{ backgroundImage: `url(${info.photo_url})`}" ></router-link>
            
            <div class="col-6 details">
                <h6 style="margin: 8px 0 0 0">{{info.full_name}}</h6>
                <hr/>
                <h6>{{info.position}}</h6>
            </div>
            
        </div>
    </div> 
</template>

<script>
    import store from '@/store.js'

    export default {
        props: ['info'],
    }
    
</script>

<style scoped>
    .container{
        height: 75px;
        
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
    .counter{
        height: 75px;
        line-height: 75px;

        font-size: 30px;
    }

    router-link{
        background: blue;
    }
</style>