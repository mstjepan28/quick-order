<template>
    <div class="most_ordered_drinks">
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
                function compare(a, b){
                    return b.times_ordered - a.times_ordered;
                }

                let f_cards = this.cards.filter(card => card.type == "drinks");

                return f_cards.sort(compare);
            }
        },
        name: 'appetizer',
        components: {
            FoodCard
        }
    }
</script>

<style scoped>
</style>