<script setup>

</script>

<template>
<div>
  <slot />
  <slot name="test" :count="0" />
</div>
</template>

<style scoped>

</style>