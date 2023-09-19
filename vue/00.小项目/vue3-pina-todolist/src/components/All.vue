<template>
  <div v-for="it in all" :key="it.value">
    <Item
        :item="it"
        @update-checked="handleUpdateRadio"
    />
  </div>
</template>

<script setup>
import {defineProps} from 'vue'
import Item from "./ListItem.vue";

const props = defineProps({
  all: Array,
})

// 不能使用ref包裹props
// const all = ref(props.active.concat(props.complete))

const emits = defineEmits(['updateRadio'])
const handleUpdateRadio = (id) => {
  emits('updateRadio', id)
}

</script>

<style lang="scss" scoped>

</style>
