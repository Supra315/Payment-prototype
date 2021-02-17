<template>
  <div class="closeButton">
    <button id="disabled" v-on:click="closeButton" class="btn btn-warning">{{ displayCloseButton() }}</button>
  </div>
</template>

<script>
export default {
  name: 'closeButton',
  methods: {
    closeButton: function () {
      //ボタンを非活性にする
      document.getElementById("disabled").setAttribute("disabled", true);

      //ページ遷移
      this.$router.push('/');
    },

    // ボタン表示
    displayCloseButton: function () {

      let text = "Close";
      let lang = this.getCookie("lang");

      switch(lang) {
        case "jp": // 日本語
        text = "閉じる";
        break;
        
        case "en": // 英語
        text = "Close";
        break;
        
        case "ar": // アラビア語
        text = "Close";
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
