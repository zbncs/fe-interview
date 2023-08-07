<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1 v-color="'red'">{{ msg }}</h1>

  <div class="card">
   <input v-focus type="text">
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
