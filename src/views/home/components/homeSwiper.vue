<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name:"homeSwiper",
        data (){
            return {
                swiperOption:{
                    pagination:'.swiper-pagination',
                    loop:true
                },
                swiperList:[
                    {
                        id:'0001',
                        imgUrl:'https://ad-dapp-osscp.qunarzz.com/ad_dapp_oss_oper/54cfc34ad8b0a7553e0dc411a8f807e2.jpg'
                    },
                    {
                        id:'0002',
                        imgUrl:'https://ad-dapp-osscp.qunarzz.com/ad_dapp_oss_oper/6f0237182ee000924615f5bc1b5c2d75.jpg'
                    }
                ]
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
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
        width:100%
</style>