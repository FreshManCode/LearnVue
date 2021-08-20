<template>
  <div class="bindStyle">
    <h1>Vue.js 样式绑定</h1>
    <!-- class 属性绑定 -->
    <!-- 将 isActive 设置为 true 显示了一个红色的 div 块，如果设置为 false 则不显示： -->
    <div v-bind:class="{'active':isActive}"></div>

    <!-- text-danger 类背景颜色覆盖了 active 类的背景色： -->
    <div class="static" v-bind:class="{'active':isActive,'text-danger':hasError}"></div>
    <!-- 数组语法 -->

    <div v-bind:class="[activeClass,errorClass]"></div>

    <!-- 使用三元表达式来切换列表中的 class ：  -->
    <div v-bind:class="[errorClass, isActive ? activeClass : '']">
    </div>

    <!-- Vue.js style(内联样式) -->
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">李白哦</div>
    <div v-bind:style="{color:activeColor,fontSize:fontSize1}">小李白哈哈</div>
    <div v-bind:style="styleObject">李太白真的神</div>
  </div>

</template>

<script>
  export default {
    name: 'BindStyle',
    data() {
      return {
        isActive: true,
        hasError: true,
        activeClass: 'active',
        errorClass: 'text-danger',
        activeColor: 'green',
        fontSize: 30,
        fontSize1: '35px',
        styleObject: {
          color: 'green',
          fontSize: '30px'
        }
      }
    }

  }

</script>

<style>
  .active {
    background-color: red;
    width: 40px;
    height: 40px;
  }

  .text-danger {
    margin: 10px;
    background: yellow;
  }

</style>
