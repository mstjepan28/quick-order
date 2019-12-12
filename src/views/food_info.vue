<template>
    <div class="food_info">
        <div class="top">
            <div class="container" style="background-image: url('/food.jpg')">

                <div class="row">
                    <div class="col">
                        <div class="krug stroke" style="background-image: url('/food3.jpg')"></div>
                    </div>

                    <div class="col stroke" >
                        <div class="main_info">
                            <h2>Jelo#1</h2>
                            <p>Price: 12345$</p>
                        </div>
                    </div>
                </div>

                <div class="row second_row">
                    <div class="col stroke" ><i class="fas fa-chevron-up"></i></div>
                    <div class="col stroke" >0</div>
                    <div class="col stroke" ><i class="fas fa-chevron-down"></i></div>
                </div>

            </div>
        </div>

        <div class="main">
            <div class="info_box stroke">
                <h3>Description</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div><br>
            <div class="info_box stroke">
                <h3>Ingrediants</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div><br>
            <div class="info_box stroke">
                <h3>Nutrition</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div><br>
            



        </div>

    </div>
</template>

<script>
    export default {
        props: ['info'],
    }
</script>

<style scoped>
    .main{
        margin: 5%;
        text-align: left;
    }
    .top{
        height: 250px;
    }
    .container{
        width:100%;
        height:200px;
    }
    .col{
        height:200px;
    }
    .krug{
        position: relative;
        width:150px;
        height:150px;
        top:15px;   
    }
    .main_info{
        position: relative;
        top:65px;
    }
    .main_info > p{
        font-size: 20px;
    }
    .second_row > .col{
        height: 50px;
        line-height: 50px;
        
        font-size: 30px;
        font-style: normal;
        font-weight: normal;

        background: #343434;
        border:2px solid rgba(245, 166, 35, 0.7);
    }

    .info_box > h3{
        border-bottom: 3px solid rgba(245, 166, 35, 0.7);
    }
    .info_box > p{
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
    }
</style>