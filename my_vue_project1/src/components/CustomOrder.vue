<template>
  <div class="CustomOrder">
    <h1>Vue.js 自定义指令</h1>
    <p>页面载入时，input 元素自动获取焦点：</p>
    <input v-focus>
    <input v-focus1>
    <div v-roob="{color:'green',text:'钩子函数哦'}"></div>
    <div v-hook="{color:'red',text:'钩子函数哦嘻嘻'}"></div>
    <button @click="routerPush">路由跳转携带参数方式1:</button>
    <button @click="routerPush2">路由跳转携带参数方式2:</button>

  </div>

</template>

<script>
  import Vue from 'vue'
  //   注册一个全局自定义指令 v-focus
  Vue.directive('focus', {
    // 当绑定元素插入到DOM中 .
    inserted: function (e) {
      // 聚焦元素
      e.focus()
    }
  })
  //   钩子函数
  Vue.directive('roob', function (el, binding) {
    //   简写方式设置文本及背景颜色
    el.innerHTML = binding.value.text
    el.style.backgroundColor = binding.value.color
  })

  export default {
    name: 'CustomOrder',
    // 注册局部指令,v-focus
    directives: {
      focus1: {
        // 当绑定元素插入到DOM中 .
        inserted: function (e) {
          // 聚焦元素
          e.focus()
        }
      },
      //   钩子函数
      hook: {
        inserted: function (el, binding) {
          //   简写方式设置文本及背景颜色
          el.innerHTML = binding.value.text
          el.style.color = binding.value.color
        }
      }
    },
    methods: {
      routerPush: function () {
        //   路由跳转 (使用params 传递参数,不会在URL中展示)
        //   在跳转后的页面手动刷新之后,相关参数会消失
        this.$router.push({
          name: 'Watch',
          //   传递参数
          params: {
            userID: 123
          }
        })
      },
      //   路由跳转在URL拼接参数,使用query
      //   在跳转的页面手动刷新之后,相关参数依然存在(在url中)
      routerPush2: function () {
        this.$router.push({
          path: '/Watch',
          query: {
            'userID': 123
          }
        })
      }
    }
  }

</script>

<style>

</style>
