<template>
  <div class="buyButtonCheckout">
    <button id="disabled" v-on:click="buyButtonCheckout" class="btn btn-warning">{{ displayBuyButton() }}</button>
  </div>
</template>

<script>
export default {
  name: 'buyButtonCheckout',
  methods: {
    buyButtonCheckout: function () {
      //ボタンを非活性にする
      document.getElementById("disabled").setAttribute("disabled", true);
      //ページ遷移
      let lang = this.getCookie("lang");

      switch(lang) {
        case "jp": // 日本語
        this.$router.push('/enterInformation_checkout');
        break;
        
        case "en": // 英語
        this.$router.push('/enterInformation_checkout_en');
        break;
        
        case "ar": // アラビア語
        this.$router.push('/enterInformation_checkout_en');
        break;
        
        default:
        break;
      }
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
