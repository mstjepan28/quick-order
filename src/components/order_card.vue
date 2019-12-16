<template>
    <div class="call_card stroke">
        <router-link v-bind:to="'/order_info/' + info.id">
            <hr>Table #1<hr>Order<hr>
        </router-link>
    </div>
</template>

<script>
    
    export default {
        props: ['info'],
    }

</script>

<style scoped>
    .call_card{
        height: 150px;
        width: 150px;

        display: inline-block;
        margin: 10px;

        font-size: 15px;

        border-radius: 20px;
        border: 2px rgba(245, 166, 35, 0.7) solid; 

        background: #343434;
    }
</style>