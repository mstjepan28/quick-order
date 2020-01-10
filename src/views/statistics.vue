<template>
    <div class="statistics">
        <pure-vue-chart
            :points=[1,2,3]
            :show-y-axis="true"
            :show-x-axis="true"
            :width="100"
            :height="200"
        />
    </div>
</template>

<script>
    import store from '@/store.js'
    import PureVueChart from 'pure-vue-chart';

    export default {
        data(){
            return{
                statistics_price: store.statistics_price,
                statistics_counter: store.statistics_counter
            }
        },
        mounted(){
            if(store.statistics_price.length <= 0 && store.statistics_counter.length <= 0){
                console.log(store.statistics_price + " " + store.statistics_counter)
            }
            else{
                console.log("Data already retrived")
            }
        },
        components: {
            PureVueChart,
        },
    }
</script>

<style scoped>
    .pure-vue-bar-chart rect {
        fill: white
    }
    .pure-vue-bar-chart text {
        font: 15px sans-serif
    }
</style>