<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
        <city-alphabet :cities="cities"
        @change="handleLetterChange"></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import cityHeader from './components/cityHeader.vue';
import citySearch from './components/citySearch.vue';
import cityList from './components/cityList.vue';
import cityAlphabet from './components/cityAlphabet.vue';

    export default {
        name:"cityView",
        components:{cityHeader,citySearch,cityList,cityAlphabet},
        data(){
            return {
                cities:{},
                hotCities:[],
                letter:""
            }
        },
        methods:{
            getCityInfo(){
                axios.get('/api/city.json')
                .then(this.handleGetCityInfoSucc)
            },
            handleGetCityInfoSucc(res){
                res=res.data
                if(res.ret&&res.data){
                    const data=res.data
                    this.cities=data.cities
                    this.hotCities=data.hotCities
                }
            },
            handleLetterChange(letter){
                this.letter=letter
            }
        },
        mounted(){
            this.getCityInfo()
        }
    }
</script>

<style lang="stylus" scoped>

</style>