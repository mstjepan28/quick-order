<template>
    <div class="most_ordered">
        <div class="top">
            <div class="container">

                <div class="row"> 

                    <div class="col">
                        <div class="krug stroke"></div>
                    </div>

                    <div class="col stroke">
                        <h3>Most ordered</h3>
                    </div>
                </div>

                <div class="row Food_Drinks stroke">
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

    </div>
</template>

<script>
    import FoodCard from '@/components/card.vue'
    import store from '@/store.js'

    export default {
        data(){
            return{
                show: 'Food',
                store
            }
        },
        methods:{
            change_show(){
                if(this.show == 'Food')
                    this.show = 'Drinks'
                else 
                    this.show = 'Food'
            }
        },
        computed:{
            filtered_cards(){
                function compare(a, b){
                    return b.times_ordered - a.times_ordered;
                }

                let f_cards = this.store.cards.filter(card => card.type == this.show);

                return f_cards.sort(compare);
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
        background-image: url("/Food.jpg");
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
    .Food_Drinks{
        width: 100%;

        position: relative;
        top: -35px;

        font-size: 30px;
    }
</style>