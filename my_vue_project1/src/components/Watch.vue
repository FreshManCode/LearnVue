<template>
  <div class="Watch">
    <div class="counter">
      <h1>Vue.js 监听属性</h1>
      <p style="font-size:25px">计数器{{counter}}</p>
      <button @click="mycounter(1)" style="font-size:25px;">点我++</button>
      <button @click="mycounter(0)" style="font-size:25px;">点我--</button>
    </div>

    <div class="meter_transfer">
      <div>千米:<input type="text" v-model="kilometers"></div>
      <div>米:<input type="text" v-model="meters"></div>
    </div>

    <div class="area_selected">
      <label>地址选择框:</label>
      <select v-model="province">
        <option value="">请选择</option>
        <option v-for="(value,index) in provinces" :key="index" :value="index+1">
          {{value}}
        </option>
      </select>
      <select v-model="city">
        <option value="">请选择</option>
        <option v-for="(value,index) in cityList" :key="index" :value="index+1">{{value}}
        </option>
      </select>

      <div>
        <!-- 获取路由传递过来的是否有参数 -->
        <p>判断路由过来是否携带参数1:params(路由URL中不显示)</p>
        {{this.$route.params}}
        <p>判断路由过来是否携带参数2:query(路由URL中显示)</p>
        {{this.$route.query}}
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: 'Watch',
    data() {
      return {
        counter: 0,
        meters: 0,
        kilometers: 0,
        city: '',
        province: '',
        provinces: ['广东', '湖南', '湖北', '北京'],
        cityList: [],
        area: [{
            name: '广东',
            id: 1,
            child: ['广州', '深圳', '东莞']
          },
          {
            name: '湖南',
            id: 2,
            child: ['长沙', '株洲', '湘潭']
          },
          {
            name: '湖北',
            id: 3,
            child: ['武汉']
          },
          {
            name: '北京',
            id: 4,
            child: ['北京']
          }
        ]
      }
    },
    methods: {
      mycounter: function (index) {
        if (index === 0) {
          this.counter -= 1
        } else {
          this.counter += 1
        }
      }
    },
    watch: {
      // 观察counter 属性的变化
      counter: function (newVal, oldVal) {
        alert('计时器值的变化: ' + oldVal + '变为: ' + newVal + '!')
      },
      kilometers: function (val) {
        this.kilometers = val
        this.meters = val * 1000
      },
      meters: function (val) {
        this.meters = val
        this.kilometers = val / 1000
      },
      province: function (val) {
        if (val) {
          let citys = this.area[val - 1]
          this.cityList = citys.child
          this.city = ''
        } else {
          this.cityList = []
        }
      }

    }

  }

</script>

<style>
  .counter {
    background-color: red;
  }

  .meter_transfer {
    margin-top: 20px;
    background-color: #f5f5f5;
    border-radius: 5px;
  }

</style>
