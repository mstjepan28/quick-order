<template>
    <div class="drinks_selection">
        <div class="title stroke">
            <div v-on:click="previous"><i class="fas fa-arrow-left"></i></div>
            {{this.drink_options[this.i]}}
            <div v-on:click="next"><i class="fas fa-arrow-right"></i></div>
        </div>
        <FoodCard v-bind:key="card.id" v-bind:info="card" v-for="card in filtered_cards" />
    </div>
</template>

<script>
    import FoodCard from '@/components/card.vue'
    import store from '@/store.js'

    export default {
        data(){
            return{
                i: parseInt(this.$route.params.i, 10),
                drink_options: store.drink_options,
                store
            }
        },
        methods:{
            next(){
                this.i += 1;
                if(this.i >= this.drink_options.length) this.i = 0;
            },
            previous(){
                this.i -= 1;
                if(this.i < 0) this.i = this.drink_options.length - 1;
            }
        },
        computed:{
            filtered_cards(){
                return store.cards.filter(card => card.category == this.drink_options[this.i]);
            }
        },
        name: 'drinks_selection',
        components: {
            FoodCard
        }
    }
</script>

<style scoped>
    .title{
        margin: 20px 0 20px 0;

        font-size: 30px;
        text-decoration: underline;
    }
    .title > div{
        display: inline-block;
    }
</style>