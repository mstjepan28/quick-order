<template>
    <router-link v-bind:to="'/order_info/' + info.id" class="order_card stroke">
        {{info.table}}
        <hr/>
        Order
        <hr/>
        {{info.time + " " + info.date}}
    </router-link>
</template>

<script>
    import store from '@/store.js'

    export default {
        props: ['info'],
        data(){
            return store;
        }, 
    }

</script>

<style scoped>
    .order_card{
        height: 150px;
        width: 150px;

        display: inline-block;
        margin: 10px;

        font-size: 15px;
        font-weight: normal;
        font-style: normal;

        border-radius: 20px;
        border: 2px rgba(245, 166, 35, 0.7) solid; 

        background: #343434;
    }
</style>