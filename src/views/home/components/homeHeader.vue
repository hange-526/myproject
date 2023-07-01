<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            {{this.city}}<span class="iconfont arrow-icon">&#xeb6d;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:"HomeHeader",
        props:["city"]
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header
    display: flex
    line-height: .86rem
    background:$bgColor
    color: #fff
    .header-left
        width: .64rem
        float: left
        .back-icon
            font-size: .4rem
            text-align: center
    .header-input
        padding-left: .2rem
        flex: 1
        margin-top: .12rem
        margin-left: .2rem
        height: .62rem
        line-height: .62rem
        background: #fff
        color: #ccc
        border-radius: .1rem
    .header-right
        width: 1.24rem
        float: right
        text-align: center
        .arrow-icon
            font-size: .24rem
</style>