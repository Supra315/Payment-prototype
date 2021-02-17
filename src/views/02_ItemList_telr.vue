<template>
  <div class="itemList">
    <h4 style="margin:10px;">購入アイテム一覧</h4>
    <displayItemListTelr></displayItemListTelr>
  </div>
</template>

<script>
import displayItemListTelr from '@/components/02_DisplayItemList_telr.vue'

export default {
  name: 'itemList',
  components: {
    displayItemListTelr
  }
}
</script>