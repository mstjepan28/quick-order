<template>
    <div class="products">
        <div class="top">
            <div class="krug row"><h3 class="top_title">Products</h3></div>
        </div>
        
        <div class="main">
            <router-link to="food"><div class="product_option stroke" style="background-image: url('/voce.jpg')">Food</div></router-link>
            <router-link to="drinks"><div class="product_option stroke" style="background-image: url('/order_background.jpg')">Drinks</div></router-link>
            <router-link to="most_ordered"><div class="product_option stroke" style="background-image: url('/restoran.jpg')">Most ordered</div></router-link>
        </div>

        <div class="bottom_buttons">
            <router-link to="/add_product" class="call call_only stroke">Add new</router-link>
        </div>
    </div>
</template>

<script>
    import FoodCard from '@/components/card.vue'
    import store from '@/store.js'

    export default {
        data(){
            return{
                store
            }
        },
        computed:{
            filtered_cards(){
                return this.store.cards.filter(card => card.type == this.show);
            }
        },
        components: {
            FoodCard
        }      
    }
</script>

<style scoped>
    .top{
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image: url('/products_background.jpg');      
    }
    .krug{
        background-size: 100% 100%; 
        background-repeat: no-repeat;
        background-image: url('/products_krug.jpg'); 
    }
</style>