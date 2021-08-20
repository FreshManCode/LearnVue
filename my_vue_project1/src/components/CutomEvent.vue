<template>
  <!-- 父组件是使用 props 传递数据给子组件，但如果子组件要把数据传递回去，就需要使用自定义事件！
我们可以使用 v-on 绑定自定义事件, 每个 Vue 实例都实现了事件接口(Events interface)，即：
使用 $on(eventName) 监听事件
使用 $emit(eventName) 触发事件 -->
  <div class="custom_event">
    <h1>Vue.js 组件 - 自定义事件</h1>
    <p>{{ total }}</p>
    <!-- 2. v-on:increment 监听事件 -->
    <button-counter v-on:increment="incrementTotal"></button-counter>
    <button-counter v-on:increment="incrementTotal"></button-counter>
  </div>
</template>

<script>
  import Vue from 'vue'
  Vue.component('button-counter', {
    template: '<button v-on:click="incrementHandler">{{ counter }}</button>',
    data: function () {
      return {
        counter: 0
      }
    },
    methods: {
      incrementHandler: function () {
        this.counter += 1
        // 1. 触发事件 (也可以添加参数)
        this.$emit('increment', 'daa')
      }
    }

  })
  export default {
    name: 'custom_event',
    data() {
      return {
        total: 0
      }
    },
    methods: {
      // 监听到子组件的increment 事件
      incrementTotal: function (ele) {
        console.log('ele:', ele)
        this.total += 1
      }
    }

  }

</script>

<style>

</style>
