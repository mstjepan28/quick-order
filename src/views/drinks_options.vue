<template>
    <div class="content">
        <h3 class="stroke">Non-Alcoholic</h3><br>
        <router-link to="drinks_selection/0"><button type="button" class="btn btn-secondary btn-lg btn-block stroke">Soda</button></router-link>
        <router-link to="drinks_selection/1"><button type="button" class="btn btn-secondary btn-lg btn-block stroke">Juice</button></router-link>
        <router-link to="drinks_selection/2"><button type="button" class="btn btn-secondary btn-lg btn-block stroke">Other</button></router-link>
        
        <h3 class="stroke" style="margin-top: 25px;">Alcoholic</h3>
        <router-link to="drinks_selection/3"><button type="button" class="btn btn-secondary btn-lg btn-block stroke">Beer</button></router-link>
        <router-link to="drinks_selection/4"><button type="button" class="btn btn-secondary btn-lg btn-block stroke">Wine</button></router-link>
        <router-link to="drinks_selection/5"><button type="button" class="btn btn-secondary btn-lg btn-block stroke">Liquors</button></router-link>
    </div>
</template>

<style scoped>
    .content{
        margin: 40px 0 0 0;
    }
    h3{
        float: left;
        margin-left: 25px;
    }
    button{
        height: 85px;
        width: 90%;

        display: inline-block;
        margin: 0 10px 10px 10px;
        
        font-size: 40px;
    }
</style>