<template>
    <div>
        <detail-banner></detail-banner>
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
    export default {
        name:"detailView",
        data(){
            return {
                list:[
                    {
                        title:'成人票',
                        children:[
                            {
                                title:"三馆联票",
                                children:[
                                    {
                                        title:"三馆联票-某某连锁店销售"
                                    }
                                ]
                            },
                            {
                                title:"五馆联票"
                            },
                        ]
                    },
                    {
                        title:'学生票'
                    },
                    {
                        title:'儿童票'
                    },
                    {
                        title:'特惠票'
                    },
                ]
            }
        },
        components:{detailBanner,detailHeader,detailList}
    }
</script>

<style lang="stylus" scoped>
.content
    height: 50rem
</style>