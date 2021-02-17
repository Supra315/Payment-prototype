<template>
<div class="itemDetail">
  <displayItemDetail></displayItemDetail>
  <div class="col text-center">
    <buyButtonTelr></buyButtonTelr>
  </div>
</div>
</template>

<script>
import displayItemDetail from '@/components/03_DisplayItemDetail.vue'
import buyButtonTelr from '@/components/03_BuyButton_telr.vue'

export default {
  name: 'itemDetail',
  components: {
    displayItemDetail,
    buyButtonTelr
  }
}
</script>