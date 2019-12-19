<template>
    <div class="most_ordered">
        <div class="top">
            <div class="krug" style="background-image: url('/most_ordered.png');"></div>
            <h3 class="top_title">Orders</h3>
        </div>

        <div class="main">
            <div class="title stroke">
                <div v-on:click="previous"><i class="fas fa-arrow-left"></i></div>
                {{this.order_state[this.i]}}
                <div v-on:click="next"><i class="fas fa-arrow-right"></i></div>
            </div>
            <OrderCard v-bind:key="card.id" v-bind:info="card" v-for="card in filtered_cards" />            
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
                order_state: store.order_state,
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
                return this.store.order_cards.filter(card => card.order_state == this.order_state[this.i]);  
            }
        },
        mounted(){
            //data_fetched sprijecava da se podaci dvaput povuku, jer se to dogada iz nekog razloga
            if(!this.store.data_fetched){
                //Ako je prijavljen kuhar dohvati narudzbe za hranu
                if(this.store.position == 'chef'){
                    console.log("food");
                    db.collection("orders_food").orderBy("time").limit(30).onSnapshot(snapshot => {
                        snapshot.docChanges().forEach(change => {
                            if (change.type === "added"){
                                const data = change.doc.data()
                                this.store.order_cards.push({
                                    id: change.doc.id,
                                    table: data.table,
                                    order_state: data.order_state,
                                    note: data.note,
                                    date: data.date,
                                    time: data.time,
                                    order: data.order,
                                    selected_by: data.selected_by
                                })
                            }
                        });
                    });                      
                }
                //U suprotnom, ako je prijavljen barmen dohvati narudzbe za pice
                //else if jer kad se stranica refresha dok je 'order' otvoren position se resetira na resetira i izvodi se kod unutar else-a
                else if(this.store.position == 'barman'){
                    console.log("drinks");
                    db.collection("orders_drinks").orderBy("time").limit(30).onSnapshot(snapshot => {
                        snapshot.docChanges().forEach(change => {
                            if (change.type === "added"){
                                const data = change.doc.data()
                                this.store.order_cards.push({
                                    id: change.doc.id,
                                    table: data.table,
                                    order_state: data.order_state,
                                    note: data.note,
                                    date: data.date,
                                    time: data.time,
                                    order: data.order,
                                    selected_by: data.selected_by
                                })
                            }
                        });
                    }); 
                }
                this.store.data_fetched = true;
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
    .title{
        margin: 20px 0 20px 0;

        font-size: 30px;
        text-decoration: underline;
    }
    .title > div{
        display: inline-block;
    }
</style>