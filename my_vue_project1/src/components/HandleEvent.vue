<template>
  <div>
    <h1>Vue.js 事件处理器</h1>
    <button v-on:click="greet">greet</button>
    <button v-on:click="greet('李白')">greet2</button>
    <div>
      <label>呵呵哒哦</label><input v-model="hehe" @keyup.enter="submit">
      <p>{{hehe}}</p>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'HandleEvent',
    data() {
      return {
        name: 'Vue.js',
        hehe: ''
      }
    },
    methods: {
      greet: function (e) {
        alert('Hello' + this.name + '!')
        if (e) {
          console.log('e is:', e)
        }
      },
      submit: function (e) {
        console.log('e is:', e)
        alert('我敲了回车:' + this.hehe)
      }
    }

  }

</script>

<style>

</style>
