<template>
  <div class="confirmInformation">
    <h4 style="margin:10px;">内容確認</h4>
    <b-container class="bv-main-row">
      <b-row>
        <b-col></b-col>
        <b-col cols="8">
          <br>
          <displayInformation></displayInformation>
          <br>
          <div class="col text-center">
            <paymentButton></paymentButton>
          </div>
          </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import displayInformation from '@/components/05_DisplayInformation.vue'
import paymentButton from '@/components/05_PaymentButton.vue'

export default {
  name: 'confirmInformation',
  components: {
    displayInformation,
    paymentButton
  }
}
</script>