<template>
  <div>
    <router-link to="/food">
      <div class="opcija slika_1">
        <div class="krug">Food</div>
      </div>
    </router-link>

    <router-link to="/drinks">
      <div class="opcija slika_2">
        <div class="krug">Drinks</div>
      </div>
    </router-link>

    <router-link to="/my_order">
      <div class="opcija slika_3">
        <div class="krug">My order</div>
      </div>
    </router-link>

    <router-link to="/most_ordered">
      <div class="opcija slika_4">
        <div class="krug">Most ordered</div>
      </div>
    </router-link>

    <div class="buttons" style="margin-top: 100px;">
      <div class="order stroke">Place order</div>
      <div class="call stroke">Call waiter</div>
    </div>

  </div>
</template>

<script>
  export default {

  }
</script>

<style >

</style>


