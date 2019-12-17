<template>
    <div>
        <!--Accept/Finish-Orders------------------------------------------>
        <div class="modal fade" id="finished_confirmation" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document" >
                
                <div class="modal-content stroke" style="background: #343434; border: 2px rgba(245, 166, 35, 0.7) solid; text-align: center; border-radius: 40px;">
                
                    <div class="modal-body" style="font-size: 30px;">
                        Order marked as finished!
                        <hr/>
                        <div data-dismiss="modal">Ok</div>
                    </div>                
                </div>

            </div>
        </div>
        <div class="modal fade" id="accept_confirmation" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document" >
                
                <div class="modal-content stroke" style="background: #343434; border: 2px rgba(245, 166, 35, 0.7) solid; text-align: center; border-radius: 40px;">
                
                    <div class="modal-body" style="font-size: 30px;">
                        Order successfully accepted!
                        <hr/>
                        <div data-dismiss="modal">Ok</div>
                    </div>

                </div>

            </div>
        </div>
        <div class="modal fade" id="finish_the_order" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document" >
                
                <div class="modal-content stroke" style="background: #343434; border: 2px rgba(245, 166, 35, 0.7) solid; text-align: center; border-radius: 40px;">
                
                <div class="modal-header" style="text-align: center; margin: auto; border-style:none; padding-bottom: 0;">
                    <h2 class="modal-title" id="exampleModalLongTitle" style="display: inline-block">Order confirmation</h2>
                </div>

                <div class="modal-body" style="font-size: 30px;">
                    <hr/>
                    Do you want to finish this order?
                    <hr/>
                </div>

                <div class="modal-footer" style="text-align: center; width: 100%; border-style:none; padding-top:0">
                    <div v-on:click="finish_order" style="display: inline-block; font-size: 40px; width: 50%; color: green" data-dismiss="modal" data-toggle="modal" data-target="#finished_confirmation"><i class="fas fa-check"></i></div>
                    <div style="display: inline-block; font-size: 40px; width: 50%; color: red"  data-dismiss="modal"><i class="fas fa-times"></i></div>  
                 </div>
                
                </div>

            </div>
        </div>
        <div class="modal fade" id="accept_the_order" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document" >
                
                <div class="modal-content stroke" style="background: #343434; border: 2px rgba(245, 166, 35, 0.7) solid; text-align: center; border-radius: 40px;">
                
                <div class="modal-header" style="text-align: center; margin: auto; border-style:none; padding-bottom: 0;">
                    <h2 class="modal-title" id="exampleModalLongTitle" style="display: inline-block">Order confirmation</h2>
                </div>

                <div class="modal-body" style="font-size: 30px;">
                    <hr/>
                    Do you want to accept this order?
                    <hr/>
                </div>

                <div class="modal-footer" style="text-align: center; width: 100%; border-style:none; padding-top:0">
                    <div v-on:click="accept_order" style="display: inline-block; font-size: 40px; width: 50%; color: green" data-dismiss="modal" data-toggle="modal" data-target="#accept_confirmation"><i class="fas fa-check"></i></div>
                    <div style="display: inline-block; font-size: 40px; width: 50%; color: red"  data-dismiss="modal"><i class="fas fa-times"></i></div>  
                 </div>
                
                </div>

            </div>
        </div>
        <!---------------------------------------------------------------->
        <div class="top">
            <h3>Order for Table#1</h3>
        </div>

        <div class="main">
            <h3 class="underline stroke">Note</h3>
            <textarea class="note" disabled v-model="this.order_info.note"></textarea>

            <h3 class="underline stroke">Orders</h3>
            <FoodCard v-bind:key="card.id" v-bind:info="card" v-for="card in order_info.order" />
        </div>

        <div class="bottom_buttons">
            <button v-if="this.order_info.order_state == 'Available'"      type="button" class="accept_button stroke" data-toggle="modal" data-target="#accept_the_order">Accept this order</button>
            <button v-if="this.order_info.order_state == 'Being prepared'" type="button" class="finish_button stroke" data-toggle="modal" data-target="#finish_the_order">Mark as finished</button>
        </div>
    </div>
</template> 

<script>
    import FoodCard from '@/components/card.vue'
    import store from '@/store.js'

    export default {
        
        data(){
            return{
                id: this.$route.params.id,
                order_info: {},
            }
        },
        methods:{
            accept_order(){
                this.order_info.order_state = 'Being prepared';
                db.collection("orders").doc(this.order_info.id).set({
                    order_state: 'Being prepared'
                }, { merge: true });    
            },
            finish_order(){
                this.order_info.order_state = 'Finished';
                db.collection("orders").doc(this.order_info.id).set({
                    order_state: 'Finished'
                }, { merge: true });     
            }
        },
        computed:{
            filtered_cards(){
                if(store.position == "chef")
                    return this.order_info.order_cards.filter(card => card.type == "food");
                else if(store.position == "barman")
                    return this.order_info.order_cards.filter(card => card.type == "drinks");
            }
        },
        mounted(){
            this.order_info = store.order_cards.filter(card => card.id == this.id)[0];
        },
        name: 'order_info',
        components: {
            FoodCard
        }
        
    }
</script>

<style scoped>
    .top{
        width: 100%;        
        height: 75px;

        text-align: center;
    }
    .top > h3{
        line-height: 75px;
        display: inline-block;

        margin: 25px 0 0 0;

        color: rgba(245, 166, 35, 0.7);;
    }
    .underline{
        margin: 0 0 25px 0;
    }
    .accept_button{
        width: 100%;
        top: 90%;
        position: fixed;

        font-size: 35px;
        line-height: 75px;

        color: white;
        border: none;
        background: rgba(25, 187, 0, 0.8);
    }
    .finish_button{
        width: 100%;
        top: 90%;
        position: fixed;

        font-size: 35px;
        line-height: 75px;

        color: white;
        border: none;
        background: rgba(187, 0, 0, 0.8);
    }
    .orders{
        text-align: center;
    }
    FoodCard{
        display: inline-block;
        margin-top: 20px;
    }
    .note{
        width: 97%;
        height: 125px;

        padding-left: 0px;

        text-align: left;
        display: inline-block;
        resize: none;

        color: #aaaaaa;
        border-radius: 5px;

        background: white;
    }
</style>