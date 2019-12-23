<template>
    <div class="products">
        <div class="top">
            <div class="container">

                <div class="row"> 
                    <div class="col">
                        <div class="krug stroke"></div>
                    </div>
                </div>

                <div class="row food_drinks stroke">
                    <div class="col">
                        <div v-on:click="change_show">Food</div>
                    </div>
                    <div class="col">
                        <div v-on:click="change_show">Drinks</div>
                    </div>
                </div>

            </div>
        </div>
        

        <div class="main">
            <FoodCard v-bind:key="card.id" v-bind:info="card" v-for="card in filtered_cards" />
        </div>

        <div class="bottom_buttons">
            <router-link to="/add_product" class="call call_only stroke">Add new</router-link>
        </div>
    </div>
</template>

<script>
    import FoodCard from '@/components/card.vue'
    import store from '@/store.js'

    export default {
        data(){
            return{
                show: 'food',
                store
            }
        },
        methods:{
            change_show(){
                if(this.show == 'food')
                    this.show = 'drinks'
                else 
                    this.show = 'food'
            }
        },
        computed:{
            filtered_cards(){
                return this.store.cards.filter(card => card.type == this.show);
            }
        },
        components: {
            FoodCard
        }      
    }
</script>

<style scoped>
    .row{
        height:240px;
    }
    .top{
        height: 250px;
        width: 100%;
        background-image: url("/food.jpg");
        background-size: cover;
        margin-bottom: 10px;
    }
    .col > h3{
        display: inline-block;
        
        position: relative;
        top: 80px;

        font-size: 30px;
        text-decoration: underline;
    }
    .krug{
        width: 175px;
        height: 175px;

        background-image: url("/most_ordered.png");
    }
    a:hover{
        text-decoration: none;
        color: white;
    }
    .food_drinks{
        width: 100%;

        position: relative;
        top: -35px;

        font-size: 30px;
    }
</style>