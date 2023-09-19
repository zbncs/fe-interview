<template>
  <div v-for="it in complete" :key="it.value">
    <Item
        :item="it"
        @update-checked="handleUpdateRadio"
    />
  </div>
</template>

<script setup>
import {computed, defineProps} from 'vue'
import Item from "./ListItem.vue";
const props = defineProps({
  all: Array
})

const complete = computed(() => props.all.filter(it => it.checked))

const emits = defineEmits(['updateRadio'])
const handleUpdateRadio = (id) => {
  emits('updateRadio', id)
}
</script>

<style lang="scss" scoped>

</style>
