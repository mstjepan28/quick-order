<template>
    <div class="add_employee">
        <!--Save info--------------------------------------------------->
        <div class="modal fade" id="save_confirmation" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document" >
                
                <div class="modal-content stroke" style="background: #343434; border: 2px rgba(245, 166, 35, 0.7) solid; text-align: center; border-radius: 40px;">            
                    <div class="modal-body" style="font-size: 30px; padding-bottom: 0">
                        Info saved
                        <hr/>
                        <div data-dismiss="modal">Ok</div>
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
                    <div v-on:click="add_employee" style="display: inline-block; font-size: 40px; width: 50%; color: green" data-dismiss="modal" data-toggle="modal" data-target="#save_confirmation"><i class="fas fa-check"></i></div>
                    <div style="display: inline-block; font-size: 40px; width: 50%; color: red"  data-dismiss="modal"><i class="fas fa-times"></i></div>  
                 </div>
                
                </div>

            </div>
        </div>

        <div class="container">
            <div class="row top">
                <div class="col">
                    <croppa v-model="photo_url"
                        :width="200"
                        :height="200"
                        placeholder="Upload image"
                        placeholder-color="white"
                        :placeholder-font-size="20"
                        canvas-color="transparent"
                        :show-remove-button="true"
                        remove-button-color="rgba(245, 166, 35, 0.7)"
                    >
                    </croppa>
                </div>

                <div class="col">
                    <h3 class="stroke underline info">Full name:</h3><input type=text class="input_box" v-model=full_name>
                    <h3 class="stroke underline info">Date of birth:</h3><input type=date class="input_box" v-model=date_of_birth>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h3 class="stroke underline info">Phone:</h3><input type=tel class="input_box" placeholder="123-4567-890" v-model=phone>
                    <h3 class="stroke underline info">Adress:</h3><input type=text class="input_box" v-model=adress>
                    <h3 class="stroke underline info">City:</h3><input type=text class="input_box" v-model=city>
                    <h3 class="stroke underline info">Postal code:</h3><input type=number class="input_box" v-model=postal_code>

                    <hr class="mb-5 mt-5">

                    <h3 class="stroke underline info">Username:</h3><input type=text class="input_box" v-model=username>
                    <h3 class="stroke underline info">E-Mail:</h3><input type=email class="input_box" v-model=email>
                    <h3 class="stroke underline info">Password:</h3><input type=text class="input_box" v-model=password>

                    <hr class="mb-5 mt-5">
                    
                    <div class="stroke" style="text-align: center">
                        <select v-model="position" style="margin-right: 20px">
                            <option disabled value="">Position</option>
                            <option>Waiter</option>
                            <option>Barmen</option>
                            <option>Chef</option>
                            <option>Manager</option>
                        </select>

                        <select v-model="contract">
                            <option disabled value="">Contract</option>
                            <option>Permanent employment</option>
                            <option>Fixed-term</option>
                            <option>Casual employment</option>
                        </select>                                                
                    </div><br>

                    <h3 class="stroke underline info">Wage:</h3><input type=text class="input_box" v-model=wage>
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
                id: null,
                username: null,
                email: null,
                password: null,
                photo_url: null,

                full_name: null,
                date_of_birth: null,
                phone: null,
                adress: null,
                city: null,
                postal_code: null,

                position: 'Position',
                contract: 'Contract',
                wage: null,
            }
        },
        methods:{
            add_employee(){
                var employee_data = this;
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(cred => {
                    this.id = cred.user.uid;
                });
                
                this.photo_url.generateBlob(photo_url => {  
                    //dodati alert ako nema slika a pokusavamo uploadati
                    let imageName = this.email + ".png";   // jpeg za bolju optimizaciju
                    var uploadTask = storage.ref(imageName).put(photo_url);

                    // Listen for state changes, errors, and completion of the upload.
                    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, null,
                        function(error){
                            console.log(erros)
                        },
                        function(){
                            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                                db.collection('users').add({
                                    id: this.id,
                                    username: employee_data.username,
                                    email: employee_data.email,
                                    password: employee_data.password,
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

                                    added: store.current_date() + " " + store.current_time(),
                                    last_login: null,
                                    currently_active: false,
                                    active: true,
                                    deactivated: null,                   
                                })
                                .then(function(docRef) {
                                    console.log("Document written with ID: ", docRef.id);
                                })
                                .catch(function(error) {
                                    console.error("Error adding document: ", error);
                                });
                            });  
                        }

                    );
                      
                    
                });                

            },           
        },
        mounted(){
            if(store.position != 'Manager')
                this.$router.push({name:'main_menu'});
        }
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
        height: 300px;

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
        top: 25px;
        
        color: white;

        border: 2px rgba(245, 166, 35, 0.7) solid;
        background: #343434;
    }
    .croppa-container:hover {
        opacity: 1;
    }
</style>