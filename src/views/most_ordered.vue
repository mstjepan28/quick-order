<template>
    <div class="most_ordered">
        <div class="top">
            <div class="container">

                <div class="row">

                    <div class="col">
                        <div class="krug stroke"></div>
                    </div>

                    <div class="col stroke">
                        <h3>Most ordered</h3>
                    </div>
                </div>

                <div class="row food_drinks stroke">
                    <div class="col">
                        <router-link to="most_ordered">Food</router-link>
                    </div>
                    <div class="col">
                        <router-link to="most_ordered_drinks">Drinks</router-link>
                    </div>
                </div>

            </div>
        </div>
        

        <div class="items">
            <router-view/>
        </div>

    </div>
</template>

<style scoped>
    .row{
        height:240px;
    }
    .top{
        height: 250px;
        width: 100%;
        background-image: url("/food.jpg");
        background-size: cover;
        margin-bottom: 10px;
    }
    .col > h3{
        display: inline-block;
        
        position: relative;
        top: 80px;

        font-size: 30px;
        text-decoration: underline;
    }
    .krug{
        width: 175px;
        height: 175px;

        background-image: url("/most_ordered.png");
    }
    a:hover{
        text-decoration: none;
        color: white;
    }
    .food_drinks{
        width: 100%;

        position: relative;
        top: -35px;

        font-size: 30px;
    }
    .items{
        margin-bottom: 75px;
    }
</style>