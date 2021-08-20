<template>
  <div class="myVue1">
    <h1>{{title}}</h1>
    <p>{{name}}</p>
    <!-- 使用 v-html 指令用于输出 html 代码： -->
    <div v-html="message">
    </div>
  </div>

</template>

<script type='text/javascript'>
  export default {
    name: 'MyVue1',
    data () {
      return {
        title: 'Title',
        name: 'test',
        message: '<p>这是HTML语言哦</p>'
      }
    }
  }

</script>
