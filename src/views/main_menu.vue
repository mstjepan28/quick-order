<template>
  <div>
    <!--<div style="height: 150px; background: gray; widht: 100%;" v-on:click="funkcija"></div>--><!--Za testiranje nekih funkcija-->
<!--Kuhar-Barmen------------------------------------------------------------------------------------->
    <router-link v-if="this.position == 'chef' || this.position == 'barman'" v-bind:to="'/orders/' + 0">
      <div class="opcija slika" style="background-image: url('/food.jpg')">
        <div class="krug">Orders</div>
      </div> 
    </router-link>

    <router-link v-if="this.position == 'chef' || this.position == 'barman'" v-bind:to="'/orders/' + 1">
      <div class="opcija slika" style="background-image: url('/food.jpg'); font-size: 30px;">
        <div class="krug">Being prepared</div>
      </div>
    </router-link>

    <router-link v-if="this.position == 'chef' || this.position == 'barman'" v-bind:to="'/orders/' + 2">
      <div class="opcija slika" style="background-image: url('/food.jpg')">
        <div class="krug">Finished</div>
      </div>
    </router-link>

<!--Menadzer------------------------------------------------------------------------------------->
    <router-link v-if="this.position == 'manager'" to="/statistics">
      <div class="opcija slika" style="background-image: url('/food.jpg')">
        <div class="krug">Statistics</div>
      </div> 
    </router-link>

    <router-link v-if="this.position == 'manager'" to="/orders/1">
      <div class="opcija slika" style="background-image: url('/food.jpg'); font-size: 35px">
        <div class="krug">Orders history</div>
      </div> 
    </router-link>

    <router-link v-if="this.position == 'manager'" to="/employes">
      <div class="opcija slika" style="background-image: url('/food.jpg')">
        <div class="krug">Employes</div>
      </div> 
    </router-link>

    <router-link v-if="this.position == 'manager'" to="/products">
      <div class="opcija slika" style="background-image: url('/food.jpg')">
        <div class="krug">Products</div>
      </div> 
    </router-link> 

<!--Musterija-Konobar------------------------------------------------------------------------------------->
    <router-link v-if="this.position == 'waiter'" to="/calls">
      <div class="opcija slika" style="background-image: url('/call.jpg')">
        <div class="krug">Calls</div>
      </div>
    </router-link>

    <router-link v-if="this.position == 'waiter' || this.position == 'Table'" to="/food">
      <div class="opcija slika" style="background-image: url('/food.jpg')">
        <div class="krug">Food</div>
      </div>
    </router-link>

    <router-link v-if="this.position == 'waiter' || this.position == 'Table'" to="/drinks">
      <div class="opcija slika" style="background-image: url('/drinks.jpg')">
        <div class="krug">Drinks</div>
      </div>
    </router-link>

    <router-link v-if="this.position == 'waiter' || this.position == 'Table'" to="/most_ordered">
      <div class="opcija slika" style="background-image: url('/most_ordered.png'); font-size: 35px;">
        <div class="krug">Most ordered</div>
      </div>
    </router-link>

    <router-link v-if="this.position == 'waiter' || this.position == 'Table'" to="/my_order">
      <div class="opcija slika" style="background-image: url('/my_order.jpg')">
        <div class="krug">My order</div>
      </div>
    </router-link>

  </div>
</template>

<script>
  import store from '@/store.js'
  export default {
    data(){
      return store;
    }
  }
</script>