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

        <div class="call stroke">Call waiter</div>
    </div>
</template>

<style scoped>
    .top{
        height: 250px;
        width: 100%;
        background-image: url("/food.jpg");
        background-size: cover;
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

        display: inline-block;
        margin: 25px 0 25px 0;

        background-image: url("/most_ordered.png");
        background-size: cover;
        border: 3px rgba(245, 166, 35, 0.7) solid; 
    }
    .call{
        margin: 0;
        width: 100%;   
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