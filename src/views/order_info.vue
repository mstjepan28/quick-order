<template>
    <div v-if="order_info">
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
        <!--Placanje------------------------------------------------------>
        <div class="modal fade" id="payment_confirmation" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document" >
                
                <div class="modal-content stroke" style="background: #343434; border: 2px rgba(245, 166, 35, 0.7) solid; text-align: center; border-radius: 40px;">
                
                    <div class="modal-body" style="font-size: 30px;">
                        Order marked as paid!
                        <hr/>
                        <div data-dismiss="modal">Ok</div>
                    </div>                
                </div>

            </div>
        </div>
        <div class="modal fade" id="mark_as_paid" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document" >
                
                <div class="modal-content stroke" style="background: #343434; border: 2px rgba(245, 166, 35, 0.7) solid; text-align: center; border-radius: 40px;">
                
                <div class="modal-header" style="text-align: center; margin: auto; border-style:none; padding-bottom: 0;">
                    <h2 class="modal-title" id="exampleModalLongTitle" style="display: inline-block">Order confirmation</h2>
                </div>

                <div class="modal-body" style="font-size: 30px;">
                    <hr/>
                    Mark this ordered as paid?
                    <hr/>
                </div>

                <div class="modal-footer" style="text-align: center; width: 100%; border-style:none; padding-top:0">
                    <div v-on:click="mark_as_paid" style="display: inline-block; font-size: 40px; width: 50%; color: green" data-dismiss="modal" data-toggle="modal" data-target="#payment_confirmation"><i class="fas fa-check"></i></div>
                    <div style="display: inline-block; font-size: 40px; width: 50%; color: red"  data-dismiss="modal"><i class="fas fa-times"></i></div>  
                 </div>
                
                </div>

            </div>
        </div>

        <!--Top-koji-se-prikazuje-svima----------------------------------->
        <div class="top">
            <h3>Order for {{order_info.table}}</h3><br>

            <div v-if="store.position == 'Manager' || store.position == 'Table'" class="manager_info">
                <h5>Price:</h5> {{order_info.price}} <h5>$</h5><br>
                <h5>Date:</h5> {{order_info.date}} <h5>at</h5> {{order_info.time}}<br>
            </div>
        </div>
        <!--Kuhar-i-barmen------------------------------------------------>
        <div v-if="store.position == 'Chef' || store.position == 'Barman'" class="main">
            <h3 class="underline stroke">Note</h3>
            <textarea class="note" disabled v-model="order_info.note"></textarea>

            <h3 class="underline stroke">Orders</h3>
            <div v-if="store.position == 'Chef'"><FoodCard v-bind:key="card.id" v-bind:info="card" v-for="card in order_info.food.order" /></div>
            <div v-if="store.position == 'Barman'"><FoodCard  v-bind:key="card.id" v-bind:info="card" v-for="card in order_info.drinks.order" /></div>
        </div>
        <!--Menadzer------------------------------------------------------>
        <div v-if="store.position == 'Manager' || store.position == 'Waiter'" class="main">
            <div v-if="order_info.paid">
                <h3 class="underline stroke">The order has been paid for</h3>
            </div>
            <div v-else>
                <h3 class="underline stroke">The order has not been paid</h3>
            </div>
            <h3 class="underline stroke">Note</h3>
            <textarea class="note" disabled v-model="order_info.note"></textarea>
            
            <div v-if="order_info.food" class="mb-5">
                <h3 class="underline stroke">Food</h3>
                <h5>Selected by:</h5> {{order_info.food.selected_by}}<br>
                <h5>Order state:</h5> {{order_info.food.order_state}}<br>
                <h5>Finished at:</h5> {{order_info.food.finished_at}}<br>

                <h4 class="stroke">Order</h4>
                <FoodCard v-bind:key="card.id" v-bind:info="card" v-for="card in order_info.food.order" />
            </div>

            <div v-if="order_info.drinks" class="mb-5">
                <h3 class="underline stroke">Drinks</h3>
                <h5>Selected by:</h5> {{order_info.drinks.selected_by}}<br>
                <h5>Order state:</h5> {{order_info.drinks.order_state}}<br>
                <h5>Finished at:</h5> {{order_info.drinks.finished_at}}<br>

                <h4 class="stroke">Order</h4>
                <FoodCard v-bind:key="card.id" v-bind:info="card" v-for="card in order_info.drinks.order" />
            </div>

            
        </div>
        <!---------------------------------------------------------------->
        <div v-if="store.position == 'Table'" class="main">
            <h3 class="underline stroke">Note</h3>
            <textarea class="note" disabled v-model="order_info.note"></textarea>
            
            <div v-if="order_info.food" class="mb-5">
                <h3 class="underline stroke">Food</h3>
                <h5>Order status:</h5> {{order_info.food.order_status}}<br>
                <h5>Finished at:</h5> {{order_info.food.finished_at}}<br>

                <h4 class="stroke">Order</h4>
                <FoodCard v-bind:key="card.id" v-bind:info="card" v-for="card in order_info.food.order" />
            </div>

            <div v-if="order_info.drinks" class="mb-5">
                <h3 class="underline stroke">Drinks</h3>
                <h5>Order status:</h5> {{order_info.drinks.order_status}}<br>
                <h5>Finished at:</h5> {{order_info.drinks.finished_at}}<br>

                <h4 class="stroke">Order</h4>
                <FoodCard v-bind:key="card.id" v-bind:info="card" v-for="card in order_info.drinks.order" />
            </div>

            <div>
                <h3 class="underline stroke">Feedback:</h3>
                <textarea class="note" v-model="feedback"></textarea>
                <button v-on:click="send_feedback" type="button" class="send_feedback stroke">Send feedback</button>         
            </div>
        </div>

        <!--Prihvacanje i zavrsavanje narudzbe-->
        <div v-if="store.position == 'Chef' && order_info" class="bottom_buttons">
            <!--Ako je selected_by u narudzbi jednak onom trenutnog korisnika(pohranjen u store.js) dopusti da se narudzba oznaci kao zavrsena-->
            <button v-if="order_info.food.order_state == 'Available'" type="button" class="accept_button stroke" data-toggle="modal" data-target="#accept_the_order">Accept this order</button>           
            <button v-if="order_info.food.order_state == 'Being prepared' && store.userEmail == order_info.food.selected_by" type="button" class="finish_button stroke" data-toggle="modal" data-target="#finish_the_order">Mark as finished</button>
        </div>

        <div v-if="store.position == 'Barman' && order_info" class="bottom_buttons">
            <button v-if="order_info.drinks.order_state == 'Available'" type="button" class="accept_button stroke" data-toggle="modal" data-target="#accept_the_order">Accept this order</button>
            <button v-if="order_info.drinks.order_state == 'Being prepared' && store.userEmail == order_info.drinks.selected_by" type="button" class="finish_button stroke" data-toggle="modal" data-target="#finish_the_order">Mark as finished</button>
        </div>

        <div v-if="(store.position == 'Manager' || store.position == 'Waiter') && (order_info) && (order_info.paid == false)" class="bottom_buttons">
            <button type="button" class="accept_button stroke" data-toggle="modal" data-target="#mark_as_paid">Mark as paid</button>
        </div>

        <!--<div style="height: 150px; background: gray; widht: 100%;" v-on:click="change_uid">Izbrisi user Id iz store-a</div>-->
    </div>
