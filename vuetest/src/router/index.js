import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Game from '@/components/game'
import Index from '@/components/index'
import Play from '@/components/play'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/photo',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },

    {
      path:'/',
      name: 'index',
      component:Index
    },
    {
      path:'/play',
      name:'play',
      component:Play
    }
  ]
})
