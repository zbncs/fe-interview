<template>
  <div class="hello">
    <h1 @click="say">{{ msg }}</h1>
  </div>
</template>

<script>
import {mixin} from "../mixins/hellomixin";

export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  mixins: [mixin],
  beforeCreate() {
    console.log('child beforeCreate')
  },
  created() {
    console.log('child created')
  },
  beforeMount() {
    console.log('child beforeMount')
  },
  mounted() {
    console.log('child mounted')
  },
  beforeUpdate() {
    console.log('child beforeUpdate')
  },
  updated() {
    console.log('child updated')
  },
  beforeDestroy() {
    console.log('child beforeDestroy')
  },
  destroyed() {
    console.log('child destroyed')
  },
  methods: {
    say() {
      console.log("child methods say ");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
