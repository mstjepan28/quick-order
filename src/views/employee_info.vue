<template>
    <div class="employee_info">
         <div style="
            background: red;
            widht: 100%;
            height: 100px;
         "></div>
    </div>
</template>

<script>
    import store from '@/store.js'
    import 'vue-croppa/dist/vue-croppa.css'

    export default {
        data(){
            return{
                id: this.$route.params.id,
                user_info: {},
                store
            }
        },
        methods:{
                  
        },
        mounted(){
            this.user_info = store.users.filter(user => user.id == this.id)[0];
            console.log(this.user_info)
        },
    }
</script>

<style scoped>
    *:focus{
        outline: none;
    }
    .employee_info{
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