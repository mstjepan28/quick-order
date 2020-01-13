<template>
    <div class="most_ordered">
        <div class="top">
            <div class="krug" style="background-image: url('/most_ordered.png');"></div>
            <h3 class="top_title">Orders</h3>
        </div>
        <!--Ako je ulogiran kuhar ili barmen pokazi filtrirane narudzbe i strelice za promjenu trenutnog prikaza-->
        <div v-if="store.position == 'chef' || store.position == 'barmen'" class="main">
            <div class="title stroke">
                <div v-on:click="previous"><i class="fas fa-arrow-left"></i></div>
                {{this.order_state[this.i]}}
                <div v-on:click="next"><i class="fas fa-arrow-right"></i></div>
            </div>
            <OrderCard v-bind:key="card.id" v-bind:info="card" v-for="card in filtered_cards" />
        </div>
        
        <!--Ako je ulogiran menadzer prikazi sve narudzbe-->
        <div v-else class="main">
            <OrderCard v-bind:key="card.id" v-bind:info="card" v-for="card in store.order_cards" />
        </div>

    </div>
</template> 

<script>
    import OrderCard from '@/components/order_card.vue'
    import store from '@/store.js'

    export default {
        data(){
            return{
                //parseInt('neki string', 'brojevni sustav')
                //i dobivamo kao string iz routera te ga moramo pretvoriti u int za daljne funkcije
                i: parseInt(this.$route.params.i, 10),
                order_state: ['Available', 'Being prepared', 'Finished'],
                store
            }
        },
        methods:{
            next(){
                this.i += 1;
                if(this.i >= this.order_state.length) this.i = 0;
            },
            previous(){
                this.i -= 1;
                if(this.i < 0) this.i = this.order_state.length - 1;
            }
        },
        computed:{
            filtered_cards(){
                //Vrati one kartice ciji order state odgovara onom kojeg smo odabrali izmedu ['Available', 'Being prepared', 'Finished']
                //Za barmena se vracaju samo pica dok se za kuhara vraca samo hrana
                if(this.store.position == 'chef')
                    return this.store.order_cards.filter(card => card.food.order_state == this.order_state[this.i]);
                else if(this.store.position == 'barman')
                    return this.store.order_cards.filter(card => card.drinks.order_state == this.order_state[this.i]);
            }
        },
        components: {
            OrderCard
        }
    }
</script>

<style scoped>
    .top{
        height: 250px;
        width: 100%;
        background-image: url("/food.jpg");
        background-size: cover;
        margin-bottom: 10px;
    }
    .main{
        text-align: center;
    }
    .title > div{
        display: inline-block;
    }
</style>