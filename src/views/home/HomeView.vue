<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import homeHeader from './components/homeHeader.vue'
import homeSwiper from './components/homeSwiper.vue'
import homeIcons from './components/homeIcons.vue'
import homeRecommend from './components/homeRecommend.vue'
import homeWeekend from './components/homeWeekend.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components:{homeHeader,homeSwiper,homeIcons,homeRecommend,homeWeekend},
  data(){
    return {
      city:"",
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  methods:{
    getHomeInfo(){
      axios.get('/api/index.json')
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res=res.data
      if(res.ret && res.data){
        const data=res.data
        this.city=data.city
        this.swiperList=data.swiperList
        this.iconList=data.iconList
        this.recommendList=data.recommendList
        this.weekendList=data.weekendList
      }
    }
  },
  mounted(){
    this.getHomeInfo()
  }
}
</script>

<style>

</style>