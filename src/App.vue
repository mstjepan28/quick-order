<template>
  <div id="app">
    <!--Call-the-Waiter--------------------------------------------------->
    <div class="modal fade" id="call_confirmation" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document" >
        
        <div class="modal-content stroke" style="background: #343434; border: 2px rgba(245, 166, 35, 0.7) solid; text-align: center; border-radius: 40px;">
          
          <div class="modal-body" style="font-size: 30px; padding-bottom: 0">
            A Waiter has been notified and will arive shortly!
            <hr/>
            <div data-dismiss="modal">Ok</div>
          </div>
          
        </div>

      </div>
    </div>
    <div class="modal fade" id="call_the_Waiter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document" >
        
        <div class="modal-content stroke" style="background: #343434; border: 2px rgba(245, 166, 35, 0.7) solid; text-align: center; border-radius: 40px;">
          
          <div class="modal-header" style="text-align: center; margin: auto; border-style:none;;">
            <h2 class="modal-title" id="exampleModalLongTitle" style="display: inline-block">Select one of the options:</h2>  
          </div>

          <div class="modal-body" style="font-size: 30px; padding-bottom: 0">
            <hr/>
            <div v-on:click="call_the_Waiter('Service / Help')" class="mb-2" style="cursor:pointer;" data-toggle="modal" data-dismiss="modal" data-target="#call_confirmation">Service / Help</div>
            <div v-on:click="call_the_Waiter('Bring the bill')" class="mb-2" style="cursor:pointer;" data-toggle="modal" data-dismiss="modal" data-target="#call_confirmation">Bring the bill</div>
            <div v-on:click="call_the_Waiter('Complaint')" class="mb-2" style="cursor:pointer;" data-toggle="modal" data-dismiss="modal" data-target="#call_confirmation">Complaint</div>
            <div v-on:click="call_the_Waiter('Other')" style="cursor:pointer;" data-toggle="modal" data-dismiss="modal" data-target="#call_confirmation">Other</div>
            <hr/>
          </div>

          <div class="modal-body" style="font-size: 30px; padding-top: 0; cursor:pointer;">
            <div data-dismiss="modal">Close</div>
          </div>
          
        </div>

      </div>
    </div>

    <!--Navbar--------------------------------------------------->
    <nav v-if="this.$route.name !== 'login'" class="navbar navbar-expand-lg navbar-dark bg-dark">
     
      <div v-if="this.$route.name !== 'main_menu'" v-on:click="go_back" class="back_button">
        <i class="fas fa-arrow-left stroke" style="font-size: 25px"></i>
      </div>

      <router-link to="/" class="navbar-brand stroke">
        <img src="/icon.ico" class="icon"> Quick order
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <!--------------------------------------------------------------------------------------->          
          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/" class="nav-link"> Main menu </router-link>
          </li>

        <!--Menadzer------------------------------------------------------------------------------------->
          <li v-if="this.position == 'Manager'" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/statistics" class="nav-link"> Statistics </router-link>
          </li>

          <li v-if="this.position == 'Manager'" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/orders/1" class="nav-link"> Orders history </router-link>
          </li>

          <li v-if="this.position == 'Manager'" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/employees" class="nav-link"> Employees </router-link>
          </li>

          <li v-if="this.position == 'Manager'" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/products" class="nav-link"> Products </router-link>
          </li>
                    
        <!--Konobar------------------------------------------------------------------------------------->
          <li v-if="this.position == 'Waiter'" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/calls" class="nav-link"> Calls </router-link>
          </li>

        <!--Musterija-Konobar------------------------------------------------------------------------------------->          
          <li v-if="this.position == 'Waiter'" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/calls" class="nav-link"> Calls </router-link>
          </li>

          <li v-if="this.position == 'Waiter' || this.position == 'Table'" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/food" class="nav-link"> Food </router-link>
          </li>

          <li v-if="this.position == 'Waiter' || this.position == 'Table'" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/drinks" class="nav-link"> Drinks </router-link>
          </li>

          <li v-if="this.position == 'Waiter' || this.position == 'Table'" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/most_ordered" class="nav-link"> Most ordered </router-link>
          </li>

          <li v-if="this.position == 'Waiter' || this.position == 'Table'" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/my_order" class="nav-link"> My order </router-link>
          </li>

          <li v-if="this.position == 'Table'" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/order_status" class="nav-link"> Order status </router-link>
          </li>

        <!--Misc------------------------------------------------------------------------------------->
          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/help" class="nav-link"> Help </router-link>
          </li>

          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/terms_conditions" class="nav-link"> Terms and conditions </router-link>
          </li>
          
        </ul>

        <span>
          <a @click="logout" class="btn btn-info my-2 my-sm-0 mr-2" href="#">Logout</a>
        </span>

      </div>
    </nav>

    <div class="routed_page">
      <router-view/>
    </div>

    <div v-if="this.$route.name !== 'login' && this.$route.name !== 'my_order' && this.position == 'Table'" class="bottom_buttons" >
        <button type="button" class="call call_only stroke" data-toggle="modal" data-target="#call_the_Waiter">Call Waiter</button>
    </div> 

  </div>
</template>

