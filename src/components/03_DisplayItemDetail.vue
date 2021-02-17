<template>
  <div class="displayItemDetail" style="margin:10px;">
    <h4>商品説明</h4>
    <div>{{ desc1 }}</div>
    <img v-bind:src="imageUrl" width="100%">
    <!-- <img v-bind:src="'data:image/jpeg;base64,'+imageBytes" width="100%" /> -->
    <div>{{ desc2 }}</div>
    <div>{{ desc3 }}</div>
    <div>{{ desc4 }}</div>
  </div>
</template>

<script>
export default {
  name: 'item',
  computed :{
    imageUrl : function(){
      return this.$store.getters.imageUrl
    },
    // imageBytes : function(){
    //   return this.$store.getters.imageBytes
    // },
    desc1 : function(){
      return this.$store.getters.desc1
    },
    desc2 : function(){
      return this.$store.getters.desc2
    },
    desc3 : function(){
      return this.$store.getters.desc3
    },
    desc4 : function(){
      return this.$store.getters.desc4
    }
  }
}
</script>

<style>
</style>
