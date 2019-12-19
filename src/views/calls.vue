<template>
    <div class="calls">
        <div class="top">
            <div class="container">

                <div class="row"> 
                    <div class="col">
                        <div class="krug stroke"></div>
                    </div>

                    <div class="col stroke">
                        <h3>Calls</h3>
                    </div>
                </div>

                <div class="call_options stroke">
                    <div v-on:click="show_calls('Customer')">Customer</div>
                    <div v-on:click="show_calls('Staff')" >Staff</div>
                </div>

            </div>
        </div>    

        <div class="main">
            <div class="title stroke">
                <div v-on:click="previous"><i class="fas fa-arrow-left"></i></div>
                {{this.call_state[this.i]}}
                <div v-on:click="next"><i class="fas fa-arrow-right"></i></div>
            </div>
            <callCard v-bind:key="call_cards.id" v-bind:info="call_cards" v-for="call_cards in filtered_cards" />                    
        </div>


    </div>
</template>

<script>
    import callCard from '@/components/call_card.vue'
    import store from '@/store.js'

    export default {
        data(){
            return{
                store,
                i: 0,
                call_state: ['Available', 'Finished'],
            }
        },
        computed: {
            filtered_cards(){
                if(this.store.show_who == "Customer")
                    return store.call_cards.filter(card => card.call_state == this.call_state[this.i])
                else if(this.store.show_who == "Staff")
                    return store.call_cards_staff.filter(card => card.call_state == this.call_state[this.i] && card.order_state == 'Finished')
            },
        },
        methods:{
            next(){
                this.i += 1;
                if(this.i >= this.call_state.length) this.i = 0;
            },
            previous(){
                this.i -= 1;
                if(this.i < 0) this.i = this.call_state.length - 1;
            },
            show_calls(show_who){
                this.store.show_who = show_who;
            },
        },
        mounted(){
            if(!store.data_fetched){
                db.collection("waiter_calls").orderBy("time").limit(30).onSnapshot(snapshot => {
                    snapshot.docChanges().forEach(change => {
                        if (change.type === "added"){
                            const data = change.doc.data()
                            store.call_cards.push({
                                id: change.doc.id,
                                table: data.table,
                                request: data.request, 
                                date: data.date,
                                time: data.time,
                                call_state: data.call_state,           
                            })
                        }
                    });
                });
                db.collection("orders_food").orderBy("time").limit(30).onSnapshot(snapshot => {
                    snapshot.docChanges().forEach(change => {
                        if (change.type === "added"){
                            const data = change.doc.data()
                            this.store.call_cards_staff.push({
                                id: change.doc.id,
                                table: data.table,
                                order_state: data.order_state,
                                call_state: data.call_state,
                                note: data.note,
                                date: data.date,
                                time: data.time,
                                order: data.order,           
                            })
                        }
                    });
                });
                db.collection("orders_drinks").orderBy("time").limit(30).onSnapshot(snapshot => {
                    snapshot.docChanges().forEach(change => {
                        if (change.type === "added"){
                            const data = change.doc.data()
                            this.store.call_cards_staff.push({
                                id: change.doc.id,
                                table: data.table,
                                order_state: data.order_state,
                                call_state: data.call_state,
                                note: data.note,
                                date: data.date,
                                time: data.time,
                                order: data.order,           
                            })
                        }
                    });
                });                    
                store.data_fetched = true;
            }

        },
        name: 'calls',
        components: {
            callCard
        },
    }
</script>

<style scoped>
    .calls{
        text-align: center;
    }
    .container, .col{
        height: 250px;
    }
    .call_options{
        width: 100%;

        position: relative;
        top: -35px;

        font-size: 30px;
    }
    .call_options > div{
        display: inline-block;
        width: 50%;
    }
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
        background-size: cover;
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