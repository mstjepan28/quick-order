<template>
    <div class="content">
      <router-link to="food_selection/0"><button type="button" class="btn btn-secondary btn-lg btn-block stroke">Appetizer</button></router-link>
      <router-link to="food_selection/1"><button type="button" class="btn btn-secondary btn-lg btn-block stroke">Main course</button></router-link>
      <router-link to="food_selection/2"><button type="button" class="btn btn-secondary btn-lg btn-block stroke">Dessert</button></router-link>
    </div>
</template>

<style scoped>
    .content{
        margin: 40px 0 0 0;
    }
    button{
        height: 85px;
        width: 90%;

        display: inline-block;
        margin: 0 10px 10px 10px;

        font-size: 40px;
    }
</style>