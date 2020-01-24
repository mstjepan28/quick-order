<template>
    <div class="add_employee">
        <!--Save info--------------------------------------------------->
        <div class="modal fade" id="save_confirmation" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                    <h3 class="stroke underline info">Full name:</h3><input type=text class="input_box" v-model=full_name placeholder="John Smith">
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div v-if="store.position != 'Manager'">
                        <h3 class="stroke underline info">Registration code:</h3>
                        <input type=password class="input_box gold" v-model=registration_code_input>
                    </div>
                    <div v-else class="row">
                        <h3 class="stroke underline info">Registration code:</h3><br>
                        <input type=text class="input_box col-7 gold" v-model=store.misc.registration_code><div v-on:click="update_registration_code" class="update_button col-5 stroke">Update code</div>
                    </div>
                    
                    <h3 class="stroke underline info">Date of birth:</h3><input type="date" data-date="" v-model=date_of_birth>
                    <h3 class="stroke underline info">Phone:</h3><input type=tel class="input_box" placeholder="123-4567-890" v-model=phone>
                    <h3 class="stroke underline info">Adress:</h3><input type=text class="input_box" v-model=adress placeholder="2080  Coffman Alley">
                    <h3 class="stroke underline info">City:</h3><input type=text class="input_box" v-model=city placeholder="New York">
                    <h3 class="stroke underline info">Postal code:</h3><input type=number class="input_box" v-model=postal_code placeholder="10000">

                    <hr class="mb-5 mt-5">

                    <h3 class="stroke underline info">E-Mail:</h3><input type=email class="input_box" v-model=email placeholder="johnsmith@gmail.com">
                    <h3 class="stroke underline info">Password:</h3><input type=password class="input_box" v-model=password placeholder="Your password">
                    <h3 class="stroke underline info">Confirm password:</h3><input type=password class="input_box" v-model=confirm_password placeholder="Repate your password">

                    <div v-if="store.position == 'Manager'">
                        <hr class="mb-5 mt-5"> 
                        
                        <div class="stroke" style="text-align: center">
                            <select v-model="position" style="margin-right: 20px">
                                <option disabled value="">Position</option>
                                <option>Waiter</option>
                                <option>Barman</option>
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

                        <h3 class="stroke underline info">Wage:</h3><input type=text class="input_box" v-model=wage placeholder="Wage of the employee">
                        
                                                
                    </div>
                    
                </div>
            </div>    
        </div>

        <div v-if="this.password != this.confirm_password && this.password != null" class="bottom_buttons">
            <div class="order order_only stroke wrong_passwords">Passwords don't match</div>
        </div>
        <div v-else-if="store.position == 'Manager'" class="bottom_buttons">
            <button type=button class="order order_only stroke" data-toggle="modal" data-target="#save_employee">Save changes</button>
        </div>
        <div v-else class="bottom_buttons">
            <button type=button class="order order_only stroke" data-toggle="modal" data-target="#save_employee">Sign up</button>
        </div>                 
    </div>
</template>

<script>
    import store from '@/store.js'
    import 'vue-croppa/dist/vue-croppa.css'
    
    export default {
        data(){
            return{
                store,

                id: null,
                email: null,
                password: null,
                photo_url: null,

                full_name: null,
                date_of_birth: null,
                phone: null,
                adress: null,
                city: null,
                postal_code: null,

                position: '',
                contract: '',
                wage: null,
                
                confirm_password: '',
                registration_code_input: '',
            }
        },
        methods:{
            add_employee(){
                if(this.check_registration_code()){
                    var employee_data = this;
                    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(cred => {
                        employee_data.id = cred.user.uid;

                        employee_data.photo_url.generateBlob(photo_url => {  
                            //dodati alert ako nema slika a pokusavamo uploadati
                            let imageName = this.email + ".png";   // jpeg za bolju optimizaciju
                            var uploadTask = storage.ref(imageName).put(photo_url);

                            // Listen for state changes, errors, and completion of the upload.
                            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, null,
                                function(error){
                                    console.log(error)
                                },
                                function(){
                                    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                                        db.collection('users').doc(employee_data.id).set({
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
                                        })
                                        .then(function(docRef) {
                                            console.log("Document written with ID: ", employee_data.id);
                                        })
                                        .catch(function(error) {
                                            console.error("Error adding document: ", error);
                                        });
                                    });  
                                }

                            );
                            
                            
                        });   
                    });
                }
                else{
                    
                }
            },
            update_registration_code(){
                if(this.store.misc.registration_code != ''){
                    if(this.store.misc.id){
                        db.collection('misc').doc(this.store.misc.id).update({
                            registration_code: this.store.misc.registration_code
                        })                    
                    }
                    else{
                        db.collection('misc').add({
                            registration_code: this.store.misc.registration_code
                        })                     
                    }                    
                }

            },
            check_registration_code(){
                if(this.store.misc.registration_code === this.registration_code_input){
                    return true;
                }
                else{
                    console.log("Registration code wrong, failed to add employee")
                    return false;
                }
            },
            check_password(){
                if(this.password == this.confirm_password && this.password != '') return true;
                else return false
            }        
        },
        mounted(){
            if(!this.store.misc.id){
                store.listeners[6] = db.collection("misc").onSnapshot(snapshot =>{
                    snapshot.docChanges().forEach(change => {
                    if(change.type === 'added'){
                        const data = change.doc.data()

                        store.misc.id = change.doc.id;
                        store.misc.registration_code = data.registration_code;
                    }
                    })
                });
            }

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
    .update_button{
        font-size: 20px;
        color: white;

        cursor: pointer;

        border-radius: 5px;
        border: 2px rgba(245, 166, 35, 0.7) solid;

        background: #343434;
    }
    .gold{
        color:rgb(245, 166, 35);
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
    .wrong_passwords{
        background:rgba(255, 0, 0, 0.5)
    }
    input[type=date]::-webkit-inner-spin-button, 
    input[type=date]::-webkit-outer-spin-button { 
        display:none;
    }
    input[type=date]::-webkit-calendar-picker-indicator { 
        display:none;
    }
    input[type="date"]::-webkit-clear-button {
         display: none;
    }
</style>