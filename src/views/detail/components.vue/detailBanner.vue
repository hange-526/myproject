<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" alt="">
            <div class="banner-info">
                <div class="banner-title">{{this.sightName}}</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xec7f;</span>
                    {{this.gallaryImgs.length}}</div>
            </div>
        </div>
        <common-gallary :imgs="gallaryImgs" v-show="showGallary"
        @close="handleGallaryClose"></common-gallary>
    </div>
</template>

<script> 
import commonGallary from 'common/gallary/commonGallary.vue'
    export default {
        name:"detailBanner",
        props:["sightName","bannerImg","gallaryImgs"],
        components:{commonGallary},
        data(){
            return {
                showGallary:false
            }
        },
        methods:{
            handleBannerClick(){
                this.showGallary=true
            },
            handleGallaryClose(){
                this.showGallary=false
            }
        }
    }
</script>

<style lang="stylus" scoped>
.banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
        width: 100%
    .banner-info
        display: flex
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height: .6rem
        color: #fff
        background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8))
        .banner-title
            flex: 1
            font-size: .32rem
            padding: 0 .2rem
        .banner-number
            margin-top: .14rem
            padding: 0 .4rem
            line-height: .32rem
            height: .32rem
            border-radius:  .2rem
            background: rgba(0,0,0,.8)
            font-size: .24rem
            .banner-icon
                font-size: .24rem
</style>