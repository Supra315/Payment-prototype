import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  //state:値
  state: {
    itemCd: "",
    itemName: "",
    expDate: "",
    cost: "",
    imageUrl: "",
    imageBytes: "",
    desc1: "",
    desc2: "",
    desc3: "",
    desc4: "",
    token: "",
    name_checkout: "",
    address_checkout: "",
    name_telr: "Taro Yamada",
    address_telr: "Aichi",
    currency: "AED"
  },
  //mutations:セッターの役割をするもの(actionを介して使用する)
  mutations: {
    setItem (state, { itemCd, itemName, expDate, cost }) {
      state.itemCd = itemCd,
      state.itemName = itemName,
      state.expDate = expDate,
      state.cost = cost
    },
    setItemDetail (state, { imageUrl, imageBytes, desc1, desc2, desc3, desc4 }) {
      state.imageUrl = imageUrl,
      state.imageBytes = imageBytes,
      state.desc1 = desc1,
      state.desc2 = desc2,
      state.desc3 = desc3,
      state.desc4 = desc4
    },
    setInformation (state, { token, name_checkout, address_checkout }) {
      state.token = token,
      state.name_checkout = name_checkout,
      state.address_checkout = address_checkout
    }
  },
  //actions:mutationsを実行するためのもの
  //引数にstateは必要なため、actionsだけeslintを無効化にする
  /* eslint-disable */
  actions: {
    commitItem: function({ commit, state }, { itemCd, itemName, expDate, cost }){
      commit('setItem', { itemCd, itemName, expDate, cost})
    },
    commitItemDetail: function({ commit, state }, { imageUrl, imageBytes, desc1, desc2, desc3, desc4 }){
      commit('setItemDetail', { imageUrl, imageBytes, desc1, desc2, desc3, desc4 })
    },
    commitInformation: function({ commit, state }, { token, name_checkout, address_checkout }){
      commit('setInformation', { token, name_checkout, address_checkout })
    }
  },
  /* eslint-enable */
  //ゲッター
  getters: {
    itemCd: state => state.itemCd,
    itemName: state => state.itemName,
    expDate: state => state.expDate,
    cost: state => state.cost,
    imageUrl: state => state.imageUrl,
    imageBytes: state => state.imageBytes,
    desc1: state => state.desc1,
    desc2: state => state.desc2,
    desc3: state => state.desc3,
    desc4: state => state.desc4,
    token: state => state.token,
    name_checkout: state => state.name_checkout,
    address_checkout: state => state.address_checkout,
    name_telr: state => state.name_telr,
    address_telr: state => state.address_telr,
    currency: state => state.currency
  },
  modules: {
  },
  plugins: 
    [createPersistedState({
    storage: window.sessionStorage
    }
    )]
})
