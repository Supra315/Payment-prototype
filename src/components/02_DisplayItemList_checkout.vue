<template>
  <div class="displayItemListCheckout">
    <div class="itemLabel" v-on:click="getItemDetail">{{ itemName }} {{ cost }} {{ expDate }}</div>
    <div class="itemLabel">{{ setSecondList() }}</div>
  </div>
</template>

<script>
export default {
  name: 'displayItemListCheckout',
  computed :{
    itemName : function(){
      return this.$store.getters.itemName
    },
    expDate : function(){
      return this.$store.getters.expDate
    },
    cost : function(){
      return this.$store.getters.cost
    }
  },
  methods: {
    getItemDetail: function () {
      //詳細画面に表示するデータを取得する
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const itemCd = this.$store.getters.itemCd;
      let raw = JSON.stringify({"item_cd":itemCd});

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

    // fetch("https://ckt4yl7rhd.execute-api.us-east-2.amazonaws.com/getItemDetail", requestOptions)
    fetch("https://hoev201e00.execute-api.me-south-1.amazonaws.com/payment/get_item_detail", requestOptions)
    .then(response => response.text())
    .then(result => {
        //jsonから値を取得
      let imageUrl = JSON.parse(result).image_url;
      let imageBytes = JSON.parse(result).image_bytes;

      let description = JSON.parse(result).description;
      let descriptionEn = JSON.parse(result).description_en;

      //詳細説明の区切り記号 (\n) で文字列を配列に分割する
      let lang = this.getCookie("lang");

      let values = [];

      switch(lang) {
        case "jp": // 日本語
        values = description.split( '\n' );
        break;
        
        case "en": // 英語
        values = descriptionEn.split( '\n' );
        break;
        
        case "ar": // アラビア語
        values = descriptionEn.split( '\n' );
        break;
        
        default:
        break;
      }

      let desc1 = values[0];
      let desc2 = values[1];
      let desc3 = values[2];
      let desc4 = values[3];

      //storeのactionを実行して、取得した値をstoreに反映する
      this.$store.dispatch('commitItemDetail',{ imageUrl: imageUrl, imageBytes: imageBytes, desc1: desc1, desc2: desc2, desc3: desc3, desc4: desc4 });

      //ページ遷移
      switch(lang) {
        case "jp": // 日本語
        this.$router.push('/itemDetail_checkout');
        break;
        
        case "en": // 英語
        this.$router.push('/itemDetail_checkout_en');
        break;
        
        case "ar": // アラビア語
        this.$router.push('/itemDetail_checkout_en');
        break;
        
        default:
        break;
      }
    })
    .catch(error => console.log('error', error));
    },

    setSecondList: function () {

      let text = "DCM3年 300 2021/10/30";
      let lang = this.getCookie("lang");

      switch(lang) {
        case "jp": // 日本語
        text = "DCM3年 300 2021/10/30";
        break;
        
        case "en": // 英語
        text = "DCM3years 300 2021/10/30";
        break;
        
        case "ar": // アラビア語
        text = "DCM3years 300 2021/10/30";
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
.itemLabel{
    background-color: #fad60b;
    border: 2px solid;
    border-color: #f6d100;
    border-radius: 4px;
    padding: 10px;
    margin: 10px;
}
.itemLabel:hover {
    background-color: #faae0b;
    border-color: #fad60b;
    color: #ffffff;
    text-shadow: 2px 2px 3px #455b64;
}
</style>
