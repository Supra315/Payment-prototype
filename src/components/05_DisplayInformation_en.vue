<template>
  <div class="displayInformation">
    <label>Name : </label>
    <div>{{ name }}</div>
    <br>
    <label>Address : </label>
    <div>{{ address }}</div>
    <br><br>
    <div>Credit Card</div>
    <br>
    <div>Card Number :</div>
    <div>**** **** **** ****</div>
    <br>
    <div>Expiration Date :</div>
    <div>**/**</div>
    <br>
    <div>Security Code :</div>
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
