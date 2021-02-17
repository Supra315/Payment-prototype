<template>
  <div class="buyButtonTelr">
    <button id="disabled" v-on:click="buyButtonTelr" class="btn btn-warning">{{ displayBuyButton() }}</button>
  </div>
</template>

<script>
export default {
  name: 'buyButtonTelr',
  methods: {
    buyButtonTelr: function () {
      //ボタンを非活性にする
      document.getElementById("disabled").setAttribute("disabled", true);

      //Telrのurlを取得する
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let currency = this.$store.getters.currency;
      const amount = this.$store.getters.cost;
      const name = this.$store.getters.name_telr;
      const address = this.$store.getters.address_telr;
      //カートIDが被らないように現時間を使って調整する
      const date = new Date();
      const cardidCode = date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();
      const cartid = "cartid" + cardidCode;
      const authorisedUrl = "http://toyotaconnected.ae/?result=authorised";
      const declinedUrl = "http://toyotaconnected.ae/?result=declined";
      const cancelledUrl = "http://toyotaconnected.ae/?result=cancel";

      let raw = JSON.stringify({"currency":currency, "amount":amount, "name":name, "address":address, "cartid":cartid, "authorisedUrl":authorisedUrl, "declinedUrl":declinedUrl, "cancelledUrl":cancelledUrl});

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      // fetch("https://ug1dopmgb6.execute-api.us-east-2.amazonaws.com/request", requestOptions)
      fetch("https://hoev201e00.execute-api.me-south-1.amazonaws.com/payment/requestTelr", requestOptions)
      .then(response => response.text())
      .then(result => {
        //jsonから値を取得
        let res = JSON.parse(result).response;
        let url = res.order.url;

        //Telrの購入画面へ遷移
        window.location.href = url; 
    })
    .catch(error => console.log('error', error));
    },

    // ボタン表示
    displayBuyButton: function () {

      let text = "Buy";
      let lang = this.getCookie("lang");

      switch(lang) {
        case "jp": // 日本語
        text = "購入";
        break;
        
        case "en": // 英語
        text = "Buy";
        break;
        
        case "ar": // アラビア語
        text = "Buy";
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
