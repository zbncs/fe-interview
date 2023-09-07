<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

/**
 * 必须保证$on监听先存在
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
  created() {
    this.$bus.$on('update', msg => {
      this.msg = msg
    })

    this.$bus.$emit('appToChild', '666')

    this.$bus.$on('childToApp', msg => {
      console.log('childToApp', msg)
    })
  },
  mounted() {
    this.$bus.$emit('appToChild', '777')
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
