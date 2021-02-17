<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <br>
    <router-link to="/">Home</router-link> |
    <router-link to="/selectItem_telr">SelectItem</router-link> |
    <router-link to="/newpage">NewPage</router-link>
    <br> -->
    <h4 style="margin:10px;">評価項目選択</h4>
    <!-- <HelloWorld msg="評価項目選択"/> -->
    <b-container class="bv-main-row">
      <b-row>
        <b-col></b-col>
        <b-col cols="6">
          <br>
          <h5>ユーザー選択</h5>
          <h6>
          <input type="radio" name="user" value="000012345" checked> 000012345
          <br>
          <br>
          </h6>
          <h5>言語選択</h5>
          <h6>
          <input type="radio" name="lang" value="jp" checked> 日本語
          <br>
          <input type="radio" name="lang" value="en" > 英語
          <br>
          <input type="radio" name="lang" value="ar" > アラビア語
          <br>
          <br>
          </h6>
          <h5>サービス</h5>
          <h6>
          <input type="radio" name="service" value="c" checked> checkout.com
          <br>
          <input type="radio" name="service" value="t" > telr.com
          <br>
          <br>
          </h6>
          <div class="col text-center">
            <startButton></startButton>
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import startButton from '@/components/01_StartButton.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    startButton
  }
}

// var aboutPage = new Vue({
//   el: '#app2',
//   methods: {
//     getItemFetch: function () {
//       this.$router.push('/about');
//     }
//   }
// })
</script>

<style>
.home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

.home a {
  font-weight: bold;
  color: #2c3e50;
}

.home a.router-link-exact-active {
  color: #42b983;
}
</style>
