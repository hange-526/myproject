<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="gallary-img" :src="item">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name:"commonGallary",
        props:['imgs'],
        data(){
            return {
                swiperOptions:{
                    pagination:'.swiper-pagination',
                    paginationType:'fraction',
                    observeParents:true,
                    observer:true
                }
            }
        },
        methods:{
            handleGallaryClick(){
                this.$emit('close')
            }
        }
    }
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container    //父给子写样式
    overflow: inherit
.container
    display: flex
    flex-direction: column      //设置flex容器中子元素的排列方向为垂直方向
    justify-content: center     //在容器中水平居中对齐其子元素
    z-index: 99     //z-index大的值叠加在z-index小的值的元素上面
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
        height: 0
        width: 100%
        padding-bottom: 100%
        .gallary-img
            width: 100%
        .swiper-pagination
            color: #fff
            bottom: -1rem
</style>