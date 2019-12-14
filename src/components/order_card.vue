<template>
    <div class="call_card stroke">
        <router-link v-bind:to="'/order_info/' + info.id">
            <hr class="line"/>
            Table #{{info.id}}
            <hr class="mid-line"/>
            Order
            <hr class="line"/>
        </router-link>
    </div>
</template>

<script>
    
    export default {
        props: ['info'],
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
    .mid-line{
        border-top: 3px rgba(245, 166, 35, 0.7) solid;
    }
    .line{
        display: block;
        height: 1px;
        border: 0;
        border-top: 2px rgba(245, 166, 35, 0.7) solid;
        margin: 1em 0;
        padding: 0;
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