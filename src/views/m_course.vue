<template>
    <div class="m_course">
        <div class="title stroke">
            <router-link to="appetizer"><i class="fas fa-arrow-left"></i></router-link>
            Main course
            <router-link to="dessert"><i class="fas fa-arrow-right"></i></router-link>
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
                return this.cards.filter(card => card.category == "m_course");
            }
        },
        name: 'm_course',
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