<template>
    <div class="food_info">
 
        <div class="top">
            <div class="container" style="background-image: url('/food.jpg')">

                <div class="row">
                    <div class="col">
                        <div class="krug stroke" :style="{ backgroundImage: `url(${this.food_info.url})`}"></div>
                    </div>

                    <div class="col stroke" >
                        <div class="main_info">
                            <h2>{{food_info.title}}</h2>
                            <p>Price: 12345$</p>
                            <p>Times ordered: {{food_info.times_ordered}}</p>
                        </div>
                    </div>
                </div>

                <div v-if="store.position != 'waiter' || store.position != 'Table'" class="row second_row">
                    <div class="col stroke" ><i class="fas fa-chevron-up" v-on:click="food_info.counter = increase(food_info.counter)"></i></div>
                    <div class="col stroke" >{{food_info.counter}}</div>
                    <div class="col stroke" ><i class="fas fa-chevron-down" v-on:click="food_info.counter = decrease(food_info.counter)"></i></div>
                </div>

            </div>
        </div>

        <div class="main">
            <div class="info_box stroke">
                <h3 class="underline">Description</h3>
                <p>
                    {{food_info.description}}
                </p>
            </div><br>
            <div class="info_box stroke" >
                <h3 class="underline">Ingrediants</h3>
                <p>
                    {{food_info.description}}
                </p>
            </div><br>
            <div class="info_box stroke">
                <h3 class="underline">Nutrition facts</h3>
                <table>
                    <tr>
                        <th>Energy value</th>
                        <th>90 kcal</th>
                    </tr>
                    <tr>
                        <td>Carbohydrates</td>
                        <td>20.7 g</td>
                    </tr>
                    <tr>
                        <td>Protein</td>
                        <td>2 g</td>
                    </tr>
                    <tr>
                        <td>Fat</td>
                        <td>0.2 g</td>
                    </tr>
                    <tr>
                        <td>Vitamin A</td>
                        <td>15 mg</td>
                    </tr>
                    <tr>
                        <td>Vitamin C</td>
                        <td>19.6 mg</td>
                    </tr>
                    <tr>
                        <td>Calcium</td>
                        <td>0.3 mg</td>
                    </tr>
                    <tr>
                        <td>Zinc</td>
                        <td>10 mg</td>
                    </tr>
                </table>
            </div><br>
    
        </div>

    </div>
</template>

<script>
    import store from '@/store.js'

    export default {
        data(){
            return{
                id: this.$route.params.id,
                food_info: {},
                store
            }
        },
        methods:{
            increase(counter){
                if(counter < 20){
                    counter += 1;
                    store.cards.filter(card => card.id == this.food_info.id).counter = counter;
                }
                return counter
            },
            decrease(counter){
                if(counter > 0){
                    counter -= 1;
                    store.cards.filter(card => card.id == this.food_info.id).counter = counter;
                }
                return counter
            }
        },
        mounted(){
            this.food_info = store.cards.filter(card => card.id == this.id)[0];
        },
        
    }
</script>

<style scoped>
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

        background-size: cover;
    }
    .main_info{
        position: relative;
        top: 65px;
    }
    .main_info > p{
        font-size: 20px;
        margin: 0
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
    .info_box > p{
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
    }

    table {
    border-collapse: collapse;
    width: 100%;
    }

    td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    }

    tr:nth-child(even) {
    background-color: #404040;
    }

</style>