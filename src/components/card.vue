<template>
    <div class="container mt-1">
        <div class="row">
            <!--Ako trenutni korisnik nije musterija ILI konobar I ako trenutna stranica NIJE order_info-->
            <div v-if="this.position == 'Waiter' || this.position == 'Table' && this.$router.currentRoute.name != 'order_info'"  class="col-2" style="text-align:center">
                <i class="fas fa-chevron-up" v-on:click="info.counter = increase(info.counter)"></i>
                <div>{{info.counter}}</div> 
                <i class="fas fa-chevron-down" v-on:click="info.counter = decrease(info.counter)"></i>
            </div>

            <div v-else class="col-2" style="text-align:center">
                <div class="counter">{{info.counter}}</div> 
            </div>

            <router-link class="col-10 row" v-bind:to="'/food_info/' + info.id">
                <div class="col-3 prod_img" :style="{ backgroundImage: `url(${info.url})`}" style="background-size:contain; background-repeat:no-repeat; " ></div>

                <div class="col-9 details">
                    <h6 style="margin: 8px 0 0 0">{{info.title}}</h6>
                    <hr/>
                    <h6>{{"Times ordered: " + info.times_ordered}}</h6>
                    
                </div>
            </router-link>    

        </div>
    </div> 
</template>

<script>
    import store from '@/store.js'

    export default {
        props: ['info'],
        data(){
            return store;
        },
        methods:{
            increase(counter){
                if(counter < 20){
                    counter += 1;
                    store.cards.filter(card => card.id == this.info.id).counter = counter;
                }
                return counter
            },
            decrease(counter){
                if(counter > 0){
                    counter -= 1;
                    store.cards.filter(card => card.id == this.info.id).counter = counter;
                }
                return counter
            }
        }
    }
    
</script>

<style scoped>
    .container{
        height: 72px;
        
        border-radius: 10px;
        border: 2px rgba(245, 166, 35, 0.7) solid;

        overflow: hidden;
    }

    .prod_img{
        width: 75px;
        height: auto;
        background-size: cover;
    }
    
    .details{
        position: relative;
        top: 2px;

        text-align: left;
        font-size: 7px;
    }
    hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px rgba(245, 166, 35, 0.7) solid;
        margin: 1em 0;
        padding: 0;
    }
    .counter{
        height: 75px;
        line-height: 75px;

        font-size: 30px;
    }

    router-link{
        background: blue;
    }
</style>