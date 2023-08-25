<script setup>
import {ref, onMounted} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import EmitsEvent from './components/defineEmits/EmitsEvent.vue'
import ExposeExample from './components/defineExpose/Expose.vue'
import SlotsTest from './components/Slots/index.vue'

import {useCountA, useCountB} from './components/hook相互依赖/index.js'

const handleUpdate = (val) => {
  console.log(123, val)
}

const expose1 = ref(null)

// onMounted(() => {
//   console.log(expose1.value.count)
// })

console.log(useCountA(1, 2), useCountB(1, 3))


</script>

<template>
<!--  <HelloWorld msg="Vite + Vue3" />-->
<!--  <EmitsEvent @updateVal="handleUpdate" />-->
<!--  <ExposeExample ref="expose1" />-->
  <SlotsTest>
    <div>default 1</div>
    <template v-slot:test="prop">{{ prop.count }}</template>
  </SlotsTest>
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
