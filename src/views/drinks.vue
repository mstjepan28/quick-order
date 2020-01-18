<template>
    <div>
        <div class="top">
            <div class="krug"><h3 class="top_title">Drinks</h3></div>
            
        </div>
            
        <router-view/>
    </div>
</template>

<style scoped>
    .top{
        height: 250px;

        background-image: url("/drinks2.jpg");
        background-size: cover;    
    }
    .krug{
        background-image: url("/drinks4.jpg" );
        background-size: cover;
        
    }
</style>