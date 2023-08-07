<template>
  <div class="hello">
    <!-- 需要注意的是，这里的v-color值需要在双引号里面再加个单引号，表示字符串。没有加单引号，导致binding.value一直获取不到值 -->
    <h1 v-color="'red'">{{ msg }}</h1>
    <input v-focus type="text">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
