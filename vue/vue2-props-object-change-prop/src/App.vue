<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld
        msg="Welcome to Your Vue.js App"
        :obj="obj"
    />
    <button @click="handleViewObj">查看数据obj</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

console.log(1111)
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      obj: {
        a: 1,
        b: {
          c: 2,
          d: false
        }
      }
    }
  },
  methods: {
    handleViewObj() {
      console.log(this.obj)
    }
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
