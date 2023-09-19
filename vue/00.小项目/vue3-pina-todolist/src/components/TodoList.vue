<template>
  <div class="border-2 w-[550px]">
    <input type="text" class="border-2 w-[100%] mb-2.5" v-model="inpVal" @keydown.enter="onAdd" />
    <keep-alive :max="3" class="mb-6">
      <component
          :is="compTab"
          :all="all"
          @update-radio="updateRadio"
      />
    </keep-alive>
    <Status
      @all="toggleCom"
      @active="toggleCom"
      @complete="toggleCom"
      @clear-complete="toggleCom"
      :activeNum="activeNum"
    />
  </div>
</template>

<script setup>
import {computed, ref, shallowRef} from 'vue'
import All from './All.vue'
import Complete from './Selected.vue'
import Active from './NoSelect.vue'
import Status from "./Status.vue";

const compTab = shallowRef(All)

const all = ref([{value: 1, checked: false}, {value: 2, checked: false}, {value: 3, checked: false},{value: 5, checked: true}, {value: 6, checked: true}])
const inpVal = ref('')

const comObj = {
  all: All,
  complete: Complete,
  active: Active
}
const toggleCom = (type) => {
  if (type !== 'clearComplete') {
    compTab.value = comObj[type]
  } else {
    all.value = all.value.filter(it => !it.checked)
  }

}

const activeNum = computed(() => all.value.filter(it => !it.checked).length)

const onAdd = (e) => {
  all.value.push({
    value: inpVal.value,
    checked: false
  })
  inpVal.value = ''
}

const updateRadio = (id) => {
  all.value = all.value.map(it => {
    if (it.value === id) {
      it.checked = !it.checked
    }
    return it
  })


}
</script>

<style lang="scss" scoped>

</style>
