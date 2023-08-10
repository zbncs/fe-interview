<template>
  <div>
    <keep-alive :max="3">
      <component :is="compTab" />
    </keep-alive>
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import All from './All.vue'
import Selected from './Selected.vue'
import NoSelect from './NoSelect.vue'

const compTab = ref(NoSelect)
</script>

<style lang="scss" scoped>

</style>