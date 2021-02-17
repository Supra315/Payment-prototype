<template>
  <div class="nextButton">
    <button id="disabled" v-on:click="nextButton" class="btn btn-warning">{{ displayNextButton() }}</button>
  </div>
</template>

<script>
export default {
  name: 'nextButton',
  methods: {
    nextButton: function () {
      //ボタンを非活性にする
      document.getElementById("disabled").setAttribute("disabled", true);

      //カード情報を送り、トークンを取得する
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let cardNumber = document.getElementById("cardNumber1").value +
                       document.getElementById("cardNumber2").value +
                       document.getElementById("cardNumber3").value +
                       document.getElementById("cardNumber4").value;
      
      let expiryYear = Number(document.getElementById("year").value);
      let expiryMonth = Number(document.getElementById("month").value);

      let cvv = document.getElementById("securityCode").value;


      let raw = JSON.stringify({"cardNumber":cardNumber, "expiryYear":expiryYear, "expiryMonth":expiryMonth, "cvv":cvv});

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }
      
      // fetch("https://w9qkl9k1mk.execute-api.us-east-2.amazonaws.com/getToken", requestOptions)
      fetch("https://hoev201e00.execute-api.me-south-1.amazonaws.com/payment/request_checkout", requestOptions)
      .then(response => response.text())
      .then(result => {
        //jsonから値を取得
        let token = JSON.parse(result).token;

        //氏名・住所の値を取得
        let name = document.getElementById("name").value;
        let address = document.getElementById("address").value;

        //storeのactionを実行して、取得した値をstoreに反映する
        this.$store.dispatch('commitInformation',{ token: token, name_checkout: name, address_checkout: address });

        //ページ遷移
        let lang = this.getCookie("lang");

        switch(lang) {
          case "jp": // 日本語
          this.$router.push('/confirmInformation_checkout');
          break;
          
          case "en": // 英語
          this.$router.push('/confirmInformation_checkout_en');
          break;
          
          case "ar": // アラビア語
          this.$router.push('/confirmInformation_checkout_en');
          break;
          
          default:
          break;
        }

    })
    .catch(error => console.log('error', error));
    },

    // ボタン表示
    displayNextButton: function () {

      let text = "Next";
      let lang = this.getCookie("lang");

      switch(lang) {
        case "jp": // 日本語
        text = "確認";
        break;
        
        case "en": // 英語
        text = "Next";
        break;
        
        case "ar": // アラビア語
        text = "Next";
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
