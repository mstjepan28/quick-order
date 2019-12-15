<template>
  <div class="food">

    <div class="top">
      <div class="krug"></div>
      <h3>Food</h3>
    </div>

    <div>
      <router-view/>
    </div>
  </div>
</template>

<style scoped>
  .top > h3{
    position: relative;
    top: -39px;

    font-size: 40px;
    text-decoration: underline;

    background: rgba(245, 166, 35, 0.7);
  }
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