<script>
  import store from '@/store.js'

  export default {
    data () {
      return store;
    },
    methods: {
      logout(){
        this.detach_listeners();
        firebase.auth().signOut()
      },
      go_back(){
        return this.$router.go(-1);
      },
      call_the_Waiter(request){
        db.collection("waiter_calls").add({
            table: this.userEmail, 
            request: request,
            date: this.current_date(),
            time: this.current_time(),
            call_state: 'Available', 
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });  
      },
      get_data(){
        //Podatke ne pozivamo unutar mounter jer bi se oni zahtjevali pri loginu ali se nebi dobili jer korisnik koji nije prijavljen nema pristup
        //podacima sa firebase-a. Posto se mounted pokrece samo pri otvaranju stranice trebali bi refreshati stranicu nakon ucitavanja da bi se mi imali te podatke
        //Kada ih dohvacamo ovako preko funkcije, mozemo ih zatraziti tek nakon smo se prijavili

        //data_fetched koristimo da nebi došlo do povlačenja podataka više od jednom
        if(!store.data_fetched){
          //Dohvacanje proizvoda
          store.product_listener = db.collection("products").orderBy("title").onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type === "added" || change.type === "modified"){
                  const data = change.doc.data()
                  this.cards.unshift({
                    id: change.doc.id,
                    
                    title: data.title,
                    price: data.price,
                    url: data.url,
                    times_ordered: data.times_ordered,
                    counter: 0,

                    category: data.category,
                    type: data.type,

                    ingredients: data.ingredients,
                    description: data.description, 

                    energy_value: data.energy_value,
                    carbohydrates: data.carbohydrates,
                    protein: data.protein,
                    fat: data.fat,
                    vitamin_a: data.vitamin_a,
                    vitamin_c: data.vitamin_c,
                    calcium: data.calcium,
                    zinc: data.zinc,           
                  })
                }
            });
          });
          //Dohvacanje narudzbi
          store.orders_listener = db.collection("orders").orderBy("time").onSnapshot(snapshot => {
              snapshot.docChanges().forEach(change => {
                  if(change.type === "added"){
                      const data = change.doc.data()
                      if(data.food != null){
                          store.order_cards.push({
                              id: change.doc.id,
                              table: data.table,
                              price: data.price,
                              paid: data.paid,
                              date: data.date,
                              time: data.time,
                              note: data.note,
                              feedback: data.feedback,
                              food: data.food,
                              drinks: data.drinks
                          })                                      
                      }

                  }
              });
          });
          //Dohvacanje poziva korisnika za konobara
          store.waiter_calls_listener = db.collection("waiter_calls").orderBy("time").onSnapshot(snapshot => {
              snapshot.docChanges().forEach(change => {
                  if (change.type === "added"){
                      const data = change.doc.data()
                      store.call_cards.push({
                          id: change.doc.id,
                          table: data.table,
                          request: data.request, 
                          date: data.date,
                          time: data.time,
                          call_state: data.call_state,           
                      })

                  }
              });
          });
          //Dohvacanje poziva kuhara i barmena za konobara
          store.staff_calls_listener = db.collection("staff_calls").orderBy("time").onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === "added"){
                    const data = change.doc.data()
                    store.call_cards_staff.push({ 
                      id: change.doc.id,
                      order_id: data.order_id,
                      table: data.table,
                      sent_by: data.sent_by,
                      call_state: data.call_state,
                      time: data.time,
                      date: data.date        
                    })
                }
              });
          });
          //Dohvacanje statistike     
          store.statistics_listener = db.collection("statistics").onSnapshot(snapshot =>{
            snapshot.docChanges().forEach(change => {
              if(change.type === 'added'){
                const data = change.doc.data()
                store.statistics.id = change.doc.id;
                store.statistics.hour_price = data.hour_price;
                store.statistics.hour_orders = data.hour_orders;
                store.statistics.day_orders = data.day_orders;
                store.statistics.day_price = data.day_price;
              }
            })
          });
          //Dohvacanje korisnika
          store.users_listener = db.collection("users").onSnapshot(snapshot =>{        
            snapshot.docChanges().forEach(change => {
              if(change.type === 'added' || change.type === "modified"){
                const data = change.doc.data()
                store.users.push({
                  id: change.doc.id,
                  email: data.email,
                  //password: data.password,
                  photo_url: data.photo_url,

                  full_name: data.full_name,
                  date_of_birth: data.date_of_birth,
                  phone: data.phone,
                  adress: data.adress,
                  city: data.city,
                  postal_code: data.postal_code,

                  position: data.position,
                  contract: data.contract,
                  wage: data.wage,

                  added: data.added,
                  last_login: data.last_login,
                  currently_active: data.currently_active,
                  active: data.active,
                  deactivated: data.deactivated,
                })

              }
            })
          })
          store.data_fetched = true;
        }
      },
      detach_listeners(){
        store.product_listener();
        store.orders_listener();
        store.waiter_calls_listener();
        store.staff_calls_listener();
        store.statistics_listener();
        store.users_listener();
      }
    },
    mounted(){
      //Dohvacanje korisnika
      firebase.auth().onAuthStateChanged(user => {
        if(user){
          db.collection('users').doc(user.uid).get().then(doc =>{
            store.position = doc.data().position;
          })
          .catch(error => {
            console.log(store.position)
          })
          
          this.authenticated = true;
          this.userId = user.uid;
          this.userEmail = user.email; 

          this.get_data();

          if(this.$route.name == 'login') 
            this.$router.push({name:'main_menu'});
        }
        else{
          this.authenticated = false;
          
          //Ako stavimo != onda ne radi
          if(this.$route.name == 'login' || this.$route.name == 'add_employee'){}
          else
            this.$router.push({name:'login'})
      
        }
      });      
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    
  }
  .icon{
    height:30px; 
    width:30px;

    position: relative;
    top: -2px;
  }
  .back_button{
    margin: 0 25px 0 5px;
  }

  .nav-item{
    font-size: 20px;
    font-weight: bold;
    text-shadow: -0.2px 0 white, 0 -0.2px white, -0.1px 0 white, 0 -0.2px white;

  }
  .navbar{
    top: 0px;
    width: 100%;
    position: fixed;

    border: 1px rgba(245, 166, 35, 0.7) solid; 
  }
  .routed_page{
    margin-top: 56px;
  }
  nav{
    z-index: 1000;
  }
</style>
