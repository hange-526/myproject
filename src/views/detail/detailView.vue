<template>
    <div>
        <detail-banner :sightName="sightName"
        :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import detailBanner from './components.vue/detailBanner.vue';
import detailHeader from './components.vue/detailHeader.vue';
import detailList from './components.vue/detailList.vue';
import axios from 'axios';
    export default {
        name:"detailView",
        data(){
            return {
                sightName:'',
                bannerImg:'',
                gallaryImgs:'',
                list:[]
            }
        },
        components:{detailBanner,detailHeader,detailList},
        methods:{
            getDetailInfo(){
                axios.get('/api/detail.json',{
                    params:{
                        id:this.$route.params.id
                    }
                })
                .then(this.handleGetDataSucc)
            },
            handleGetDataSucc(res){
                res=res.data
                if(res.ret && res.data){
                    const data=res.data
                    this.sightName=data.sightName
                    this.bannerImg=data.bannerImg
                    this.gallaryImgs=data.gallaryImgs
                    this.list=data.categoryList
                }
            }
        },
        mounted(){
            this.getDetailInfo()
        }
    }
</script>

<style lang="stylus" scoped>
.content
    height: 50rem
</style>