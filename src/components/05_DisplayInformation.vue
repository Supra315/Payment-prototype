<template>
  <div class="displayInformation">
    <label>氏名 : </label>
    <div>{{ name }}</div>
    <br>
    <label>住所 : </label>
    <div>{{ address }}</div>
    <br><br>
    <div>カード情報</div>
    <br>
    <div>カード番号 :</div>
    <div>**** **** **** ****</div>
    <br>
    <div>有効期限 :</div>
    <div>**/**</div>
    <br>
    <div>セキュリティコード :</div>
    <div>***</div>
  </div>
</template>

<script>
export default {
  name: 'displayInformation',
  computed :{
    name : function(){
      return this.$store.getters.name_checkout
    },
    address : function(){
      return this.$store.getters.address_checkout
    }
  }
}
</script>

<style>
</style>