</template> 

<script>
    import FoodCard from '@/components/card.vue'
    import store from '@/store.js'

    export default {
        data(){
            return{
                //order_info: false -> false samo zato da ne iskace greska
                //Pri ucitavanju view-a order_info bi bio undefined dok se ne izvede mounted() te false govori v-if da ne prikaze taj html
                //Kada se mounted() zavrsi, u order_info se sprema objekt te se prikazuje dosad 'skriven' html
                id: this.$route.params.id,
                order_info: false,
                feedback: '',
                store
            }
        },
        methods:{
            change_uid(){
                this.store.userEmail = ' ';
                console.log(order_info.selected_by)
                
            },
            accept_order(){
                //Update-amo lokalni objekt za narudzbu hrane/pica te ga spajamo sa onim na bazi 
                if(this.store.position == 'Chef'){
                    this.order_info.food.order_state = 'Being prepared';
                    this.order_info.food.order_status = 'Being prepared';
                    this.order_info.food.selected_by = this.store.userEmail;
                    
                    db.collection("orders").doc(this.order_info.id).update({
                        food: this.order_info.food
                    });                                        
                }
                else{
                    this.order_info.drinks.order_state = 'Being prepared';
                    this.order_info.drinks.order_status = 'Being prepared';
                    this.order_info.drinks.selected_by = this.store.userEmail;

                    db.collection("orders").doc(this.order_info.id).update({
                        drinks: this.order_info.drinks
                    });                              
                }

            },
            finish_order(){
                //Kada se narudzba zavrsi, na firebase-u i lokalno se update-a
                //Sprema se u novi collection koji obavjestava konobara da je narudzba obradena

                if(this.store.position == 'Chef'){
                    this.order_info.food.order_state = 'Finished';
                    this.order_info.food.order_status = 'Finished';
                    this.order_info.food.finished_at = store.current_time();
                    
                    db.collection("orders").doc(this.order_info.id).update({
                        food: this.order_info.food
                    });                                        
                }
                else{
                    this.order_info.drinks.order_state = 'Finished';
                    this.order_info.drinks.order_status = 'Finished';
                    this.order_info.drinks.finished_at = store.current_time();
                    
                    db.collection("orders").doc(this.order_info.id).update({
                        drinks: this.order_info.drinks
                    });                                        
                }                                   
                db.collection("staff_calls").add({
                    order_id: this.id,
                    table: this.order_info.table,
                    sent_by: this.store.position,
                    call_state: 'Available',
                    time: store.current_time(),
                    date: store.current_date()
                });                                             
                 
            },
            mark_as_paid(){
                db.collection('orders').doc(this.order_info.id).update({
                    paid: true
                })
            },
            send_feedback(){
                db.collection('orders').doc(this.order_info.id).update({
                    feedback: this.feedback,
                })                
            }
        },
        mounted(){
            //U order_info spremamo kartice iz order_cards(povukli smo ih iz baze u orders.vue)
            if(!this.order_info){
                let listener = db.collection("orders").onSnapshot(snapshot => {
                    snapshot.docChanges().forEach(change => {
                        if(change.type === "added" || change.type === "modified"){
                            const data = change.doc.data();
                            //Ako je id dokumenta jednak onom kojeg tražimo pohrani taj dokument
                            if(change.doc.id == this.id){
                                this.order_info = {
                                    id: change.doc.id,
                                    table: data.table,
                                    price: data.price,
                                    paid: data.paid,
                                    date: data.date,
                                    time: data.time,
                                    note: data.note,
                                    feedback: data.feedback,
                                    food: data.food,
                                    drinks: data.drinks
                                }                                  
                            }
                        }
                    });
                });
                store.listeners.push(listener);
            }
            
        },
        name: 'order_info',
        components: {
            FoodCard
        }
        
    }
</script>

<style scoped>
    h5{
        display: inline-block;
        color:rgba(245, 166, 35, 0.7);
    }
    .top{
        width: 100%;

        text-align: center;
    }
    .top > h3{
        display: inline-block;

        margin: 25px 0 0 0;

        color: rgba(245, 166, 35, 0.7);;
    }
    .underline{
        margin: 0 0 25px 0;
    }
    .manager_info{
        text-align: left;
        margin-left: 5%;
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
    .send_feedback{
        width: 100%;
        height: 50px;
        
        color: white;
        font-size: 30px;

        border:1px rgba(245, 166, 35, 0.7) solid;
        border-radius: 9px;

        background: rgba(187, 0, 0, 0.8);
    }
    .orders{
        text-align: center;
    }
    .note{
        width: 100%;
        height: 125px;

        padding-left: 0px;
        margin: 0 auto;

        text-align: left;
        display: inline-block;
        resize: none;

        color: #aaaaaa;
        border-radius: 5px;

        background: white;
    }
</style>