<template>
    <div class="products">
        <div class="top">
            <div class="krug row"></div>

            <div v-if="show == 'Food'" class="row options">
                <div class="col selected" style="font-size: 23px" v-on:click="show = 'Food'">Food</div>
                <div class="col stroke" style="font-size: 15px" v-on:click="show = 'Drinks'">Drinks</div>
            </div>
            <div v-else class="row options">
                <div class="col stroke" style="font-size: 15px" v-on:click="show = 'Food'">Food</div>
                <div class="col selected" style="font-size: 23px" v-on:click="show = 'Drinks'">Drinks</div>
            </div>
        </div>
        
        <div class="main">
            <FoodCard v-bind:key="card.id" v-bind:info="card" v-for="card in filtered_cards" />
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
                show: 'Food',
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