<template>
    <div>
        <div class="top">
            <div class="krug" style="background-image: url('/most_ordered.png');"></div>
            <h3 class="top_title">Orders</h3>
        </div>

        <div class="main">
            <OrderCard v-bind:key="card.id" v-bind:info="card" v-for="card in order_cards" />
        </div>
    </div>
</template>

<script>
    import OrderCard from '@/components/order_card.vue'
    import store from '@/store.js'

    export default {
        data(){
            return{
                store,
                order_cards: store.order_cards,
            }
        },
        components: {
            OrderCard
        }                
    }
</script>

<style scoped>
    .top{
        height: 250px;
        width: 100%;
        background-image: url("/food.jpg");
        background-size: cover;
        margin-bottom: 10px;
    }
    .main{
        text-align: center;
    }
    .title > div{
        display: inline-block;
    }
</style>