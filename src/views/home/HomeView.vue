<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import homeHeader from './components/homeHeader.vue'
import homeSwiper from './components/homeSwiper.vue'
import homeIcons from './components/homeIcons.vue'

export default {
  name: 'HomeView',
  components:{homeHeader,homeSwiper,homeIcons}
}
</script>
<style>

</style>