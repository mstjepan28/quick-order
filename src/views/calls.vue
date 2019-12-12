<template>
    <div class="calls">
        <div class="top">
            <div class="krug"></div>
            <h3>Calls</h3>
        </div>

        <div class="call_cards">
            <callCard v-bind:key="call_cards.id" v-bind:info="call_cards" v-for="call_cards in filtered_cards" />
        </div>


    </div>
</template>

<script>
    import callCard from '@/components/call_card.vue'
    import store from '@/store.js'

    export default {
        data(){
            return store;
        },
        computed: {
            filtered_cards(){
                return this.call_cards//.filter(card => !card.checked)
            },
        },
        name: 'calls',
        components: {
            callCard
        }
    }
</script>

<style scoped>
    .calls{
        text-align: center;
    }
    .top{
        background-size: cover;
        background-image: url('/my_order.jpg');
    }
    .top > h3{
        font-size: 40px;
        text-decoration: underline;

        background: rgba(245, 166, 35, 0.7);
    }    
    .krug{
        background-image: url('/call1.jpg')
    }
    .call_cards{
        width: 350px;

        display: inline-block;
    }
</style>