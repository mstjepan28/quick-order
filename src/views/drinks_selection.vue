<template>
    <div>
        <div class="top">
            <div class="krug"><h3 class="top_title">Drinks</h3></div>        
        </div>
        <div class="main">
            <div class="title stroke">
                <div v-on:click="previous"><i class="fas fa-arrow-left"></i></div>
                {{this.drink_options[this.i]}}
                <div v-on:click="next"><i class="fas fa-arrow-right"></i></div>
            </div>
            <FoodCard v-bind:key="card.id" v-bind:info="card" v-for="card in filtered_cards" />
        </div>
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
                return store.cards.filter(card => card.category == this.drink_options[this.i] && this.store.show_product(card));
            }
        },
        name: 'drinks_selection',
        components: {
            FoodCard
        }
    }
</script>

<style scoped>
    .top{
        height: 250px;

        background-image: url("/drinks2.jpg");
        background-size: cover;    
    }
    .krug{
        background-image: url("/drinks4.jpg" );
        background-size: cover;
        
    }
    .main{
        text-align: center;
    }
    .title > div{
        display: inline-block;
    }
</style>