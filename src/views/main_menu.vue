<template>
  <div>
    <!--<div style="height: 150px; background: gray; widht: 100%;" v-on:click="funkcija"></div>--><!--Za testiranje nekih funkcija-->
<!--------------------------------------------------------------------------------------->
    <router-link v-if="this.position == 'chef' || this.position == 'barman'" to="/orders">
      <div class="opcija slika" style="background-image: url('/food.jpg')">
        <div class="krug">Orders</div>
      </div>
    </router-link>

    <router-link v-if="this.position == 'chef' || this.position == 'barman'" to="/being_prepared">
      <div class="opcija slika" style="background-image: url('/food.jpg'); font-size: 30px;">
        <div class="krug">Being prepared</div>
      </div>
    </router-link>

    <router-link v-if="this.position == 'chef' || this.position == 'barman'" to="/done">
      <div class="opcija slika" style="background-image: url('/food.jpg')">
        <div class="krug">Done</div>
      </div>
    </router-link>
<!--------------------------------------------------------------------------------------->
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
    },
  }
</script>
<style >

</style>


