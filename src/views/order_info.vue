<template>
    <div class="orders">
        <textarea class="note" disabled>{{food_info.note}}</textarea>
        <FoodCard v-bind:key="card.id" v-bind:info="card" v-for="card in food_info.order" />
    </div>
</template>

<script>
    import FoodCard from '@/components/card.vue'
    import store from '@/store.js'

    export default {
        
        data(){
            return{
                id: this.$route.params.id,
                food_info: {},
            }
        },
        mounted(){
            this.food_info = store.order_cards.filter(card => card.id == this.id)[0];
        },
        name: 'order_info',
        components: {
            FoodCard
        }
        
    }
</script>

<style scoped>
    .orders{
        text-align: center;
    }
    FoodCard{
        display: inline-block;
        margin-top: 20px;
    }
    .note{
        width: 97%;
        height: 150px;

        margin: 25px 0 25px 0;
        padding-left: 0px;

        text-align: left;
        display: inline-block;
        resize: none;

        color: #aaaaaa;
        border-radius: 5px;

        background: white;
    }
</style>