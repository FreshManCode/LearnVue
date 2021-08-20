<template>
  <!-- Vue.js 条件语句 -->
  <div class="vue_condition">
    <h1>Vue.js 条件语句</h1>
    <!-- 在元素 和 template 中使用 v-if 指令： -->
    <input type="checkbox" v-model="seen"><label>勾上我惊喜哦</label>
    <div v-if="seen">
      <p>可以动态隐藏的哦</p>
    </div>
    <!-- v-else -->
    <div v-else>
      <p>你一打钩我就消失了😿</p>
    </div>
    <button @click="plusCount(0)">++</button>
    <!-- v-else-if -->
    <div v-if="count < 3">
      small_Count:{{count}}
    </div>
    <div v-else-if="count > 3 && count < 6">
      mid_Count:{{count}}
    </div>
    <div v-else>
      big_count:{{count}}
    </div>
    <button @click="plusCount(1)">--</button>
    <div v-show="!seen">
      <p>我与上面的勾共进退,你在我在.你走我也不会留</p>
    </div>
    <hr>
    <div>
      <!--循环使用 v-for 指令。 v-for 指令需要以 site in sites 形式的特殊语法，
         sites 是源数据数组并且 site 是数组元素迭代的别名。
v-for 可以绑定数据到数组来渲染一个列表： -->
      <h1>Vue.js 循环语句</h1>
      <ol>
        <li v-for="(myURL,index) in sitesURL" :key="index">
          <!-- 动态的值: :href -->
          <a :href="myURL" target="_blank">{{index}}_{{myURL}}</a>
        </li>
      </ol>
      <p>v-for 迭代对象</p>
      <ul>
        <li v-for="(value,index) in obj" :key="index">
          {{index}}:{{value}}
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'Condition',
    data () {
      return {
        seen: false,
        count: 0,
        sitesURL: [
          'https://blog.csdn.net/FreshManCode/article/details/116498154',
          'https://blog.csdn.net/FreshManCode/article/details/116498154',
          'https://blog.csdn.net/FreshManCode/article/details/116498154'
        ],
        obj: {
          name: '测试',
          url: 'https://blog.csdn.net/FreshManCode/article/details/116498154',
          slogan: '活着真难'
        }
      }
    },
    methods: {
      plusCount: function (index) {
        if (index === 0) {
          this.count += 1
        } else {
          this.count -= 1
        }
      }

    }

  }

</script>
