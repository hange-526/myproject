<template>
  <div id="app">
    <keep-alive exclude="detailView">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name:"App"
  }
</script>

<style scoped>

</style>