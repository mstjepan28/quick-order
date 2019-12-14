<template>
    <div class="order_cards">
        <OrderCard v-bind:key="card.id" v-bind:info="card" v-for="card in filtered_cards" />
    </div>
</template>

<script>
    import OrderCard from '@/components/order_card.vue'
    import store from '@/store.js'

    export default {
        data(){
            return store;
        },
        computed:{
            filtered_cards(){
                return this.order_cards.filter(card => card.id == 3 || card.id == 4);
            }
        },
        name: 'being_prepared',
        components: {
            OrderCard
        }
    }
</script>

<style scoped>
    .title{
        margin: 20px 0 20px 0;

        font-size: 30px;
        text-decoration: underline;
    }
    .order_cards{
        width: 350px;

        display: inline-block;
    }
</style>