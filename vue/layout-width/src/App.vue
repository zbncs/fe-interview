<script setup>
import {ref, onMounted} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
const msg = ref('')

setTimeout(() => {
  msg.value = "Vite + Vue1"
}, 2000)

</script>

<template>
  <div>
    <HelloWorld :msg="msg" />
  </div>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
