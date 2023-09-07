<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

/**
 *
 * 加载
 * 父beforeCreate - 父created - 父beforeMount - 子beforeCreate - 子created - 子beforeMount - 子mounted - 父mounted
 * 更新
 * 父beforeUpdate - 子beforeUpdate - 子updated - 父updated
 * 销毁
 * 父beforeDestroy - 子beforeDestroy - 子destroyed - 父destroyed
 *
 * mixin 中的生命周期优先于组件中的生命周期
 */

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeCreate() {
    console.log('parent beforeCreate')
  },
  created() {
    console.log('parent created')
  },
  beforeMount() {
    console.log('parent beforeMount')
  },
  mounted() {
    console.log('parent mounted')
  },
  beforeUpdate() {
    console.log('parent beforeUpdate')
  },
  updated() {
    console.log('parent updated')
  },
  beforeDestroy() {
    console.log('parent beforeDestroy')
  },
  destroyed() {
    console.log('parent destroyed')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
