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
        <!---------------------------------------------------------------->
        <div class="top">
            <h3>Order for {{order_info.table}}</h3><br>

            <div v-if="store.position == 'manager'" class="manager_info">
                <h5>Price:</h5> {{order_info.price}} <h5>$</h5><br>
                <h5>Date:</h5> {{order_info.date}} <h5>at</h5> {{order_info.time}}<br>
            </div>
        </div>
        <!---------------------------------------------------------------->
        <div v-if="store.position == 'chef' || store.position == 'barmen'" class="main">
            <h3 class="underline stroke">Note</h3>
            <textarea class="note" disabled v-model="order_info.note"></textarea>

            <h3 class="underline stroke">Orders</h3>
            <div v-if="store.position == 'chef'"><FoodCard v-bind:key="card.id" v-bind:info="card" v-for="card in order_info.food.order" /></div>
            <div v-if="store.position == 'barman'"><FoodCard  v-bind:key="card.id" v-bind:info="card" v-for="card in order_info.drinks.order" /></div>
        </div>
        <!---------------------------------------------------------------->
        <div v-if="store.position == 'manager'" class="main">
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
        <!--Prihvacanje i zavrsavanje narudzbe-->
        <div v-if="store.position == 'chef' && order_info" class="bottom_buttons">
            <!--Ako je selected_by u narudzbi jednak onom trenutnog korisnika(pohranjen u store.js) dopusti da se narudzba oznaci kao zavrsena-->
            <button v-if="order_info.food.order_state == 'Available'" type="button" class="accept_button stroke" data-toggle="modal" data-target="#accept_the_order">Accept this order</button>           
            <button v-if="order_info.food.order_state == 'Being prepared' && store.userId == order_info.food.selected_by" type="button" class="finish_button stroke" data-toggle="modal" data-target="#finish_the_order">Mark as finished</button>
        </div>

        <div v-if="store.position == 'barman' && order_info" class="bottom_buttons">
            <button v-if="order_info.drinks.order_state == 'Available'" type="button" class="accept_button stroke" data-toggle="modal" data-target="#accept_the_order">Accept this order</button>
            <button v-if="order_info.drinks.order_state == 'Being prepared' && store.userId == order_info.drinks.selected_by" type="button" class="finish_button stroke" data-toggle="modal" data-target="#finish_the_order">Mark as finished</button>
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
                store
            }
        },
        methods:{
            change_uid(){
                this.store.userId = ' ';
                console.log(order_info.selected_by)
                
            },
            accept_order(){
                //Update-amo lokalni objekt za narudzbu hrane/pica te ga spajamo sa onim na bazi 
                if(this.store.position == 'chef'){
                    this.order_info.food.order_state = 'Being prepared';
                    this.order_info.food.selected_by = this.store.userId;
                    
                    db.collection("orders").doc(this.order_info.id).update({
                        food: this.order_info.food
                    });                                        
                }
                else{
                    this.order_info.drinks.order_state = 'Being prepared';
                    this.order_info.drinks.selected_by = this.store.userId;

                    db.collection("orders").doc(this.order_info.id).update({
                        drinks: this.order_info.drinks
                    });                              
                }

            },
            finish_order(){
                //Kada se narudzba zavrsi, na firebase-u i lokalno se update-a
                //Sprema se u novi collection koji obavjestava konobara da je narudzba obradena

                if(this.store.position == 'chef'){
                    this.order_info.food.order_state = 'Finished';
                    this.order_info.food.finished_at = store.current_time();
                    
                    db.collection("orders").doc(this.order_info.id).update({
                        food: this.order_info.food
                    });                                        
                }
                else{
                    this.order_info.drinks.order_state = 'Finished';
                    this.order_info.drinks.finished_at = store.current_time();
                    
                    db.collection("orders").doc(this.order_info.id).update({
                        drinks: this.order_info.drinks
                    });                                        
                }                                   
                db.collection("staff_calls").add({
                    table: "this.order_info.table",
                    sent_by: this.store.position,
                    call_state: 'Available',
                    time: store.current_time(),
                    date: store.current_date()
                });                                             
                 
            }
        },
        mounted(){
            //U order_info spremamo kartice iz order_cards(povukli smo ih iz baze u orders.vue)
            this.order_info = store.order_cards.filter(card => card.id == this.id)[0];
            console.log(this.order_info);
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