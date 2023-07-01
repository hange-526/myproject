<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">  <!-- v-if的含义是，如果传过来的数组不是空数组的时候才渲染这个组件 -->
            <swiper-slide v-for="item in list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name:"homeSwiper",
        props:["list"],
        data (){
            return {
                swiperOption:{
                    pagination:'.swiper-pagination',
                    loop:true
                }
            }
        },
        computed:{
            showSwiper(){
                return this.list.length
            }
        }
    }
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff
.wrapper
    width:100%
    height:0
    overflow: hidden
    padding-bottom: 30.47%
    background: #eee
    .swiper-img
        width:100%
</style>