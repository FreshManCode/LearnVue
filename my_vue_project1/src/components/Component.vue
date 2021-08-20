<template>
  <!-- 组件（Component）是 Vue.js 最强大的功能之一。
组件可以扩展 HTML 元素，封装可重用的代码。
组件系统让我们可以用独立可复用的小组件来构建大型应用，几乎任意类型的应用的界面都可以抽象为一个组件树： -->
  <div class="Component">
    <h1>Vue.js 组件</h1>
    <!-- <v_my_wacth></v_my_wacth> -->
    <hello msg='通过props传递的属性'></hello>
    <p>动态props</p>
    <input v-model="parentMsg">
    <br>
    <!-- 动态props -->
    <child v-bind:message="parentMsg"> </child>
  </div>

</template>

<script>
  // 引入组件
  import Watch from '../components/Watch'
  import Vue from 'vue'

  // 注册一个全局组件
  const HelloWorld = Vue.component('hello-world', {
    //   声明props
    props: ['msg'],
    // 可以用过this.msg 也可以直接使用
    template: `<div>
    <h1>Hello world</h1>
    <div>{{ msg }}</div>
    </div>`
  })

  //  动态prop实例
  Vue.component('child', {
    //   声明props
    props: ['message'],
    template: '<span>{{message}}</span>'
  })

  export default {
    name: 'Component',
    // 注册局部组件
    components: {
      'v_my_wacth': Watch,
      'hello': HelloWorld
    },
    data() {
      return {
        parentMsg: ''
      }
    }

  }

</script>

<style>

</style>
