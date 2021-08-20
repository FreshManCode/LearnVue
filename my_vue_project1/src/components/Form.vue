<template>
  <!--  -->
  <div class="form">
    <h1>Vue.js 表单</h1>
    <div class="input">
      <p>单行:input:{{input_message}}</p>
      <input v-model="input_message" placeholder="编辑.....">
      <p>多行:textarea:{{textarea_message}}</p>
      <textarea v-model="textarea_message" placeholder="多行输入"></textarea>
    </div>
    <!-- 复选框如果是一个为逻辑值，如果是多个则绑定到同一个数组： -->
    <div class="checkbox">
      <p>单个复选框：</p>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label>
      <p>多个复选框：</p>
    </div>
    <input type="checkbox" id="runoob" value="A" v-model="checkedNames">
    <label for="runoob">A</label>
    <input type="checkbox" id="google" value="B" v-model="checkedNames">
    <label for="google">B</label>
    <input type="checkbox" id="taobao" value="C" v-model="checkedNames">
    <label for="taobao">C</label>
    <input type="checkbox" id="D" value="D" v-model="checkedNames">
    <label for="D">D</label>
    <br>
    <span>选择的值为: {{ checkedNames }}</span>
    <div class="singleCheck">
      <p>单选按钮</p>
      <input type="radio" id='A' value="A" v-model="answer">
      <label for="A">A</label>

      <input type="radio" id='B' value="B" v-model="answer">
      <label for="B">B</label>

      <input type="radio" id='C' value="C" v-model="answer">
      <label for="C">C</label>

      <input type="radio" id='D' value="D" v-model="answer">
      <label for="D">D</label>
      <br>
      <span>该选择题的答案是:{{answer}}</span>
    </div>

    <div class="selected">
      <select v-model="selected" name="website">
        <option value="">请选择一个网站</option>
        <option v-for="(obj) in webSites " :key="obj.name" :value="obj.url">
          {{obj.name}}
        </option>
      </select>
      <span>{{selected}}</span>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Form',
    data() {
      return {
        input_message: '',
        textarea_message: '',
        checked: false,
        checkedNames: [],
        answer: '',
        selected: '',
        webSites: [{
          name: '百度网',
          url: 'www.baidu.com'
        }, {
          name: '新浪网',
          url: 'www.sina.com'
        }, {
          name: 'Github',
          url: 'www.github.com'
        }]
      }
    }

  }

</script>

<style>
  .form {
    background-color: #f5f5f5;
  }

  .input {}

  .checkbox {}

</style>
