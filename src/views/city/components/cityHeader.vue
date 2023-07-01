<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name:"cityHeader"
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
    position: relative
    height: $headerHeight
    line-height: $headerHeight
    overflow: hidden
    text-align: center
    color: #fff
    font-size: .32rem
    background: $bgColor
    .header-back
        position: absolute
        top:0
        left: 0
        width: .64rem
        text-align: center
        color: #fff
        font-size: .4rem
</style>