import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/itemList_checkout',
    name: 'ItemList_checkout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "itemList_checkout" */ '../views/02_ItemList_checkout.vue')
  },
  {
    path: '/itemList_checkout_en',
    name: 'ItemList_checkout_en',
    component: () => import(/* webpackChunkName: "itemList_checkout_en" */ '../views/02_ItemList_checkout_en.vue')
  },
  {
    path: '/itemList_telr',
    name: 'ItemList_telr',
    component: () => import(/* webpackChunkName: "itemList_telr" */'../views/02_ItemList_telr.vue')
  },
  {
    path: '/itemList_telr_en',
    name: 'ItemList_telr_en',
    component: () => import(/* webpackChunkName: "itemList_telr_en" */'../views/02_ItemList_telr_en.vue')
  },
  {
    path: '/itemDetail_checkout',
    name: 'ItemDetail_checkout',
    component: () => import(/* webpackChunkName: "itemDetail_checkout" */'../views/03_ItemDetail_checkout.vue')
  },
  {
    path: '/itemDetail_checkout_en',
    name: 'ItemDetail_checkout_en',
    component: () => import(/* webpackChunkName: "itemDetail_checkout_en" */'../views/03_ItemDetail_checkout_en.vue')
  },
  {
    path: '/itemDetail_telr',
    name: 'ItemDetail_telr',
    component: () => import(/* webpackChunkName: "itemDetail_checkout" */'../views/03_ItemDetail_telr.vue')
  },
  {
    path: '/enterInformation_checkout',
    name: 'EnterInformation_checkout',
    component: () => import(/* webpackChunkName: "EnterInformation_checkout" */'../views/04_EnterInformation_checkout.vue')
  },
  {
    path: '/enterInformation_checkout_en',
    name: 'EnterInformation_checkout_en',
    component: () => import(/* webpackChunkName: "EnterInformation_checkout_en" */'../views/04_EnterInformation_checkout_en.vue')
  },
  {
    path: '/confirmInformation_checkout',
    name: 'ConfirmInformation_checkout',
    component: () => import(/* webpackChunkName: "ConfirmInformation_checkout" */'../views/05_ConfirmInformation_checkout.vue')
  },
  {
    path: '/confirmInformation_checkout_en',
    name: 'ConfirmInformation_checkout_en',
    component: () => import(/* webpackChunkName: "ConfirmInformation_checkout_en" */'../views/05_ConfirmInformation_checkout_en.vue')
  },
  {
    path: '/complete_checkout',
    name: 'Complete_checkout',
    component: () => import(/* webpackChunkName: "Complete_checkout" */'../views/06_Complete_checkout.vue')
  },
  {
    path: '/complete_checkout_en',
    name: 'Complete_checkout_en',
    component: () => import(/* webpackChunkName: "Complete_checkout_en" */'../views/06_Complete_checkout_en.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
