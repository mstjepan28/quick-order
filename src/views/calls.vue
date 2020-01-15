<template>
    <div class="calls">
        <div class="top">
            <div class="container">

                <div class="row"> 
                    <div class="col">
                        <div class="krug stroke" style="background-image: url('/waiter_krug.jpg'); background-size: 100% 100%; background-repeat: no-repeat;"></div>
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
                show_who: "Customer",
                call_state: ['Available', 'Finished'],
            }
        },
        computed: {
            filtered_cards(){
                if(this.show_who == "Customer")
                    //Vrati pozive musterije koje odgovaraju trenutno odabranom stanju
                    return store.call_cards.filter(card => card.call_state == this.call_state[this.i])
                else if(this.show_who == "Staff")
                    //Vrati pozive osoblja za obradene nerudzbe koje odgovaraju trenutno odabranom stanju
                    return store.call_cards_staff.filter(card => card.call_state == this.call_state[this.i])
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
                this.show_who = show_who;
            },
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
        background-image: url("/restoran.jpg");
        background-repeat: no-repeat; 
        background-size:100% 100%;
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

        background-image: url("/konobar.jpg");
        background-repeat: no-repeat; 
        background-size:100% 100%;
    }


    .main{
        text-align: center;
    }
    .title > div{
        display: inline-block;
    }
</style>