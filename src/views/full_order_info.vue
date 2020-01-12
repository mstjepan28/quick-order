<template>
    <div>
        <div class="top">
            <h3>Order for {{}}</h3>
        </div>

        <div v-if="order_info" class="main">
            <h3 class="underline stroke">Note</h3>
            <textarea class="note" disabled v-model="order_info.note"></textarea>

            <h3 class="underline stroke">Food</h3>
            <FoodCard v-bind:key="card.id" v-bind:info="card" v-for="card in order_info.food.order" />

            <h3 class="underline stroke">Drinks</h3>
            <FoodCard  v-bind:key="card.id" v-bind:info="card" v-for="card in order_info.drinks.order" />
        </div>
    </div>
</template>

<script>
    import FoodCard from '@/components/card.vue'
    import store from '@/store.js'

    export default {
        data(){
            return{
                id: this.$route.params.id,
                order_info: false,
                store
            }
        },             
    }
</script>

<style scoped>
    .top{
        width: 100%;        
        height: 75px;

        text-align: center;
    }
    .top > h3{
        line-height: 75px;
        display: inline-block;

        margin: 25px 0 0 0;

        color: rgba(245, 166, 35, 0.7);;
    }
    .underline{
        margin: 0 0 25px 0;
    }
    .note{
        width: 100%;
        height: 125px;

        padding-left: 0px;
        margin: 0 auto;

        text-align: left;
        display: inline-block;
        resize: none;

        color: #aaaaaa;
        border-radius: 5px;

        background: white;
    }
</style>