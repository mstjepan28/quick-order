<template>
    <div class="most_ordered">
        <div class="top">
            <div class="krug" style="background-image: url('/voce.jpg'); background-repeat: no-repeat; background-size:100% 100%; "></div>
            <h3 class="top_title">Orders</h3>
        </div>
        
        
        <!--Ako je ulogiran menadzer prikazi sve narudzbe-->
        <div class="main">
            <OrderCard v-bind:key="card.id" v-bind:info="card" v-for="card in filtered_cards" />
        </div>

    </div>
</template> 

<script>
    import OrderCard from '@/components/order_card.vue'
    import store from '@/store.js'

    export default {
        data(){
            return{

                store
            }
        },
        computed:{
            filtered_cards(){
               // return this.store.order_cards.filter(card => card.table == this.store.table);
               return this.store.order_cards;
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
        background-image: url("/jabuke.jpg");
        background-repeat: no-repeat; 
        background-size:100% 100%;
        margin-bottom: 10px;
    }
    .main{
        text-align: center;
    }
    .title > div{
        display: inline-block;
    }
</style>