<template>
    <div class="dessert">
        <div class="title stroke">
            <router-link to="m_course"><i class="fas fa-arrow-left"></i></router-link>
            Dessert
            <router-link to="appetizer"><i class="fas fa-arrow-right"></i></router-link>
        </div>
        <FoodCard v-bind:key="card.id" v-bind:info="card" v-for="card in filtered_cards" />
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
            filtered_cards(){
                return this.cards.filter(card => card.category == "dessert");
            }
        },
        name: 'dessert',
        components: {
            FoodCard
        }
    }
</script>

<style scoped>
    .title{
        margin: 20px 0 0 0;

        font-size: 30px;
        text-decoration: underline;
    }
</style>