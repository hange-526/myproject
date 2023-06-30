<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="icon"  v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{ item.desc }}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name:"homeIcons",
        data(){
            return {
                iconList:[
                    {
                        id:'0001',
                        imgUrl:'https://imgs.qunarzz.com/vc/fd/55/94/6c7152c2a8b35a9c49bb26ea25.png_92.png',
                        desc:'主题游'
                    },
                    {
                        id:'0002',
                        imgUrl:'https://imgs.qunarzz.com/vc/eb/d9/1b/e24bca3f1ef6ae6ebdee15e4ca.png_92.png',
                        desc:'徒步登山'
                    },
                    {
                        id:'0003',
                        imgUrl:'https://imgs.qunarzz.com/vc/c8/01/32/8f6e29b7b6ce0a807742c2587a.png_92.png',
                        desc:'深度体验'
                    },
                    {
                        id:'0004',
                        imgUrl:'https://imgs.qunarzz.com/vc/c3/f2/54/2e1c8f9403de1ed28895c9ffa4.png_92.png',
                        desc:'亲子游学'
                    },
                    {
                        id:'0005',
                        imgUrl:'https://imgs.qunarzz.com/vc/ea/a3/be/56cdbe6026e59f876283b4414a.png_92.png',
                        desc:'滑雪'
                    },
                    {
                        id:'0006',
                        imgUrl:'https://imgs.qunarzz.com/vc/68/4a/91/b7f09964d1e7a6280cca361c46.png_92.png',
                        desc:'休闲潜水'
                    },
                    {
                        id:'0007',
                        imgUrl:'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
                        desc:'自由行'
                    },
                    {
                        id:'0008',
                        imgUrl:'https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png',
                        desc:'攻略'
                    },
                    {
                        id:'0009',
                        imgUrl:'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png',
                        desc:'海外酒店'
                    },
                ]
            }
        },
        computed:{
            pages(){
                const pages=[];
                this.iconList.forEach((item,index)=>{
                    const page=Math.floor(index/8)
                    if(!pages[page]){
                        pages[page]=[]
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
@import "~styles/mixins.styl"
.icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
.icons
    margin-top: .1rem
    .icon
        position: relative
        overflow: hidden
        float: left
        width: 25%
        height: 0
        padding-bottom: 25%
        .icon-img
            position: absolute
            overflow: hidden 
            top: 0
            left: 0
            right: 0
            bottom: .44rem
            box-sizing: border-box
            padding: .1rem
            .img-content
                height: 100%
                display: block
                margin: 0 auto
        .icon-desc
            position:absolute
            left: 0
            right: 0
            bottom: 0
            height: .44rem
            line-height: .44rem
            padding-left: 0.1rem
            color: $darkTextColor
            text-align: center
            ellipsis()
</style>