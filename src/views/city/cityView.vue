<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
    </div>
</template>

<script>
import cityHeader from './components/cityHeader.vue';
import citySearch from './components/citySearch.vue';

    export default {
        name:"cityView",
        components:{cityHeader,citySearch}
    }
</script>

<style lang="stylus" scoped>

</style>