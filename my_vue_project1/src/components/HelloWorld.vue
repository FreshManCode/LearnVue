<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Vue.js Learn Links</h2>
    <ul>
      <li>
        <router-link to="/MyVue1">MyVue1</router-link>
      </li>
      <li>
        <router-link to="/Vbind">Vbind</router-link>
      </li>
      <li>
        <router-link to="/VCondition">Vue.js 条件语句</router-link>
      </li>
      <li>
        <router-link to="/Computed">Vue.js 计算属性</router-link>
      </li>
      <br>
      <li>
        <router-link to="/Watch">Vue.js 监听属性</router-link>
      </li>
      <li>
        <router-link to="/BindStyle">Vue.js 样式绑定</router-link>
      </li>
      <li>
        <router-link to="/HandleEvent">Vue.js 事件处理器</router-link>
      </li>
      <li>
        <router-link to="/Form">Vue.js 表单</router-link>
      </li>
      <li>
        <router-link to="/Component">Vue.js 组件</router-link>
      </li>
      <li>
        <router-link to="/CutomEvent">Vue.js 组件 - 自定义事件</router-link>
      </li>
      <li>
        <router-link to="/CustomOrder">Vue.js 自定义指令</router-link>
      </li>
      <li>
        <router-link to="/Transition">Vue.js 过渡 & 动画</router-link>
      </li>

    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">
          vue-router
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">
          vuex
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">
          vue-loader
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'InitVueProject'
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 5px;
  }

  a {
    color: #42b983;
  }

</style>
