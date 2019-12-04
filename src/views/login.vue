<template>
    <div class="login">
        <h1 class="stroke">Quick Order</h1>
        <form>
            <div class="username">
                <i class="far fa-user"></i>
                <input type="text" placeholder="username...">
            </div><br>

            <div class="password">
                <i class="fas fa-lock"></i>
                <input type="text" placeholder="password...">
            </div><br>

            <router-link to="/main_menu"><button type="submit" class="stroke">Log in</button></router-link>
        </form>
    </div>
</template>

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
        width: 225px;

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

    .username, .password{
        width: 80%;

        padding: 10px;

        display: inline-block;
        margin: 10px;

        border:1px rgba(245, 166, 35, 1) solid;
    }
</style>