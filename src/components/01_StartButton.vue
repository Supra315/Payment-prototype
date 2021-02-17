<template>
  <div class="startButton">
    <button id="disabled" v-on:click="getItem" class="btn btn-warning">start</button>
    <!-- <b-button variant="primary">bootstrap</b-button> -->
  </div>
</template>

<script>
export default {
  name: 'startButton',
  methods: {
    getItem: function () {

      //ボタンを非活性にする
      document.getElementById("disabled").setAttribute("disabled", true);

      let ser = "";
      const selectServise = document.getElementsByName("service");
      const lisenceCd = "000012345";

      //選択されたサービスを取得する
      for (let i = 0; i < selectServise.length; i++){
        if(selectServise[i].checked){
          ser = selectServise[i].value;
          break;
        }
      }

      // 言語取得
      let lang = "";
      const selectLanguage = document.getElementsByName("lang");
      for(var i in selectLanguage) {
        if (selectLanguage[i].checked) {
          lang = selectLanguage[i].value;
          break;
        }
      }

      // クッキー設定
      document.cookie = "lang=" + lang;

      //選択されたサービスがcheckout(c)の場合
      if (ser == "c"){

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
      
        let raw = JSON.stringify({"uid":lisenceCd});

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        }

        //fetch("https://e4dgntw5p0.execute-api.us-east-2.amazonaws.com/getItemList", requestOptions)
        fetch("https://hoev201e00.execute-api.me-south-1.amazonaws.com/payment/get_item_list", requestOptions)
        .then(response => response.text())
        .then(result => {

          // タイトル設定
          this.setSystemTitle(lang);

          //jsonから値を取得
          let itemCd = JSON.parse(result).item_cd;
          let itemName = JSON.parse(result).item_name;
          let expDate = JSON.parse(result).exp_date;
          let cost = JSON.parse(result).cost;

          let itemNameEn = JSON.parse(result).item_name_en;

          //storeのactionを実行して、取得した値をstoreに反映する

          //ページ遷移
          switch(lang) {
            case 'jp': // 日本語
              this.$store.dispatch('commitItem',{ itemCd: itemCd, itemName: itemName, expDate: expDate, cost: cost});
              this.$router.push('/itemList_checkout');
              break;

            case 'en': // 英語
              this.$store.dispatch('commitItem',{ itemCd: itemCd, itemName: itemNameEn, expDate: expDate, cost: cost});
              this.$router.push('/itemList_checkout_en');
              break;

            case 'ar': // アラビア語
              this.$store.dispatch('commitItem',{ itemCd: itemCd, itemName: itemNameEn, expDate: expDate, cost: cost});
              this.$router.push('/itemList_checkout_en');
              break;
              
            default:
              break;
          }
        })
        .catch(error => console.log('error', error));

      //選択されたサービスがtelr(t)の場合
      } else if (ser == "t") {
    
          let myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          let raw = JSON.stringify({"uid":lisenceCd});

          let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          }

          // fetch("https://e4dgntw5p0.execute-api.us-east-2.amazonaws.com/getItemList", requestOptions)
          fetch("https://hoev201e00.execute-api.me-south-1.amazonaws.com/payment/get_item_list", requestOptions)
          .then(response => response.text())
          .then(result => {

            // タイトル設定
            this.setSystemTitle(lang);
          
            //jsonから値を取得
            let itemCd = JSON.parse(result).item_cd;
            let itemName = JSON.parse(result).item_name;
            let expDate = JSON.parse(result).exp_date;
            let cost = JSON.parse(result).cost;

            let itemNameEn = JSON.parse(result).item_name_en;

            //storeのactionを実行して、取得した値をstoreに反映する
            this.$store.dispatch('commitItem',{ itemCd: itemCd, itemName: itemName, expDate: expDate, cost: cost});

            //ページ遷移
            switch(lang) {
              case 'jp': // 日本語
                this.$store.dispatch('commitItem',{ itemCd: itemCd, itemName: itemName, expDate: expDate, cost: cost});
                this.$router.push('/itemList_telr');
                break;

              case 'en': // 英語
                this.$store.dispatch('commitItem',{ itemCd: itemCd, itemName: itemNameEn, expDate: expDate, cost: cost});
                this.$router.push('/itemList_telr_en');
                break;

              case 'ar': // アラビア語
                this.$store.dispatch('commitItem',{ itemCd: itemCd, itemName: itemNameEn, expDate: expDate, cost: cost});
                this.$router.push('/itemList_telr_en');
                break;
              
              default:
                break;
            }

          })
          .catch(error => console.log('error', error));

          //サービスを選択していない場合
      } else {
            alert("サービスを選択してください");
      }
    },

    //選択言語からタイトルを変更する
    setSystemTitle: function (lang) {

      // タイトル表示
      let title = "課金評価システム";

      if (lang) {
        switch(lang) {
          case "jp" : // 日本語
            title = "課金評価システム";
            break;
          
          case "en" : // 英語
            title = "Payment System";
            break;

          case "ar" : // アラビア語
            title = "Payment System";
            break;

          default:
            break;
        }
      } 

      let elem = document.getElementById("nav").childNodes;
      elem[0].innerText = title;
    }
  }
}
</script>