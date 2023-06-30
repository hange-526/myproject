<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import homeHeader from './components/homeHeader.vue'
import homeSwiper from './components/homeSwiper.vue'
import homeIcons from './components/homeIcons.vue'
import homeRecommend from './components/homeRecommend.vue'
import homeWeekend from './components/homeWeekend.vue'

export default {
  name: 'HomeView',
  components:{homeHeader,homeSwiper,homeIcons,homeRecommend,homeWeekend}
}
</script>
<style>

</style>