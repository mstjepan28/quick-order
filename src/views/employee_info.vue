<template>
    <div class="add_employee">
        <!--Save info--------------------------------------------------->
        <div class="modal fade" id="save_confirmation" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document" >
                
                <div class="modal-content stroke" style="background: #343434; border: 2px rgba(245, 166, 35, 0.7) solid; text-align: center; border-radius: 40px;">            
                    <div class="modal-body" style="font-size: 30px; padding-bottom: 0">
                        Info saved
                        <hr/>
                        <!--Nakon dodavanja se vracamo na prosu stranicu-->
                        <div v-on:click="this.$router.go(-1)" data-dismiss="modal">Ok</div>
                    </div>
                </div>

            </div>
        </div>
        <div class="modal fade" id="save_employee" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document" >
                
                <div class="modal-content stroke" style="background: #343434; border: 2px rgba(245, 166, 35, 0.7) solid; text-align: center; border-radius: 40px;">
                
                <div class="modal-header" style="text-align: center; margin: auto; border-style:none; padding-bottom: 0;">
                    <h2 class="modal-title" id="exampleModalLongTitle" style="display: inline-block">Save confirmation</h2>
                </div>

                <div class="modal-body" style="font-size: 30px;">
                    <hr/>
                    Do you want to save?
                    <hr/>
                </div>

                <div class="modal-footer" style="text-align: center; width: 100%; border-style:none; padding-top:0">
                    <div v-on:click="update_employee" style="display: inline-block; font-size: 40px; width: 50%; color: green" data-dismiss="modal" data-toggle="modal" data-target="#save_confirmation"><i class="fas fa-check"></i></div>
                    <div style="display: inline-block; font-size: 40px; width: 50%; color: red"  data-dismiss="modal"><i class="fas fa-times"></i></div>  
                 </div>
                
                </div>

            </div>
        </div>

        <div class="container">
            <div class="row top">
                <div class="col">
                    <croppa v-model="imageData"
                        :width="145"
                        :height="145"
                        placeholder="Upload image"
                        placeholder-color="white"
                        :placeholder-font-size="20"
                        canvas-color="transparent"
                        :show-remove-button="true"
                        remove-button-color="rgba(245, 166, 35, 0.7)"
                        >
                    </croppa> 
                    <h3 class="stroke underline info">Full name:</h3><input type=text class="input_box" v-model=employee_info.full_name>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    
                    <h3 class="stroke underline info">Date of birth:</h3><input type=date class="input_box" v-model=employee_info.date_of_birth>
                    <h3 class="stroke underline info">Phone:</h3><input type=tel class="input_box" placeholder="123-4567-890" v-model=employee_info.phone>
                    <h3 class="stroke underline info">Adress:</h3><input type=text class="input_box" v-model=employee_info.adress>
                    <h3 class="stroke underline info">City:</h3><input type=text class="input_box" v-model=employee_info.city>
                    <h3 class="stroke underline info">Postal code:</h3><input type=number class="input_box" v-model=employee_info.postal_code>

                    <hr class="mb-5 mt-5">

                    <h3 class="stroke underline info">Username:</h3><input type=text class="input_box" v-model=employee_info.username>
                    <h3 class="stroke underline info">E-Mail:</h3><input type=email class="input_box" v-model=employee_info.email>
                    <h3 class="stroke underline info">Password:</h3><input type=text class="input_box" v-model=employee_info.password>

                    <hr class="mb-5 mt-5">
                    
                    <div class="stroke" style="text-align: center">
                        <select v-model="employee_info.position" style="margin-right: 20px">
                            <option disabled value="">Position</option>
                            <option>Waiter</option>
                            <option>Barmen</option>
                            <option>Chef</option>
                            <option>Manager</option>
                        </select>

                        <select v-model="employee_info.contract">
                            <option disabled value="">Contract</option>
                            <option>Permanent employment</option>
                            <option>Fixed-term</option>
                            <option>Casual employment</option>
                        </select>                                                
                    </div><br>

                    <h3 class="stroke underline info">Wage:</h3><input type=text class="input_box" v-model=employee_info.wage>
                </div>
            </div>    
        </div>

        <div class="bottom_buttons">
            <button type=button class="order order_only stroke" data-toggle="modal" data-target="#save_employee">Save changes</button>
        </div>              
    </div>
</template>

<script>
    import store from '@/store.js'
    import 'vue-croppa/dist/vue-croppa.css'

    export default {
        data(){
            return{
                id: this.$route.params.id,
                employee_info: false,
                store,
                imageData: null
            }
        },
        methods:{
            update_employee(){
                var employee_data = this.employee_info;
                
                this.imageData.generateBlob(imageData =>{ 
                    let imageName = employee_data.email + ".png";
                    var uploadTask = storage.ref(imageName).put(imageData);

                    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, null,
                        function(error){
                            console.log(erros)
                        },
                        function(){
                            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                                db.collection("products").doc(employee_data.id).update({
                                    id: employee_data.id,
                                    username: employee_data.username,
                                    //email: employee_data.email,
                                    //password: employee_data.password,
                                    photo_url: downloadURL,

                                    full_name: employee_data.full_name,
                                    date_of_birth: employee_data.date_of_birth,
                                    phone: employee_data.phone,
                                    adress: employee_data.adress,
                                    city: employee_data.city,
                                    postal_code: employee_data.postal_code,

                                    position: employee_data.position,
                                    contract: employee_data.contract,
                                    wage: employee_data.wage,

                                    active: true,
                                    deactivated: null,   
                                })
                                .catch(function(error) {
                                    console.error("Error adding document: ", error);
                                });
                            });  
                        }

                    );
                      
                    
                });

                this.store.users = this.store.users.filter(user => user.id != this.employee_info.id);
            },    
        },
        mounted(){
            this.employee_info = store.users.filter(user => user.id == this.id)[0];
        },
    }
</script>

<style scoped>
    *:focus{
        outline: none;
    }
    .add_employee{
        margin-top: 75px;
        margin-bottom: 25px;
    }
    .top{
        height: 375px;

        border-radius: 5px;
        border: 2px rgba(245, 166, 35, 0.7) solid;

        background-size: cover;
        background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url('/food.jpg');
    }
    .underline{
        margin-bottom: 10px;
    }
    /*--------------------*/
    .info{
        text-align: left;
        width: 100%;
    }
    input{
        height: 40px;
        width: 100%;

        padding-left: 5px;
        font-size: 20px;

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
    }
    /*--------------------*/
    .croppa-container {
        text-align: center;
        position: relative;
        
        top: 45px;

        margin-bottom: 50px;
        
        color: white;

        border: 2px rgba(245, 166, 35, 0.7) solid;
        background: #343434;
    }
    .croppa-container:hover {
        opacity: 1;
    }
</style>