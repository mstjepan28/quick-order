<template>
  <div class="food">

    <div class="top">
      <div class="krug"></div>
      <h3 class="top_title">Food</h3>
    </div>

    <div>
      <router-view/>
    </div>
  </div>
</template>

<style scoped>
  .food{
    width: 100%;

    text-align: center;
    display: inline-block;
  }
  .top{
    height: 250px;

    background-image: url("/food2.jpg");
    background-size: cover;
  }
  .krug{
    background-image: url("/food.jpg");
  }
</style>
