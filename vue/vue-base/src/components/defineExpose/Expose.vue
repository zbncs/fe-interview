<script setup>
import {ref} from 'vue'

const count = ref(100)

defineExpose({
  count
})

</script>

<template>
  <h1>{{ count }}</h1>
  <button @click="count++">expose</button>
</template>

<style scoped>

</style>