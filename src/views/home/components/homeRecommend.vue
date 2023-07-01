<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item in list" :key="item.id">
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
        props:["list"]
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