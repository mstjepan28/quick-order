<template>
  <div id="app">
    <!----------------------------------------------------->
    <div class="modal fade" id="place_order" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document" >
        
        <div class="modal-content stroke" style="background: #343434; border: 2px rgba(245, 166, 35, 0.7) solid; text-align: center; border-radius: 40px;">
          
          <div class="modal-header" style="text-align: center; margin: auto; border-style:none;;">
            <h2 class="modal-title" id="exampleModalLongTitle" style="display: inline-block">Order confirmation</h2>
          </div>

          <div class="modal-body" style="font-size: 30px;">
            Do you want to confirm your order?
          </div>

          <div class="modal-footer" style="text-align: center; width: 100%; border-style:none;">
            <div style="display: inline-block; font-size: 40px; width: 50%; color: green" data-dismiss="modal"><i class="fas fa-check"></i></div>
            <div style="display: inline-block; font-size: 40px; width: 50%; color: red"   data-dismiss="modal"><i class="fas fa-times"></i></div>
          </div>
          
        </div>

      </div>
    </div>

    <!----------------------------------------------------->
    <div class="modal fade" id="call_the_waiter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document" >
        
        <div class="modal-content stroke" style="background: #343434; border: 2px rgba(245, 166, 35, 0.7) solid; text-align: center; border-radius: 40px;">
          
          <div class="modal-header" style="text-align: center; margin: auto; border-style:none;;">
            <h2 class="modal-title" id="exampleModalLongTitle" style="display: inline-block">Order confirmation</h2>
          </div>

          <div class="modal-body" style="font-size: 30px;">
            Do you want to confirm your order?
          </div>

          <div class="modal-footer" style="text-align: center; width: 100%; border-style:none;">
            <div style="display: inline-block; font-size: 40px; width: 50%; color: green" data-dismiss="modal"><i class="fas fa-check"></i></div>
            <div style="display: inline-block; font-size: 40px; width: 50%; color: red"   data-dismiss="modal"><i class="fas fa-times"></i></div>
          </div>
          
        </div>

      </div>
    </div>

    <!----------------------------------------------------->
    <nav v-if="this.$route.name !== 'login'" class="navbar navbar-expand-lg navbar-dark bg-dark">
      <!--
      <router-link v-if="this.$route.name !== 'main_menu'" to="back" class="stroke mr-">
        <i class="fas fa-arrow-left stroke" style="font-size: 25px"></i>
      </router-link>
      -->
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
        <!--------------------------------------------------------------------------------------->
          <li v-if="this.position == 'chef' || this.position == 'barmen'" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/orders" class="nav-link"> Orders </router-link>
          </li>

          <li v-if="this.position == 'chef' || this.position == 'barmen'" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/being_prepared" class="nav-link"> Being prepared </router-link>
          </li>
          
          <li v-if="this.position == 'chef' || this.position == 'barmen'" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/done" class="nav-link"> Done </router-link>
          </li>
        <!--------------------------------------------------------------------------------------->               
          <li v-if="this.position == 'waiter'" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/calls" class="nav-link"> Calls </router-link>
          </li>

          <li v-if="this.position == 'waiter' || this.position == 'Table'" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/food" class="nav-link"> Food </router-link>
          </li>

          <li v-if="this.position == 'waiter' || this.position == 'Table'" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/drinks" class="nav-link"> Drinks </router-link>
          </li>

          <li v-if="this.position == 'waiter' || this.position == 'Table'" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/most_ordered" class="nav-link"> Most ordered </router-link>
          </li>

          <li v-if="this.position == 'waiter' || this.position == 'Table'" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/my_order" class="nav-link"> My order </router-link>
          </li>
        <!--------------------------------------------------------------------------------------->
          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/help" class="nav-link"> Help </router-link>
          </li>

          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/terms_conditions" class="nav-link"> Terms and conditions </router-link>
          </li>
          
        </ul>

        <span>
          {{userEmail + "  -  " + position}}
          <a @click="logout" class="btn btn-info my-2 my-sm-0 mr-2" href="#">Logout</a>
        </span>

      </div>
    </nav>

    <div class="routed_page">
      <router-view/>
    </div>

    <div v-if="this.position == 'waiter' && this.$route.name !== 'login'" class="bottom_buttons" >
      <button type="button" class="order order_only stroke" data-toggle="modal" data-target="#place_order">Place order</button>
    </div>
    <div v-else-if="this.$route.name !== 'login' && this.position == 'Table'" class="bottom_buttons" >
      <button type="button" class="order stroke" data-toggle="modal" data-target="#place_order">Place order</button>
      <button type="button" class="call stroke"  data-toggle="modal" data-target="#call_the_waiter">Call waiter</button>
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
      logout() {
        firebase.auth().signOut()
      },

    },
    mounted() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          const user_data = db.collection('users').doc(user.uid);

          console.log("User is loged in " + user.email);
          this.authenticated = true;
          this.userEmail = user.email
          user_data.get().then((doc) =>{
            this.position = doc.data().position
          })  
          if(this.$route.name !== 'main_menu') this.$router.push({name:'main_menu'})
        }
        else{
          console.log("User is loged out");
          this.authenticated = false;
          if(this.$route.name !== 'login') this.$router.push({name:'login'})
        }
      });
      db.collection("products").orderBy("title").limit(30).onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
            if (change.type === "added") {
              const data = change.doc.data()
              this.cards.unshift({
                id: change.doc.id,
                title: data.title,
                description: data.description, 
                url: data.url,
                type: data.type,
                category: data.category,
                counter: data.counter,
                times_ordered: data.times_ordered                
              })
            }
        });
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

  .link_state{
  padding: 30px;

  a {
    &.router-link-exact-active {
      color: black;
    }
  }

}
</style>
