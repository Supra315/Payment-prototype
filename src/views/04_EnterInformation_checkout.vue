<template>
  <div class="enterInformation">
    <div id="input" style="margin:10px;">
      <h4>カード情報入力</h4>
      <div>氏名 :</div>
      <div class="col text-center">
        <input type="text" id="name" placeholder="山田 太郎" required>
      </div>
      <br>
      <div>住所 :</div>
      <div class="col text-center">
        <input type="text" id="address" placeholder="愛知県" required>
      </div>
      <br><br>
      <br>
      <div>カード番号 :</div>
        <input type="text" id="cardNumber1" size="2" maxlength="4" placeholder="3530" required style="margin-left:10px;">
        <input type="text" id="cardNumber2" size="2" maxlength="4" placeholder="1113" required style="margin-left:10px;">
        <input type="text" id="cardNumber3" size="2" maxlength="4" placeholder="3330" required style="margin-left:10px;">
        <input type="text" id="cardNumber4" size="2" maxlength="4" placeholder="0000" required style="margin-left:10px;">
      <br><br>
      <div>有効期限 :</div>
        <input type="text" id="month" size="1" maxlength="2" placeholder="12" required style="margin-left:10px;">
        <span> / </span>
        <input type="text" id="year" size="1" maxlength="2" placeholder="25" required>
      <br><br>
      <div>セキュリティコード :</div>
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