<template>
  <div id="app">
    <div id="nav">
      <h3>課金評価システム</h3>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* font-size: small; */
}

#nav {
  padding: 10px;
  background-color: #dd5f24;
  color: #ffffff;
  height: 50px;
}
</style>
