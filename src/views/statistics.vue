<template>
    <div class="statistics">
        <div v-if="this.statistics.id != null" class="main">
            <div>
                <h3 class="stroke underline">Number of orders:</h3>
                <div class="container">
                    <div class="row">
                        <div class="col-4">
                            <h3 class="stroke underline">By day:</h3>
                            <h5>Mon:</h5> {{this.statistics.hour_orders[0]}}<br>
                            <h5>Tues:</h5> {{this.statistics.hour_orders[1]}}<br>
                            <h5>Wed:</h5> {{this.statistics.hour_orders[2]}}<br>
                            <h5>Thurs:</h5> {{this.statistics.hour_orders[3]}}<br>
                            <h5>Fri:</h5> {{this.statistics.hour_orders[4]}}<br>
                            <h5>Sat:</h5> {{this.statistics.hour_orders[5]}}<br>
                            <h5>Sun:</h5> {{this.statistics.hour_orders[6]}}<br>
                        </div>
                        <div class="col-8">
                            <h3 class="stroke underline">By hour:</h3>
                            <div class="row">
                                <div class="col">
                                    <h5>01:00</h5> {{this.statistics.hour_orders[0]}}<br>
                                    <h5>02:00</h5> {{this.statistics.hour_orders[1]}}<br>
                                    <h5>03:00</h5> {{this.statistics.hour_orders[2]}}<br>
                                    <h5>04:00</h5> {{this.statistics.hour_orders[3]}}<br>
                                    <h5>05:00</h5> {{this.statistics.hour_orders[4]}}<br>
                                    <h5>06:00</h5> {{this.statistics.hour_orders[5]}}<br>
                                    <h5>07:00</h5> {{this.statistics.hour_orders[6]}}<br>
                                    <h5>08:00</h5> {{this.statistics.hour_orders[7]}}<br>
                                    <h5>09:00</h5> {{this.statistics.hour_orders[8]}}<br>
                                    <h5>10:00</h5> {{this.statistics.hour_orders[9]}}<br>
                                    <h5>11:00</h5> {{this.statistics.hour_orders[10]}}<br>
                                    <h5>12:00</h5> {{this.statistics.hour_orders[11]}}<br>
                                </div>
                                <div class="col">
                                    <h5>13:00</h5> {{this.statistics.hour_orders[12]}}<br>
                                    <h5>14:00</h5> {{this.statistics.hour_orders[13]}}<br>
                                    <h5>15:00</h5> {{this.statistics.hour_orders[14]}}<br>
                                    <h5>16:00</h5> {{this.statistics.hour_orders[15]}}<br>
                                    <h5>17:00</h5> {{this.statistics.hour_orders[16]}}<br>
                                    <h5>18:00</h5> {{this.statistics.hour_orders[17]}}<br>
                                    <h5>19:00</h5> {{this.statistics.hour_orders[18]}}<br>
                                    <h5>20:00</h5> {{this.statistics.hour_orders[19]}}<br>
                                    <h5>21:00</h5> {{this.statistics.hour_orders[20]}}<br>
                                    <h5>22:00</h5> {{this.statistics.hour_orders[21]}}<br>
                                    <h5>23:00</h5> {{this.statistics.hour_orders[22]}}<br>
                                    <h5>24:00</h5> {{this.statistics.hour_orders[23]}}<br>
                                </div>                                
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 class="stroke underline">Income:</h3>
                <div class="container">
                    <div class="row">
                        <div class="col-4">
                            <h3 class="stroke underline">By day:</h3>
                            <h5>Mon:</h5> {{this.statistics.day_price[0]}}<br>
                            <h5>Tues:</h5> {{this.statistics.day_price[1]}}<br>
                            <h5>Wed:</h5> {{this.statistics.day_price[2]}}<br>
                            <h5>Thurs:</h5> {{this.statistics.day_price[3]}}<br>
                            <h5>Fri:</h5> {{this.statistics.day_price[4]}}<br>
                            <h5>Sat:</h5> {{this.statistics.day_price[5]}}<br>
                            <h5>Sun:</h5> {{this.statistics.day_price[6]}}<br>
                        </div>
                        <div class="col-8">
                            <h3 class="stroke underline">By hour:</h3>
                            <div class="row">
                                <div class="col">
                                    <h5>01:00</h5> {{this.statistics.hour_price[0]}}<br>
                                    <h5>02:00</h5> {{this.statistics.hour_price[1]}}<br>
                                    <h5>03:00</h5> {{this.statistics.hour_price[2]}}<br>
                                    <h5>04:00</h5> {{this.statistics.hour_price[3]}}<br>
                                    <h5>05:00</h5> {{this.statistics.hour_price[4]}}<br>
                                    <h5>06:00</h5> {{this.statistics.hour_price[5]}}<br>
                                    <h5>07:00</h5> {{this.statistics.hour_price[6]}}<br>
                                    <h5>08:00</h5> {{this.statistics.hour_price[7]}}<br>
                                    <h5>09:00</h5> {{this.statistics.hour_price[8]}}<br>
                                    <h5>10:00</h5> {{this.statistics.hour_price[9]}}<br>
                                    <h5>11:00</h5> {{this.statistics.hour_price[10]}}<br>
                                    <h5>12:00</h5> {{this.statistics.hour_price[11]}}<br>
                                </div>
                                <div class="col">
                                    <h5>13:00</h5> {{this.statistics.hour_price[12]}}<br>
                                    <h5>14:00</h5> {{this.statistics.hour_price[13]}}<br>
                                    <h5>15:00</h5> {{this.statistics.hour_price[14]}}<br>
                                    <h5>16:00</h5> {{this.statistics.hour_price[15]}}<br>
                                    <h5>17:00</h5> {{this.statistics.hour_price[16]}}<br>
                                    <h5>18:00</h5> {{this.statistics.hour_price[17]}}<br>
                                    <h5>19:00</h5> {{this.statistics.hour_price[18]}}<br>
                                    <h5>20:00</h5> {{this.statistics.hour_price[19]}}<br>
                                    <h5>21:00</h5> {{this.statistics.hour_price[20]}}<br>
                                    <h5>22:00</h5> {{this.statistics.hour_price[21]}}<br>
                                    <h5>23:00</h5> {{this.statistics.hour_price[22]}}<br>
                                    <h5>24:00</h5> {{this.statistics.hour_price[23]}}<br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-3">
                <h5>Total orders: </h5> {{this.total_count}}<br>
                <h5>Total income: </h5> {{this.total_income}}
                <h3 class="underline"><h3 class="stroke">Average order price:</h3> {{parseInt(this.total_income / this.total_count, 10)}}$</h3>
            </div>
 
            <router-link to="/most_ordered">
                <div class="most_ordered mb-3">
                    <h2 class="stroke">Most ordered</h2>
                </div> 
            </router-link>

        </div>
        <div v-else class="no_stats">
            No stats to show
        </div>
    </div>
</template>

<script>
    import store from '@/store.js'

    export default {
        data(){
            return{
                statistics: store.statistics,

                total_income: 0,
                total_count: 0
            }
        },
        mounted(){
            for(let i = 0; i < 7; i++){
                this.total_income += this.statistics.day_price[i];
                this.total_count += this.statistics.day_orders[i];
            }
        }
    }
</script>


<style scoped>
    h5{
        display: inline-block;
        color:rgba(245, 166, 35, 0.7);
    }
    h3{
        display: inline-block;
    }
    .statistics{
        margin-top: 75px;
    }
    .most_ordered{
        text-align: center;

        border-radius: 9px;
        border: 3px rgba(245, 166, 35, 0.7) solid;
        background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url('/food.jpg');
    }
    .most_ordered > h2{
        padding: 10px 0;
        display: inline-block
    }
    .no_stats{
        width: 100%;
        height: 500px;

        text-align: center;
        line-height: 500px;

        font-size: 40px;
        color: rgb(87, 87, 87);
    }
    .underline{
        margin-top: 0px;
    }
</style>