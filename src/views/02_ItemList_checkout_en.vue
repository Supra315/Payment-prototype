<template>
  <div class="itemList">
    <h4 style="margin:10px;">Sales Item List</h4>
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