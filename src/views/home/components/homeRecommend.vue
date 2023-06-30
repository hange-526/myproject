<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"homeRecommend",
        data(){
            return {
                recommendList:[
                    {
                        id:"0001",
                        imgUrl:"https://imgs.qunarzz.com/p/tts7/2304/a7/a362b7069d977902.jpg_160x160_fc20cd29.jpg",
                        title:"鸽子窝公园",
                        desc:"6人VIP团·全区域可上门接送·精华景区一览无余·省力路线"
                    },
                    {
                        id:"0002",
                        imgUrl:"https://imgs.qunarzz.com/p/tts7/2207/6b/1ec3e866d525a502.jpg_160x160_c16e6d8c.jpg",
                        title:"北戴河渔岛海洋景区",
                        desc:"赠价值200元海滩帐篷免租使用"
                    },
                    {
                        id:"0003",
                        imgUrl:"https://imgs.qunarzz.com/p/tts1/2304/6a/0b8c0c659647c602.jpg_160x160_2360165a.jpg",
                        title:"北戴河仙螺岛",
                        desc:"6人纯玩团，仙螺岛·跨海索道·四项娱乐项目通票+网红阿那亚"
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
.item
    display: flex
    overflow: hidden
    height: 1.9rem
    .item-img
        width: 1.7rem
        height: 1.7rem
        padding: .1rem
    .item-info
        flex: 1
        padding: .1rem
        min-width: 0
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis() 
        .item-desc
            line-height: .4rem
            color: #ddd
            ellipsis()
        .item-button
            background: #ff9300
            padding: .02rem
            border-radius: .06rem
            margin-top: .2rem
            color: #fff
</style>