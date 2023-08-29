<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="handleChangeProp">直接改变props的属性</button>
  </div>
</template>

<script>
console.log(222)
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    obj: Object
  },
  methods: {
    handleChangeProp() {
      this.obj.a = 0;
      console.log(this.obj)
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
