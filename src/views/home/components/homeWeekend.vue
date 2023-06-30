<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"homeWeekend",
        data(){
            return {
                recommendList:[
                    {
                        id:"0001",
                        imgUrl:"https://imgs.qunarzz.com/vs_ceph_b2c_001/777e2137-0a94-4f9d-a588-2dc00d6d06fa.jpg",
                        title:"跟团游",
                        desc:"吉林出发｜长白山北坡二日游｜住宿温泉酒店+游长白山天池+瀑布+地下森林"
                    },
                    {
                        id:"0002",
                        imgUrl:"https://imgs.qunarzz.com/vs_ceph_vs_tts/dac4ebf1-cf08-4f6e-b385-6166e4453163.jpg",
                        title:"北京·一日游",
                        desc:"（任性退·五环内上门接）北京八达岭长城+颐和园+鸟巢纯玩品质跟团一日游"
                    },
                    {
                        id:"0003",
                        imgUrl:"https://imgs.qunarzz.com/vs_ceph_b2c_001/9d839fba-08a0-456f-b597-4f5d3f40b224.jpg",
                        title:"私家团",
                        desc:"长春、长白山北坡2日游｜美人松公园、温泉酒店、长白瀑布、天池、高铁往返"
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
    line-height: .8rem
    background: #eee
    text-indent: .2rem  //文本缩进
    margin-top: .2rem
.item-img-wrapper
    padding-bottom: 33.9%
    height: 0
    overflow: hidden
    .item-img
        width: 100%
.item-info
    padding: .1rem
    .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis() 
    .item-desc
        line-height: .4rem
        color: #ddd
        ellipsis()
</style>