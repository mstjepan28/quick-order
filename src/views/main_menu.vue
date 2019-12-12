<template>
  <div>
    <router-link v-if="this.position == 'waiter'" to="/calls">
      <div class="opcija slika" style="background-image: url('/call.jpg')">
        <div class="krug">Calls</div>
      </div>
    </router-link>

    <router-link to="/food">
      <div class="opcija slika" style="background-image: url('/food.jpg')">
        <div class="krug">Food</div>
      </div>
    </router-link>

    <router-link to="/drinks">
      <div class="opcija slika" style="background-image: url('/drinks.jpg')">
        <div class="krug">Drinks</div>
      </div>
    </router-link>

    <router-link to="/most_ordered">
      <div class="opcija slika" style="background-image: url('/most_ordered.png'); font-size: 35px;">
        <div class="krug">Most ordered</div>
      </div>
    </router-link>

    <router-link to="/my_order">
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


