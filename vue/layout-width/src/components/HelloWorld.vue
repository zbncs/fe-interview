<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'

const msg1 = defineProps({
  msg: String,
})
const hello = ref()

const w = ref(0)

// onMounted(() => {
//   // 获取不到真正的宽度
//   nextTick(() => {
//     console.log(330, hello.value.offsetWidth);
//   })
  
// })

// 这样可以
watch(() => msg1.msg, async () => {
  await nextTick()
  w.value = hello.value.offsetWidth
  console.log(666, hello.value.offsetWidth);
})

const handleClick = () => {
  w.value++
}

</script>

<template>
  <h1 ref="hello">{{ msg }}</h1>
  <h2>宽度：{{ w }}</h2>
  <div :style="{width: w + 'px', background: 'red'}" @click="handleClick">1</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
