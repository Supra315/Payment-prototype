<template>
  <div class="confirmInformation">
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="col text-center">
      <h4>Payment is complete</h4>
      <br>
      <br>
      <br>
      <br>
      <closeButton></closeButton>
    </div>
  </div>
</template>

<script>
import closeButton from '@/components/06_CloseButton.vue'

export default {
  name: 'confirmInformation',
  components: {
    closeButton
  }
}
</script>