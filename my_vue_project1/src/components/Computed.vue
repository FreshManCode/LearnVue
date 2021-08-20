<template>
  <!-- Vue.js 计算属性
计算属性关键词: computed。
 -->
  <div class="computed">
    <h1>Vue.js 计算属性</h1>
    <p>原始字符串:{{message}}</p>
    <p>^计算后反转字符串:{{reversedMessage}}</p>
    <button @click="changeMessage">点我试试看</button>
    <p>{{address}}_{{city}}</p>

  </div>

</template>

<script>
  export default {
    name: 'computed',
    data() {
      return {
        address: '北京市',
        message: '大家好才是真的好'
      }
    },
    computed: {
      // 声明一个计算属性reversedMessage
      reversedMessage: function () {
        //   reversedMessage依赖于message,在message 发生改变时,reversedMessage也会改变
        return this.message.split('').reverse().join('')
      },
      // computed 属性默认只有 getter ，不过在需要时你也可以提供一个 setter ：
      city: {
        // getter
        get: function () {
          return '北京'
        },
        // setter
        set: function (newValue) {
          this.address = this.address + newValue
        }
      }

    },
    methods: {
      changeMessage: function () {
        this.message = '我被改变了啊'
        this.city = '上海'
      }
    }

  }

</script>

<style>

</style>
