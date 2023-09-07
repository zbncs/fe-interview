<template>
  <div class="hello">
    <h1 @click="handleClick">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created() {
    this.$bus.$on('appToChild', mg => {
      console.log(111, mg)
    })

    this.$bus.$emit('childToApp', '123456')
  },
  methods: {
    handleClick() {
      this.$bus.$emit('update', '1111')
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
