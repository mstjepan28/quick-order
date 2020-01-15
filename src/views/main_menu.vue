<template>
  <div>
    <!--<div style="height: 150px; background: gray; widht: 100%;" v-on:click="funkcija"></div>--><!--Za testiranje nekih funkcija-->
<!--Kuhar-Barmen------------------------------------------------------------------------------------->
    <router-link v-if="this.position == 'Chef' || this.position == 'Barman'" v-bind:to="'/orders/' + 0">
      <div class="opcija slika" style="background-image: url('/orders.jpg'); background-size:100% 100%; background-repeat: no-repeat;">
        <div class="krug">Orders</div>
      </div> 
    </router-link>

    <router-link v-if="this.position == 'Chef' || this.position == 'Barman'" v-bind:to="'/orders/' + 1">
      <div class="opcija slika" style="background-image: url('/prepare.jpg'); background-size:100% 100%; background-repeat: no-repeat; font-size: 30px;">
        <div class="krug">Being prepared</div>
      </div>
    </router-link>

    <router-link v-if="this.position == 'Chef' || this.position == 'Barman'" v-bind:to="'/orders/' + 2">
      <div class="opcija slika" style="background-image: url('/food.jpg'); background-size: 100% 100%; background-repeat: no-repeat;">
        <div class="krug">Finished</div>
      </div>
    </router-link>

<!--Menadzer------------------------------------------------------------------------------------->
    <router-link v-if="this.position == 'Manager'" to="/statistics">
      <div class="opcija slika" style="background-image: url('/statistics.jpg'); background-size: 100% 100%; background-repeat: no-repeat;">
        <div class="krug">Statistics</div>
      </div> 
    </router-link>

    <router-link v-if="this.position == 'Manager' || this.position == 'Waiter'" to="/orders/1">
      <div class="opcija slika" style="background-image: url('/history.jpg'); background-size: 100% 100%; background-repeat: no-repeat; font-size: 35px">
        <div class="krug">Orders history</div>
      </div> 
    </router-link>

    <router-link v-if="this.position == 'Manager'" to="/employees">
      <div class="opcija slika" style="background-image: url('/employees.jpg'); background-size: 100% 100%; background-repeat: no-repeat;">
        <div class="krug">Employees</div>
      </div> 
    </router-link>

    <router-link v-if="this.position == 'Manager'" to="/products">
      <div class="opcija slika" style="background-image: url('/products.jpg'); background-size: 100% 100%; background-repeat: no-repeat;">
        <div class="krug">Products</div>
      </div> 
    </router-link> 

<!--Musterija-Konobar------------------------------------------------------------------------------------->
    <router-link v-if="this.position == 'Waiter'" to="/calls">
      <div class="opcija slika" style="background-image: url('/call.jpg'); background-size: 100% 100%; background-repeat: no-repeat;">
        <div class="krug">Calls</div>
      </div>
    </router-link>

    <router-link v-if="this.position == 'Waiter' || this.position == 'Table'" to="/food">
      <div class="opcija slika" style="background-image: url('/food.jpg')">
        <div class="krug">Food</div>
      </div>
    </router-link>

    <router-link v-if="this.position == 'Waiter' || this.position == 'Table'" to="/drinks">
      <div class="opcija slika" style="background-image: url('/drinks.jpg')">
        <div class="krug">Drinks</div>
      </div>
    </router-link>

    <router-link v-if="this.position == 'Waiter' || this.position == 'Table'" to="/most_ordered">
      <div class="opcija slika" style="background-image: url('/most_ordered.png'); font-size: 35px;">
        <div class="krug">Most ordered</div>
      </div>
    </router-link>

    <router-link v-if="this.position == 'Waiter' || this.position == 'Table'" to="/my_order">
      <div class="opcija slika" style="background-image: url('/my_order.jpg')">
        <div class="krug">My order</div>
      </div>
    </router-link>

    <router-link v-if="this.position == 'Table'" to="/order_status">
      <div class="opcija slika" style="background-image: url('/food.jpg')">
        <div class="krug">Order status</div>
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

<style scoped>

</style>