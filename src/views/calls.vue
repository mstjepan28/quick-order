<template>
    <div class="calls">
        <div class="top">
            <div class="krug"></div>
            <h3>Calls</h3>
        </div>
        
        <div class="title stroke">
            <div v-on:click="previous"><i class="fas fa-arrow-left"></i></div>
            {{this.call_state[this.i]}}
            <div v-on:click="next"><i class="fas fa-arrow-right"></i></div>
        </div>

        <div class="call_cards">
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
                return store.call_cards.filter(card => card.call_state == this.call_state[this.i])
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
            }
        },
        mounted(){
            if(!store.data_fetched){
                db.collection("waiter_calls").orderBy("time").limit(30).onSnapshot(snapshot => {
                    snapshot.docChanges().forEach(change => {
                        if (change.type === "added"){
                        const data = change.doc.data()
                        store.call_cards.unshift({
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
    .top{
        background-size: cover;
        background-image: url('/my_order.jpg');
    }
    .top > h3{
        font-size: 40px;
        text-decoration: underline;

        background: rgba(245, 166, 35, 0.7);
    }    
    .krug{
        background-image: url('/call1.jpg');
        background-size: cover;
    }
    .call_cards{
        width: 350px;

        display: inline-block;
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