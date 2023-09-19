<script setup>
import {computed, defineProps} from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: {
      checked: false,
      value: ''
    }
  }
})

const emits = defineEmits(['updateChecked'])
const onChecked = () => {
  emits('updateChecked', props.item.value)
}

const classname = computed(() => {
  if (props.item.checked) {
    return 'line-through'
  }
})

</script>

<template>
  <div v-if="item.value" class="flex">
    <input class="mr-2.5 ml-2" type="radio" :checked="item.checked" @click="onChecked" />
    <div :class="classname">{{item.value}}</div>
  </div>
</template>

<style scoped>

</style>
