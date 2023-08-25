<script setup>
  const emits = defineEmits(['updateVal'])

  const handle = () => {
    emits('updateVal', '666')
  }

</script>

<template>
  <div>emits events</div>
  <button @click="handle">btn</button>
</template>

<style scoped>

</style>