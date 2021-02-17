<template>
  <div class="itemList">
    <h4 style="margin:10px;">購入アイテム一覧</h4>
    <displayItemListCheckout></displayItemListCheckout>
  </div>
</template>

<script>
import displayItemListCheckout from '@/components/02_DisplayItemList_checkout.vue'

export default {
  name: 'itemList',
  components: {
    displayItemListCheckout
  }
}
</script>