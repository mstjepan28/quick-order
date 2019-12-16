<template>
    <div class="login">
        <h1 class="stroke">Quick Order</h1>
        <form @submit.prevent="login">
            <div class="username">
                <i class="far fa-user"></i>
                <input v-model="email" type="text" placeholder="e-mail...">
            </div><br>

            <div class="password">
                <i class="fas fa-lock"></i>
                <input v-model="password" type="password" id="hidden_password" placeholder="password...">
                <i class="fas fa-eye" id="password_eye" v-on:click="show_password()"></i>
            </div><br>

            <div class="failed_login"></div><br>

            <button type="submit" class="stroke">Log in</button>
        </form>

        <div style="position: relative; top:50px; height: 25px; width: 50px; display: inline-block">
            <router-link to="/signup" style="background: red;text-align:center;"> Signup </router-link>
        </div>
     

    </div>
</template>

<script>
//<input v-model="password" type="password" id="hidden_password" placeholder="password...">
  export default {
    data(){
      return{
        email: '',
        password: '',
      }
    },
    methods: {
      login(){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
          document.getElementsByClassName("failed_login")[0].innerHTML = "Failed to log in!";
        });
      },
      show_password() {
        let x = document.getElementById("hidden_password");
        
        if (x.type === "password"){
          x.type = "text";
          document.getElementsByClassName("fas fa-eye")[0].className = "fas fa-eye-slash";
        } 
        else{
          x.type = "password";
          document.getElementsByClassName("fas fa-eye-slash")[0].className = "fas fa-eye";
        } 
        
      }
    }
  }
</script>

<style scoped>
    *:focus{
        outline: none;
    }
    .login{
        position: relative;
        top: 25px;

        text-align: center;
    }
    form{
        position: relative;
        top: 25px;
    }
    button{
        width: 100px;
        height: 45px;

        margin-top: 10px;

        color: white;
        font-size: 25px;

        border-radius: 25px;

        background: #343434;
        border: 2px rgba(245, 166, 35, 0.7) solid; 
    }
    input{
        margin-left: 10px;

        color: white;
        background: #2d2d2d;

        border: 0;
        outline: 0;
        border-bottom: 1px white solid;
    }
    i{
        position: relative;
        top: 4px;

        font-size: 23px;
        color:rgba(245, 166, 35, 1)
    }
    .fa-eye, .fa-eye-slash{
      font-size: 20px;
      margin-left: 15px
    }

    .username, .password{
        width: 300px;

        padding: 10px;

        display: inline-block;
        margin: 10px;

        border:1px rgba(245, 166, 35, 1) solid;
    }

    .failed_login{
      display: inline-block;
      color: red;
    }
</style>