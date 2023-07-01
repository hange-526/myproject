<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
    </div>
</template>

<script>
import cityHeader from './components/cityHeader.vue';
import citySearch from './components/citySearch.vue';
import cityList from './components/cityList.vue';

    export default {
        name:"cityView",
        components:{cityHeader,citySearch,cityList}
    }
</script>

<style lang="stylus" scoped>

</style>