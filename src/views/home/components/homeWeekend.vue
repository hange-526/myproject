<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item in list" :key="item.id">
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
        props:["list"]
    }
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
    line-height: .8rem
    background: #eee
    text-indent: .2rem  //文本缩进
.item-img-wrapper
    padding-bottom: 37.09%
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