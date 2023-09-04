<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
const obj = ref({
  num: 0
})

const handleObj = () => {
  obj.value.num++
}


</script>

<template>
  <h1 v-color="'red'">{{ msg }}</h1>
  <h2 @click="handleObj">{{obj.num}}</h2>

  <div class="card">
   <input v-focus type="text">
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
