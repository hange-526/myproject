<template>
    <div>
        <router-link tag="div" to="/" class="header-abs"
        v-show="showAbs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs"
        :style="opacityStyle">
            景点详情
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
        </div>
    </div>
</template>
 
<script>
    export default {
        name:"detailHeader",
        data(){
            return {
                showAbs:true,
                opacityStyle:0
            }
        },
        methods:{
            handleScroll(){
                const top=document.documentElement.scrollTop
                if(top>60){
                    let opacity=top/140
                    opacity=opacity>1?1:opacity
                    this.opacityStyle={opacity}
                    this.showAbs=false
                }else{
                    this.showAbs=true
                }
            }
        },
        activated(){    //因为我们使用了keepalive，所以只要页面展示就会执行activated钩子函数
            window.addEventListener('scroll',this.handleScroll)
        },
        deactivated(){
            window.removeEventListener('scroll',this.handleScroll)
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
    position: absolute
    top: .2rem
    left: .2rem
    width: .8rem
    height: .8rem
    border-radius: .4rem
    line-height: .8rem
    text-align: center
    background: rgba(0,0,0,.8)
    .header-abs-back
        color: #fff
        font-size: .4rem
.header-fixed
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    font-size: .32rem
    background: $bgColor
    .header-fixed-back
        position: absolute
        top:0
        left: 0
        width: .64rem
        text-align: center
        color: #fff
        font-size: .4rem
</style>