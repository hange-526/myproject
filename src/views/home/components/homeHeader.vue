<template>
    <div class="header">
        <div class="header-left">返回</div>
        <div class="header-input">输入城市/景点/游玩主题</div>
        <div class="header-right">三亚</div>
    </div>
</template>

<script>
    export default {
        name:"HomeHeader"
    }
</script>

<style lang="stylus" scoped>
.header
    display: flex
    line-height: .86rem
    background:#00bcd4
    color: #fff
    .header-left
        width: .64rem
        float: left
    .header-input
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
</style>