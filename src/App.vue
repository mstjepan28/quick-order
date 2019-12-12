<template>
  <div id="app">
    <nav v-if="this.$route.name !== 'login'" class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand stroke">
        <img src="/icon.ico" class="icon"> Quick order
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          
          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/" class="nav-link"> Main menu </router-link>
          </li>

          <li v-if="this.position == 'waiter'" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/calls" class="nav-link"> Calls </router-link>
          </li>

          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/food" class="nav-link"> Food </router-link>
          </li>

          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/drinks" class="nav-link"> Drinks </router-link>
          </li>

          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/most_ordered" class="nav-link"> Most ordered </router-link>
          </li>

          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/my_order" class="nav-link"> My order </router-link>
          </li>

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
   
    <div v-if="this.position == 'waiter' && this.$route.name !== 'login'" class="buttons" style="margin-top: 75px;">
      <div class="order stroke" style="width: 100%" >Place order</div>
    </div>
    <div v-else-if="this.$route.name !== 'login'" class="buttons" style="margin-top: 100px;">
      <div class="order stroke" >Place order</div>
      <div class="call stroke">Call waiter</div>
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
