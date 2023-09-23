<script setup>
import { ref, version as vueVersion } from 'vue'
import { version as epVersion } from 'element-plus'
import { ElementPlus } from '@element-plus/icons-vue'

const msg = ref('Hello World!')
</script>

<template>
  <h1>{{ msg }}</h1>
<!--  sdsd-->
  <el-input v-model="msg" />
  无法显示日期
  <component is="el-date-picker">
<!--    <template>-->
<!--      12345-->
<!--    </template>-->
  </component>
  <p>
    <el-icon color="var(--el-color-primary)">
      <ElementPlus />
    </el-icon>
    Element Plus {{ epVersion }} + Vue {{ vueVersion }}
  </p>
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
