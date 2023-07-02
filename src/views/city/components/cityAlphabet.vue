<template>
    <ul class="list" ref="wrapper">
            <li class="item" v-for="(item,key) in cities" :key="key">{{ key }}</li>
    </ul>
</template>

<script>
    export default {
        name:"cityAlphabet",
        props:["cities"]
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
    display: flex
    flex-direction: column  //设置flex容器中子元素的排列方向为垂直方向
    justify-content: center //在容器中水平居中对齐其子元素
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
        text-align: center
        line-height: .4rem
        color: $bgColor
</style>