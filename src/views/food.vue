<template>
  <div class="food">

    <div class="call stroke">
      Call the waiter
    </div>

    <div class="top">
      <div class="krug"></div>
      <h3>Food</h3>
    </div>

    <div class="options">
      <router-view/>
    </div>

  </div>
</template>

<style scoped>
  .top > h3{
    position: relative;
    top: -45px;

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
  .call{
    width: 100%;
    z-index: 1000;
    margin: 0 0 0 0;
  }
  .krug{
    width: 225px;
    height: 225px;

    margin: 10px 0 0 0;

    background-image: url("/food.jpg");
    background-size: cover;
    border: 3px rgba(245, 166, 35, 0.7) solid; 
  }
  .options{
    margin-bottom: 75px;
  }
</style>
