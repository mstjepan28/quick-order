<template>
    <div class="food_info">
        <!--Call-the-Waiter--------------------------------------------------->
        <div class="modal fade" id="update_confirmation" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document" >
                
                <div class="modal-content stroke" style="background: #343434; border: 2px rgba(245, 166, 35, 0.7) solid; text-align: center; border-radius: 40px;">
                
                <div class="modal-body" style="font-size: 30px; padding-bottom: 0">
                    Information saved
                    <hr/>
                    <div data-dismiss="modal">Ok</div>
                </div>
                
                </div>

            </div>
        </div>
        <div class="modal fade" id="update_product" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document" >
                
                <div class="modal-content stroke" style="background: #343434; border: 2px rgba(245, 166, 35, 0.7) solid; text-align: center; border-radius: 40px;">
                
                <div class="modal-header" style="text-align: center; margin: auto; border-style:none; padding-bottom: 0;">
                    <h2 class="modal-title" id="exampleModalLongTitle" style="display: inline-block">Save confirmation</h2>
                </div>

                <div class="modal-body" style="font-size: 30px;">
                    <hr/>
                    Do you want to save this information?
                    <hr/>
                </div>

                <div class="modal-footer" style="text-align: center; width: 100%; border-style:none; padding-top:0">
                    <div v-on:click="update_product" style="display: inline-block; font-size: 40px; width: 50%; color: green" data-dismiss="modal" data-toggle="modal" data-target="#update_confirmation"><i class="fas fa-check"></i></div>
                    <div style="display: inline-block; font-size: 40px; width: 50%; color: red"  data-dismiss="modal"><i class="fas fa-times"></i></div>  
                 </div>
                
                </div>

            </div>
        </div>


        <div v-if="this.store.position != 'manager'">
            <div class="top">
                <div class="container" style="background-image: url('/food.jpg')">

                    <div class="row">
                        <div class="col">
                            <div class="krug stroke" :style="{ backgroundImage: `url(${this.food_info.url})`}"></div>
                        </div>

                        <div class="col stroke" >
                            <div class="main_info">
                                <h2>{{food_info.title}}</h2>
                                <p>Price: {{food_info.price}}$</p>
                                <p>Times ordered: {{food_info.times_ordered}}</p>
                            </div>
                        </div>
                    </div>

                    <div v-if="store.position == 'waiter' || store.position == 'Table'" class="row second_row">
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
                        {{food_info.ingredients}}
                    </p>
                </div><br>
                <div class="info_box stroke">
                    <h3 class="underline">Nutrition facts</h3>
                    <table>
                        <tr>
                            <th>Energy value</th>
                            <th>{{food_info.energy_value}} kcal</th>
                        </tr>
                        <tr>
                            <td>Carbohydrates</td>
                            <td>{{food_info.carbohydrates}} g</td>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <td>{{food_info.protein}} g</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td>{{food_info.fat}} g</td>
                        </tr>
                        <tr>
                            <td>Vitamin A</td>
                            <td>{{food_info.vitamin_a}} mg</td>
                        </tr>
                        <tr>
                            <td>Vitamin C</td>
                            <td>{{food_info.vitamin_c}} mg</td>
                        </tr>
                        <tr>
                            <td>Calcium</td>
                            <td>{{food_info.calcium}} mg</td>
                        </tr>
                        <tr>
                            <td>Zinc</td>
                            <td>{{food_info.zinc}} mg</td>
                        </tr>
                    </table>
                </div><br>
        
            </div>
        </div>

        <div v-else>
            <form>
                <div class="top" style="height: 200px;">
                    <div class="container" style="background-image: url('/food.jpg')">

                        <div class="row">
                            <div class="col">
                                <div class="krug stroke" :style="{ backgroundImage: `url(${this.food_info.url})`}"></div>
                            </div>

                            <div class="col stroke" >
                                <div class="main_info">
                                    <h2><input type=text v-model=food_info.title></h2>
                                    <!-- food_info.title jer nema jos za cijenu -->
                                    <p>Price: <input type=text v-model=food_info.price style="height:30px;width:55%"> $</p>

                                    <p>Times ordered: {{food_info.times_ordered}}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="main">
                    <div class="info_box stroke" style="text-align: center">
                        <select v-model="food_info.type" style="margin-right: 20px">
                            <option disabled value="">Type</option>
                            <option>Food</option>
                            <option>Drinks</option>
                        </select>

                        <select v-if="food_info.type == 'Food'" v-model="food_info.category">
                            <option disabled value="">Category</option>
                            <option>Appetizer</option>
                            <option>Main course</option>
                            <option>Dessert</option>
                        </select>
                        <select v-else v-model="food_info.category">
                            <option disabled value="">Category</option>
                            <option>Soda</option>
                            <option>Juice</option>
                            <option>Other</option>
                            <option>Beer</option>
                            <option>Wine</option>
                            <option>Liquors</option>
                        </select>                                                  
                    </div><br>

                    <div class="info_box stroke">
                        <h3 class="underline">Description</h3>
                        <textarea v-model=food_info.description></textarea>
                    </div><br>

                    <div class="info_box stroke" >
                        <h3 class="underline">Ingredients</h3>
                        <textarea v-model=food_info.ingredients></textarea>
                    </div><br>

                    <div class="info_box stroke">
                        <h3 class="underline">Nutrition facts</h3>
                        <table>
                            <tr>
                                <th>Energy value</th>
                                <th><input value=text v-model="food_info.energy_value" style="width:80%;"> kcal</th>
                            </tr>
                            <tr>
                                <td>Carbohydrates</td>
                                <td><input value=text v-model="food_info.carbohydrates" style="width:80%;"> g</td>
                            </tr>
                            <tr>
                                <td>Protein</td>
                                <td><input value=text v-model="food_info.protein" style="width:80%;"> g</td>
                            </tr>
                            <tr>
                                <td>Fat</td>
                                <td><input value=text v-model="food_info.fat" style="width:80%;"> g</td>
                            </tr>
                            <tr>
                                <td>Vitamin A</td>
                                <td><input value=text v-model="food_info.vitamin_a" style="width:80%;"> mg</td>
                            </tr>
                            <tr>
                                <td>Vitamin C</td>
                                <td><input value=text v-model="food_info.vitamin_c" style="width:80%;"> mg</td>
                            </tr>
                            <tr>
                                <td>Calcium</td>
                                <td><input value=text v-model="food_info.calcium" style="width:80%;"> mg</td>
                            </tr>
                            <tr>
                                <td>Zinc</td>
                                <td><input value=text v-model="food_info.zinc" style="width:80%;"> mg</td>
                            </tr>
                        </table>
                    </div><br>
            
                </div>

                <div class="bottom_buttons">
                     <button type="button" class="order order_only stroke" data-toggle="modal" data-target="#update_product">Save changes</button>
                </div>
            </form>            
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
            },
            update_product(){
                db.collection("products").doc(this.food_info.id).update({
                    title: this.food_info.title,
                    price: this.food_info.price,
                    url: this.food_info.url,

                    category: this.food_info.category,
                    type: this.food_info.type,

                    ingredients: this.food_info.ingredients,
                    description: this.food_info.description,

                    energy_value: this.food_info.energy_value,
                    carbohydrates: this.food_info.carbohydrates,
                    protein: this.food_info.protein,
                    fat: this.food_info.fat,
                    vitamin_a: this.food_info.vitamin_a,
                    vitamin_c: this.food_info.vitamin_c,
                    calcium: this.food_info.calcium,
                    zinc: this.food_info.zinc,
                    
                });
        
                //Polje cards filtriraj na nacin da iz njega izbacis objekt koji ima isti Id kao food_info
                //Ovo radimo jer ce se s baze pri update-u podataka ponovno povuci jelo s tim Id-om
                //Sto bi dalje uzrokovalo duplim elementima u nasem izborniku
                this.store.cards = this.store.cards.filter(card => card.id != this.food_info.id);
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
        padding-left: 0;
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
    /*--------------------*/
    .info_box > p{
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
    }
    /*--------------------*/
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
    /*--------------------*/

    *:focus{
        outline: none;
    }
    input{
        height: 40px;
        width: 100%;

        padding-left: 5px;

        color: white;

        border-radius: 5px;
        border: 2px rgba(245, 166, 35, 0.7) solid;

        background: #343434;
    }
    textarea{
        width: 99%;
        height: 150px;

        resize: none;

        color: white;

        border-radius: 5px;
        border: 2px rgba(245, 166, 35, 0.7) solid;

        background: #343434;
    }
    select{
        width: 45%;
        height: 40px;

        color: white;

        border-radius: 5px;
        border: 2px rgba(245, 166, 35, 0.7) solid;

        background: #343434;        
    }
    .select-items div{
        height: 40px;
        color: white;

        border-radius: 5px;
        border: 2px rgba(245, 166, 35, 0.7) solid;

        background: red;
    }
</style>