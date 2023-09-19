<script setup>
  import {defineProps} from 'vue'

  defineProps({
    activeNum: Number
  })

  const emits = defineEmits(['all', 'active', 'complete', 'clearComplete'])

  const handleStatusClick = (status) => {
    emits(status, status)
  }

</script>

<template>
  <div class="flex justify-between">
    <span>{{activeNum}} item left</span>
    <span @click="handleStatusClick('all')">All</span>
    <span @click="handleStatusClick('active')">Active</span>
    <span @click="handleStatusClick('complete')">Complete</span>
    <span @click="handleStatusClick('clearComplete')">Clear complete</span>
  </div>
</template>

<style scoped>
.status {

}
</style>
