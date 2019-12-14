<template>
    <div v-if="this.position == 'chef'" class="most_ordered">
        <div class="top">
            <div class="container">

                <div class="row">

                    <div class="col">
                        <div class="krug stroke"></div>
                    </div>

                    <div class="col stroke">
                        <h3>Orders</h3>
                    </div>
                </div>
<!--
                <div class="row food_drinks stroke">
                    <div class="col">
                        <router-link to="orders" class="orders-option">Available</router-link>
                    </div>
                    <div class="col">
                        <router-link to="being_prepared" class="orders-option">Being prepared</router-link>
                    </div>
                    <div class="col">
                        <router-link to="done" class="orders-option">Done</router-link>
                    </div>                    
                </div>
-->
            </div>
        </div>
        

        <div class="items">
            <router-view/>
        </div>

    </div>
</template>

<script>
  import store from '@/store.js'
  export default {
    data(){
      return store;
    },
  }
</script>

<style scoped>
    .row{
        height:240px;
    }
    .top{
        height: 250px;
        width: 100%;
        background-image: url("/food.jpg");
        background-size: cover;
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

        background-image: url("/most_ordered.png");
    }
    .food_drinks{
        width: 100%;

        text-align: center;        
        position: relative;
        top: -35px;

        font-size: 30px;
    }
    .food_drinks > .col{
        width: 33%;
        height: 50px;
    }
    .orders-option{
        font-size: 15px;
        font-weight: normal;
        font-style: normal;

        display: inline-block;
    }

    a:hover{
        text-decoration: none;
        color: white;
    }

</style>