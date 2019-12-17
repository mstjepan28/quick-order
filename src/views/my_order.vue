<template>
    <div class="my_order">
        <!--Place-Order--------------------------------------------------->
        <div class="modal fade" id="order_confirmation" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document" >
                
                <div class="modal-content stroke" style="background: #343434; border: 2px rgba(245, 166, 35, 0.7) solid; text-align: center; border-radius: 40px;">
                
                    <div class="modal-body" style="font-size: 30px;">
                        Your order has been sent!
                        <hr/>
                        <div data-dismiss="modal">Ok</div>
                    </div>
                
                </div>

            </div>
        </div>
        <div class="modal fade" id="place_order" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document" >
                
                <div class="modal-content stroke" style="background: #343434; border: 2px rgba(245, 166, 35, 0.7) solid; text-align: center; border-radius: 40px;">
                
                <div class="modal-header" style="text-align: center; margin: auto; border-style:none; padding-bottom: 0;">
                    <h2 class="modal-title" id="exampleModalLongTitle" style="display: inline-block">Order confirmation</h2>
                </div>

                <div class="modal-body" style="font-size: 30px;">
                    <hr/>
                    Do you want to confirm your order?
                    <hr/>
                </div>

                <div class="modal-footer" style="text-align: center; width: 100%; border-style:none; padding-top:0">
                    <div v-on:click="send_order" style="display: inline-block; font-size: 40px; width: 50%; color: green" data-dismiss="modal" data-toggle="modal" data-target="#order_confirmation"><i class="fas fa-check"></i></div>
                    <div style="display: inline-block; font-size: 40px; width: 50%; color: red"  data-dismiss="modal"><i class="fas fa-times"></i></div>  
                 </div>
                
                </div>

            </div>
        </div>

        <div class="top">
            <div class="krug stroke"></div>
            <h3 class="top_title">My order</h3>
        </div>

        <div class="main">
            <div class="ordered">
                <h3 class="underline stroke">Selected items:</h3>
                <FoodCard v-bind:key="card.id" v-bind:info="card" v-for="card in ordered" />
                
                <div v-if="store.order.products.length == 0" class="no_items">
                    No items selected
                </div>
            </div>

            <form class="customer_note">
                <h3 class="underline stroke">Note</h3>
                <textarea v-model="note" class="note"></textarea>
            </form>
        </div>
        
        <div v-if="store.position == 'waiter' && store.order.products.length >=1">
            <div class="bottom_buttons" >
                <button type="button" class="order order_only stroke" data-toggle="modal" data-target="#place_order">Place order</button>
            </div>            
        </div>
        <div v-else-if="store.position == 'Table'" class="bottom_buttons">
            <div v-if="store.order.products.length >=1">
                <button type="button" class="order stroke" data-toggle="modal" data-target="#place_order">Place order</button>
                <button type="button" class="call stroke"  data-toggle="modal" data-target="#call_the_waiter">Call waiter</button>                
            </div>
            <div v-else>
                <button type="button" class="call call_only stroke"  data-toggle="modal" data-target="#call_the_waiter">Call waiter</button> 
            </div>

        </div>   
     

    </div>
</template>

<script>
    import FoodCard from '@/components/card.vue'
    import store from '@/store.js'

    export default {
        data(){
            return{
                count: 0,
                note: '',
                store,
            }
        },
        computed:{
            ordered(){
                store.order.products = store.cards.filter(card => card.counter > 0);
                return store.order.products;
            },
        },
        methods:{
            send_order(){
                let products = store.order.products;

                if(products.length >= 1){
                    db.collection("orders").add({
                        table: store.userEmail, 
                        order_state: 'Available',
                        note: this.note,
                        date: store.current_date(),
                        time: store.current_time(),
                        order: products,
                    });
                    //Update 'times_ordered' svakog proizvoda koji se nalazi u store.order.products
                    //Isprazni 'My Order' tako da se vrijednost 'counter'svakog proizvoda postavi na 0 i na kraju prebrisi 'procucts' polje
                    for(let i = 0; i < products.length; i++){
                        let current_card = store.cards.filter(card => card.id == store.order.products[0].id)[0];
                        current_card.times_ordered = store.order.products[i].counter + store.order.products[i].times_ordered;
                        current_card.counter = 0;

                        db.collection("products").doc(current_card.id).set({
                            times_ordered: current_card.times_ordered
                        }, { merge: true });                          
                    }
                    products = [];
                    
                }
                else console.log("No items selected");
                /*
                else{
                    document.getElementById("no_items_selected").innerHTML = "No items selected";
                }
                */
            },           
        },
        name: 'my_order',
        components: {
            FoodCard
        }
    }
</script> 

<style scoped>
    .top{
        height: 250px;
        margin-bottom: 10px;
        background-image: url("/food.jpg");
        background-size: cover;
    }

    .krug{
        background-image: url("/my_order.jpg");
    }

    .customer_note{
        text-align: left;
    }
    .note{
        width: 99%;
        height: 150px;

        resize: none;

        color: #aaaaaa;
        border-radius: 5px;
    }
    .ordered{
        margin: 30px 0 30px 0;
    }

    .no_items{
        width: 100%;
        height: 100px;

        text-align: center;
        line-height: 100px;

        font-size: 40px;
        color: rgb(87, 87, 87);
    }
</style>