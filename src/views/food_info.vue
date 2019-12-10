<template>
    <div class="food_info">
        <div class="top">
            <div class="container">

                <div class="row">
                    <div class="col">
                        <div class="krug stroke"></div>
                    </div>

                    <div class="col stroke">
                        <h3>{{ this.title }}</h3>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['info'],
    }
</script>

<style scoped>

</style>