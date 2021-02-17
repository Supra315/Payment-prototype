<template>
<div class="itemDetail">
  <displayItemDetail></displayItemDetail>
  <div class="col text-center">
    <buyButtonCheckout></buyButtonCheckout>
  </div>
</div>
</template>

<script>
import displayItemDetail from '@/components/03_DisplayItemDetail.vue'
import buyButtonCheckout from '@/components/03_BuyButton_checkout.vue'

export default {
  name: 'itemDetail',
  components: {
    displayItemDetail,
    buyButtonCheckout
  }
}
</script>