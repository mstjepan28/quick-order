<template>
    <div class="call_card stroke" v-on:click="select_call()">
        <hr class="line"/>
        Table #{{info.id}}
        <hr class="mid-line"/>
        Complaint
        <hr class="line"/>
    </div>
</template>

<script>
    
    export default {
        props: ['info'],
        methods: {
            select_call(){
                if(!this.info.checked){
                    document.getElementsByClassName("call_card")[0].className = "new-call_card";
                    document.getElementsByClassName("line")[0].className = "new-line";
                    document.getElementsByClassName("line")[0].className = "new-line";
                    document.getElementsByClassName("mid-line")[0].className = "new-mid-line";
                    this.info.checked = true;
                }
                /*
                else{
                    document.getElementsByClassName("new-call_card")[0].className = "call_card";
                    document.getElementsByClassName("new-line")[0].className = "line";
                    document.getElementsByClassName("new-line")[0].className = "line";
                    document.getElementsByClassName("new-mid-line")[0].className = "mid-line";
                    this.info.checked = false;
                }
                */
            }
        },
        watch:{

        },
        mounted(){
            if(this.info.checked){
                document.getElementsByClassName("call_card")[0].className = "new-call_card";
                document.getElementsByClassName("line")[0].className = "new-line";
                document.getElementsByClassName("line")[0].className = "new-line";
                document.getElementsByClassName("mid-line")[0].className = "new-mid-line";
            }      
        }
    }
</script>

<style scoped>
    .call_card{
        height: 150px;
        width: 150px;

        display: inline-block;
        margin: 10px;

        font-size: 15px;

        border-radius: 20px;
        border: 2px rgba(245, 166, 35, 0.7) solid; 

        background: #343434;
    }
    .new-mid-line{
        border-top: 3px rgba(25, 187, 0, 0.8) solid;
    }
    .new-line{
        border-top: 2px rgba(25, 187, 0, 0.8) solid;
    }
    .new-call_card{
        height: 150px;
        width: 150px;

        display: inline-block;
        margin: 10px;

        font-size: 15px;

        border-radius: 20px;
        border: 2px rgba(81, 141, 71, 0.8) solid;

        background: #343434;
    }
</style>