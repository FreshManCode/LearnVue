<style>
  .class1 {
    background-color: #444;
    color: #eee;
  }

  .fliter {
    background-color: red;
  }

  /* 指令
  指令是带有v- 前缀的特殊属性
  指令用于在表达式的值改变时,讲某些行为应用到DOM上,如本例:
   */

</style>

<template>
  <div class="vbind">
    <label for="r1">修改颜色</label>
    <input type="checkbox" v-model="use" id='r1'>
    <br>
    <!-- 判断 use的值,如果未true使用class1的样式,否则不使用该类-->
    <div v-bind:class="{'class1':use}">
      v-bind:class 指令
      <p>打上勾会有奇迹哦</p>
    </div>

    <div>
      {{5+5}}<br>
      {{ok? 'YES' : 'NO'}}<br>
      {{message.split('').reverse().join('_')}}
      <div v-bind:id="'list-'+ id">😢</div>
    </div>
    <!-- v-if 指令根据表达式use的值(true/false)来决定是否显示该模块 -->
    <div v-if="use">
      感谢你为我打了勾
    </div>
    <!-- 参数在指令后面以冒号声明.例如:v-bind指令被用来响应地更新HTML属性 -->
    <div>
      <!-- 这里href 是参数,告知v-bind指令将该元素的href属性与表达式url的值绑定 -->
      <pre><a v-bind:href="url">🤣</a></pre>
    </div>

    <!-- 修饰符
    修饰符:以半角句号 . 指明的特殊后缀,用于指出一个指令应该以特殊方式绑定.例如:.prevent修饰符告诉v-on指令
    对于触发的事件调用event.preventDefault()
     -->
    <div>
      <h2>用户输入</h2>
      <p>在 input 输入框中我们可以使用 v-model 指令来实现双向数据绑定：</p>
      <p>{{inputMessage}}</p>
      <input v-model="inputMessage">
      <!-- v-model
         该指令用来在input,select,textarea,checkbox,radio等表单控件上创建双向数据绑定,根据表单上的值,
         自动更新绑定元素的值.

         按钮的事件我们可以使用v-on监听事件,并对用户的输入进行响应.
          -->
    </div>

    <div>
      <p>{{currentMessage}}</p>
      <button v-on:click='reverseMeesage'>字符串反转</button>
      <button @click="showAlert">点我有惊喜</button>
    </div>

    <!-- 过滤器
    Vue.js 允许自定义过滤器,被常用作一些常见的文本格式化.由'管道符'指示,格式如下:
    {{message | capitialize}}
     -->
    <div class="fliter">
      <p>使用过滤器</p>
      {{filterMessage | capitialize}}
    </div>

    <!-- 缩写
   Vue.js 为两个最为常用的指令提供了特别的缩写：
   1.v-bind 缩写
   //完整语法
    <a v-bind:href="url"></a>
   //缩写
    <a :href="url"></a>

    2.v-on 缩写
//完整语法
<a v-on:click="doSomething"></a>
//缩写s
<a @click="doSomething"></a>

    -->

  </div>

</template>

<script>
  export default {
    props: {
      food: {
        type: Object
      }
    },
    name: 'vbind',
    data () {
      return {
        use: false,
        ok: true,
        message: 'RUNOOB',
        id: 1,
        url: 'https://blog.csdn.net/FreshManCode/article/details/116498154',
        inputMessage: '',
        currentMessage: 'Normal',
        filterMessage: 'name'

      }
    },
    methods: {
      reverseMeesage: function () {
        this.currentMessage = this.currentMessage.split('').reverse().join('')
      },
      showAlert: function () {
        alert(this.message)
      }
    },
    // 过滤器
    filters: {
      capitialize: function (value) {
        if (!value) {
          return ''
        }
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }

  }

</script>
