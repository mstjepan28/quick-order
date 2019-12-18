<template>
    <div class="call_card">
        <!--Call-the-Waiter--------------------------------------------------->
        <div class="modal fade" id="customer_call_confirmation" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document" >
                
                <div class="modal-content stroke" style="background: #343434; border: 2px rgba(245, 166, 35, 0.7) solid; text-align: center; border-radius: 40px;">
                
                <div class="modal-body" style="font-size: 30px; padding-bottom: 0">
                    Call marked as finished!
                    <hr/>
                    <div data-dismiss="modal">Ok</div>
                </div>
                
                </div>

            </div>
        </div>
        <div class="modal fade" id="customer_call" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document" >
                
                <div class="modal-content stroke" style="background: #343434; border: 2px rgba(245, 166, 35, 0.7) solid; text-align: center; border-radius: 40px;">
                
                <div class="modal-header" style="text-align: center; margin: auto; border-style:none; padding-bottom: 0;">
                    <h2 class="modal-title" id="exampleModalLongTitle" style="display: inline-block">Order confirmation</h2>
                </div>

                <div v-if="this.info.call_state == 'Available'" class="modal-body" style="font-size: 30px;">
                    <hr/>
                    Do you want to mark this call as finished?
                    <hr/>
                </div>
                <div v-else class="modal-body" style="font-size: 30px;">
                    <hr/>
                    Do you want to mark this call as available?
                    <hr/>
                </div>

                <div class="modal-footer" style="text-align: center; width: 100%; border-style:none; padding-top:0">
                    <div v-if="this.info.call_state == 'Available'" v-on:click="mark_as_finished" style="display: inline-block; font-size: 40px; width: 50%; color: green" data-dismiss="modal" data-toggle="modal" data-target="#order_confirmation"><i class="fas fa-check"></i></div>
                    <div v-else v-on:click="mark_as_available" style="display: inline-block; font-size: 40px; width: 50%; color: green" data-dismiss="modal" data-toggle="modal" data-target="#order_confirmation"><i class="fas fa-check"></i></div>
                    <div style="display: inline-block; font-size: 40px; width: 50%; color: red"  data-dismiss="modal"><i class="fas fa-times"></i></div>  
                 </div>
                
                </div>

            </div>
        </div>

        <div class="stroke" data-toggle="modal" data-target="#customer_call">
            Table #1
            <hr/>
            <div v-if="info.request != undefined">{{info.request}}</div>
            <div v-else>Order</div>            
            <hr/>
            {{info.time + " " + info.date}}
        </div>
    </div>
</template>

<script>
    
    export default {
        props: ['info'],
        methods: {
            mark_as_finished(){
                this.info.call_state = 'Finished';
                if(info.request != undefined){
                    db.collection("waiter_calls").doc(this.info.id).set({
                        call_state: 'Finished'
                    }, { merge: true });                        
                }
                else{
                     db.collection("orders").doc(this.info.id).set({
                        call_state: 'Finished'
                    }, { merge: true });                        
                }    
            },
            mark_as_available(){
                this.info.call_state = 'Available';
                if(info.request != undefined){
                    db.collection("waiter_calls").doc(this.info.id).set({
                        call_state: 'Available'
                    }, { merge: true });                        
                }
                else{
                     db.collection("orders").doc(this.info.id).set({
                        call_state: 'Available'
                    }, { merge: true });                        
                }                  
            }
        },
    }
</script>

<style scoped>
    .call_card{
        height: 150px;
        width: 150px;

        display: inline-block;
        margin: 10px;

        font-size: 15px;

        border-radius: 20px;
        border: 2px rgba(245, 166, 35, 0.7) solid; 

        background: #343434;
    }
</style>