<template>
    <div class="my_order">
        <div class="top">
            <div class="krug stroke"></div>
            <h3>My order</h3>
        </div>

        <form style="margin-top: 20px;">
            <h3 class="stroke">Note</h3>
            <textarea class="note"></textarea>
        </form>

        <div class="ordered">
            <FoodCard v-bind:key="card.id" v-bind:info="card" v-for="card in ordered" />
        </div>
    </div>
</template>

<script>
    import FoodCard from '@/components/card.vue'
    import store from '@/store.js'

    export default {
        data(){
            return store;
        },
        computed:{
            ordered(){
                return this.order.filter(card => card.counter > 0);
            }
        },
        name: 'my_order',
        components: {
            FoodCard
        }
    }
</script>

<style scoped>
    .top{
        height: 250px;

        background-image: url("/food.jpg");
        background-size: cover;
    }
    .top > h3{
        position: relative;
        top: -45px;

        font-size: 40px;
        text-decoration: underline;

        background: rgba(245, 166, 35, 0.7);
    }
    .krug{
        background-image: url("/my_order.jpg");
    }
    .note{
        width: 90%;
        height: 150px;

        resize: none;

        color: #aaaaaa;
        border-radius: 5px;
    }
    form > h3{
        float: left;

        margin: 0 0 0 10%;

        font-size: 35px;
    }
    .ordered{
        margin-bottom: 75px;
    }
</style>