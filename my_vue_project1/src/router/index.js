import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyVue1 from '../components/MyVue1.vue'
import Vbind from '@/components/Vbind'
import Condition from '@/components/Condition'
import Computed from '@/components/Computed'
import Watch from '@/components/Watch'
import BindStyle from '@/components/BindStyle'
import HandleEvent from '@/components/HandleEvent'
import Form from '@/components/Form'
import Component from '@/components/Component'
import CutomEvent from '@/components/CutomEvent'
import CustomOrder from '@/components/CustomOrder'
import Transition from '@/components/Transition'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/MyVue1',
      name: 'MyVue1',
      component: MyVue1
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/Vbind',
      name: 'Vbind',
      component: Vbind
    },
    {
      path: '/VCondition',
      name: 'VCondition',
      component: Condition
    },
    {
      path: '/Computed',
      name: 'Computed',
      component: Computed
    },
    {
      path: '/Watch',
      name: 'Watch',
      component: Watch
    },
    {
      path: '/BindStyle',
      name: 'BindStyle',
      component: BindStyle
    },
    {
      path: '/HandleEvent',
      name: 'HandleEvent',
      component: HandleEvent
    },
    {
      path: '/Form',
      name: 'Form',
      component: Form
    },
    {
      path: '/Component',
      name: 'Component',
      component: Component
    },
    {
      path: '/CutomEvent',
      name: 'CutomEvent',
      component: CutomEvent
    },
    {
      path: '/CustomOrder',
      name: 'CustomOrder',
      component: CustomOrder
    },
    {
      path: '/Transition',
      name: 'Transition',
      component: Transition
    }

  ]

})
