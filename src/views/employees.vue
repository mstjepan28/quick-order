<template>
    <div class="employees">
        <div class="top">
            <div class="krug row" style="background-image: url('/mare_krug.jpg'); background-size: 100% 100%; background-repeat: no-repeat;"></div>
            <div class="row options">
                <div class="col stroke" v-on:click="show_main = 'employees'">Employees</div>
                <div class="col stroke" v-on:click="show_main = 'new_employees'">New employees</div>
            </div>
        </div>
        
        <div class="main">
            <div v-if="show_main == 'employees'" class="title stroke">
                <div v-on:click="previous"><i class="fas fa-arrow-left"></i></div>
                {{this.show[this.i]}}
                <div v-on:click="next"><i class="fas fa-arrow-right"></i></div>
            </div>

            <EmployeeCard v-bind:key="card.id" v-bind:info="card" v-for="card in filtered_cards" />
        </div>
        
        <div class="bottom_buttons">
            <router-link to="/add_employee" class="call call_only stroke">Add employee</router-link>     
        </div>        
    </div>
</template>

<script>
    import EmployeeCard from '@/components/employee_card.vue'
    import store from '@/store.js'

    export default {
        data(){
            return{
                i: 0,
                show: ['Waiter', 'Chef', 'Barman', 'Manager'],
                show_main: 'employees',
                users: store.users
            }
        },
        computed:{
            filtered_cards(){
                if(this.show_main == 'employees')
                    return this.users.filter(user => user.position == this.show[this.i] && !(user.wage == undefined || user.wage == null));
                else
                    return this.users.filter(user => user.wage == undefined || user.wage == null);
            }
        },
        methods:{
            next(){
                this.i += 1;
                if(this.i >= this.show.length) this.i = 0;
            },
            previous(){
                this.i -= 1;
                if(this.i < 0) this.i = this.show.length - 1;
            },
        },
        mounted(){
            if(store.position != 'Manager')
                this.$router.push({name:'main_menu'});
        },
        components:{
            EmployeeCard
        }
    }
</script>

<style scoped>
    .top{
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image: url('/employees_background.jpg');        
    }
    .title{
        text-align: center;
    }
    .title > div{
        display: inline-block;
    }
    /*--------------------------------*/
    .options{
        font-size: 20px;
        margin: 0 0;
    }
    .options > .col{
        border-radius: 9px;
        border: 2px rgba(245, 166, 35, 0.7) solid;

        background: rgba(52, 52, 52, 0.7);
    }
</style>