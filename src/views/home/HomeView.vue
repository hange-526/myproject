<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import homeHeader from './components/homeHeader.vue'
import homeSwiper from './components/homeSwiper.vue'

export default {
  name: 'HomeView',
  components:{homeHeader,homeSwiper}
}
</script>
<style>

</style>