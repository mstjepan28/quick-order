<template>
    <div class="food_info">
        <!--Call-the-Waiter--------------------------------------------------->
        <div class="modal fade" id="add_product_confirmation" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document" >
                
                <div class="modal-content stroke" style="background: #343434; border: 2px rgba(245, 166, 35, 0.7) solid; text-align: center; border-radius: 40px;">
                
                <div class="modal-body" style="font-size: 30px; padding-bottom: 0">
                    Product saved
                    <hr/>
                    <div data-dismiss="modal">Ok</div>
                </div>
                
                </div>

            </div>
        </div>
        <div class="modal fade" id="add_product" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document" >
                
                <div class="modal-content stroke" style="background: #343434; border: 2px rgba(245, 166, 35, 0.7) solid; text-align: center; border-radius: 40px;">
                
                <div class="modal-header" style="text-align: center; margin: auto; border-style:none; padding-bottom: 0;">
                    <h2 class="modal-title" id="exampleModalLongTitle" style="display: inline-block">Save confirmation</h2>
                </div>

                <div class="modal-body" style="font-size: 30px;">
                    <hr/>
                    Do you want to add this product?
                    <hr/>
                </div>

                <div class="modal-footer" style="text-align: center; width: 100%; border-style:none; padding-top:0">
                    <div v-on:click="add_product" style="display: inline-block; font-size: 40px; width: 50%; color: green" data-dismiss="modal" data-toggle="modal" data-target="#add_product_confirmation"><i class="fas fa-check"></i></div>
                    <div style="display: inline-block; font-size: 40px; width: 50%; color: red"  data-dismiss="modal"><i class="fas fa-times"></i></div>  
                 </div>
                
                </div>

            </div>
        </div>

        <form>
            <div class="top" style="height: 200px;">
                <div class="container" style="background-image: url('/food.jpg')">

                    <div class="row">
                        <div class="col">
                            <div class="krug stroke" :style="{ backgroundImage: `url(${this.url})`}"></div>
                        </div>

                        <div class="col stroke" >
                            <div class="main_info">
                                <h2><input type=text v-model=title></h2>
                                <p>Price: <input type=text v-model=price style="height:30px;width:55%"> $</p>

                                <p>Times ordered:</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="main">
                <div class="info_box stroke" style="text-align: center">
                    <select v-model="type" style="margin-right: 20px">
                        <option disabled value="">Type</option>
                        <option>Food</option>
                        <option>Drinks</option>
                    </select>

                    <select v-if="type == 'Food'" v-model="category">
                        <option disabled value="">Category</option>
                        <option>Appetizer</option>
                        <option>Main course</option>
                        <option>Dessert</option>
                    </select>
                    <select v-else v-model="category">
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
                    <textarea v-model=description></textarea>
                </div><br>

                <div class="info_box stroke" >
                    <h3 class="underline">Ingredients</h3>
                    <textarea v-model=ingredients></textarea>
                </div><br>

                <div class="info_box stroke">
                    <h3 class="underline">Nutrition facts</h3>
                    <table>
                        <tr>
                            <th>Energy value</th>
                            <th><input value=text v-model="energy_value" style="width:80%;"> kcal</th>
                        </tr>
                        <tr>
                            <td>Carbohydrates</td>
                            <td><input value=text v-model="carbohydrates" style="width:80%;"> g</td>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <td><input value=text v-model="protein" style="width:80%;"> g</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td><input value=text v-model="fat" style="width:80%;"> g</td>
                        </tr>
                        <tr>
                            <td>Vitamin A</td>
                            <td><input value=text v-model="vitamin_a" style="width:80%;"> mg</td>
                        </tr>
                        <tr>
                            <td>Vitamin C</td>
                            <td><input value=text v-model="vitamin_c" style="width:80%;"> mg</td>
                        </tr>
                        <tr>
                            <td>Calcium</td>
                            <td><input value=text v-model="calcium" style="width:80%;"> mg</td>
                        </tr>
                        <tr>
                            <td>Zinc</td>
                            <td><input value=text v-model="zinc" style="width:80%;"> mg</td>
                        </tr>
                    </table>
                </div><br>
        
            </div>

            <div class="bottom_buttons">
                <button type="button" class="order order_only stroke" data-toggle="modal" data-target="#add_product">Save changes</button>
            </div>
        </form>
    </div>
</template>

<script>
    import store from '@/store.js'

    export default {
        data(){
            return{
                title: '',
                
                price: '',
                url: '',

                category: '',
                type: '',

                ingredients: '',
                description: '',

                energy_value: '',
                carbohydrates: '',
                protein: '',
                fat: '',
                vitamin_a: '',
                vitamin_c: '',
                calcium: '',
                zinc: ''
            }
        },
        methods:{
            add_product(){
                db.collection("products").add({
                    title: this.title,
                    
                    price: this.price,
                    url: this.url,

                    category: this.category,

                    ingredients: this.ingredients,
                    description: this.description,

                    energy_value: this.energy_value,
                    carbohydrates: this.carbohydrates,
                    protein: this.protein,
                    fat: this.fat,
                    vitamin_a: this.vitamin_a,
                    vitamin_c: this.vitamin_c,
                    calcium: this.calcium,
                    zinc: this.zinc,
                });                
            }
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