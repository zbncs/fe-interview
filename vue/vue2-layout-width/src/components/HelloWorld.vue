<template>
  <div class="hello">
    <h1 ref="hello">{{ msg }}</h1>
    <h2>{{ w }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      w: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      // console.log(123, this.$refs.hello);
    })
  },
  watch: {
    msg: {
      handler() {
        this.w = this.$refs.hello.offsetWidth
        console.log(123, this.$refs.hello.offsetWidth);
      }
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
