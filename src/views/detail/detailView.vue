<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content"></div>
    </div>
</template>

<script>
import detailBanner from './components.vue/detailBanner.vue';
import detailHeader from './components.vue/detailHeader.vue';
    export default {
        name:"detailView",
        components:{detailBanner,detailHeader}
    }
</script>

<style lang="stylus" scoped>
.content
    height: 50rem
</style>