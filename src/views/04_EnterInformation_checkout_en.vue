<template>
  <div class="enterInformation">
    <div id="input" style="margin:10px;">
      <h4>Input Card Number</h4>
      <div>Name :</div>
      <div class="col text-center">
        <input type="text" id="name" placeholder="Taro Yamada" required>
      </div>
      <br>
      <div>Address :</div>
      <div class="col text-center">
        <input type="text" id="address" placeholder="Aichi" required>
      </div>
      <br><br>
      <br>
      <div>Card Number :</div>
        <input type="text" id="cardNumber1" size="2" maxlength="4" placeholder="3530" required style="margin-left:10px;">
        <input type="text" id="cardNumber2" size="2" maxlength="4" placeholder="1113" required style="margin-left:10px;">
        <input type="text" id="cardNumber3" size="2" maxlength="4" placeholder="3330" required style="margin-left:10px;">
        <input type="text" id="cardNumber4" size="2" maxlength="4" placeholder="0000" required style="margin-left:10px;">
      <br><br>
      <div>Expiration Date :</div>
        <input type="text" id="month" size="1" maxlength="2" placeholder="12" required style="margin-left:10px;">
        <span> / </span>
        <input type="text" id="year" size="1" maxlength="2" placeholder="25" required>
      <br><br>
      <div>Security Code :</div>
        <input type="text" id="securityCode" size="1" maxlength="3" placeholder="null" required style="margin-left:10px;">
    </div>
    <br><br>
    <div class="col text-center">
      <nextButton></nextButton>
    </div>
  </div>
</template>

<script>
import nextButton from '@/components/04_NextButton.vue'

export default {
  name: 'enterInformation',
  components: {
    nextButton
  }
}
</script>