<template>
  <div class="paymentButton">
    <button id="disabled" v-on:click="paymentButton" class="btn btn-warning">{{ displayPaymentButton() }}</button>
  </div>
</template>

<script>
export default {
  name: 'paymentButton',
  methods: {
    paymentButton: function () {
      //ボタンを非活性にする
      document.getElementById("disabled").setAttribute("disabled", true);
    
      //決済を完了させる
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let token = this.$store.getters.token;

      const currency = this.$store.getters.currency;
      const amount = this.$store.getters.cost;
      const name = this.$store.getters.name;

      let raw = JSON.stringify({"token":token, "currency":currency,"amount":amount,"name":name});

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

    //fetch("https://sq3udsrp38.execute-api.us-east-2.amazonaws.com/payment", requestOptions)
    fetch("https://hoev201e00.execute-api.me-south-1.amazonaws.com/payment/payment_checkout", requestOptions)
    .then(response => response.text())
    /* eslint-disable */
    .then(result => {

      // let res = JSON.parse(result).response;
      // let status = res.payment.status;
      // let responseCode = res.payment.responseCode;

      // alert(status);
      // alert(responseCode);

      //ページ遷移
      var lang = this.getCookie("lang");

      switch(lang) {
        case "jp": // 日本語
          this.$router.push('/complete_checkout');
          break;

        case "en": // 英語
          this.$router.push('/complete_checkout_en');
          break;

        case "ar": // アラビア語
          this.$router.push('/complete_checkout_en');
          break;

        default:
          break;
      }
    })
    /* eslint-enable */
    .catch(error => console.log('error', error));
    },

    // ボタン表示
    displayPaymentButton: function () {

      let text = "Payment";
      let lang = this.getCookie("lang");

      switch(lang) {
        case "jp": // 日本語
        text = "購入";
        break;
        
        case "en": // 英語
        text = "Payment";
        break;
        
        case "ar": // アラビア語
        text = "Payment";
        break;
        
        default:
        break;
      }

      return text;

    }
  }
}
</script>

<style>
</style>