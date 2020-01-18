<template>
    <div class="calls">
        <div class="top">
            <div class="krug row"></div>

            <div v-if="show == 'Customer'" class="row options">
                <div class="col selected" style="font-size: 23px" v-on:click="show = 'Customer'">Customer</div>
                <div class="col stroke" style="font-size: 15px" v-on:click="show = 'Staff'">Staff</div>
            </div>
            <div v-else class="row options">
                <div class="col stroke" style="font-size: 15px" v-on:click="show = 'Customer'">Customer</div>
                <div class="col selected" style="font-size: 23px" v-on:click="show = 'Staff'">Staff</div>
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
                show: "Customer",
                call_state: ['Available', 'Finished'],
            }
        },
        computed: {
            filtered_cards(){
                if(this.show == "Customer")
                    //Vrati pozive musterije koje odgovaraju trenutno odabranom stanju
                    return store.call_cards.filter(card => card.call_state == this.call_state[this.i])
                else if(this.show == "Staff")
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
            }
        },
        components: {
            callCard
        },
    }
</script>

<style scoped>
    .top{
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image: url("/restoran.jpg");    
    }
    .krug{
        background-size: 100% 100%; 
        background-repeat: no-repeat;
        background-image: url('/waiter_krug.jpg');
    }
    .title{
        text-align: center;
    }
    .title > div{
        display: inline-block;
    }

    .calls{
        text-align: center;
    }
    .main{
        text-align: center;
    }
</style>