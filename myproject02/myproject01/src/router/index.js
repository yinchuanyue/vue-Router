import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Hi1 from '@/components/Hi1'
// import Hi2 from '@/components/Hi2'
import Params from '@/components/params'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
        // left: Hi1,
        // right: Hi2
    },
    {
      path: '/params/:newsId(\\d+)/:newTitle',
      component: Params
    },
    {
      path: '/goHome',//路径加反斜杠
      redirect: '/'//重定向
    },
    {
      path: '/goParams/:newsId(\\d+)/:newTitle',
      redirect: '/params/:newsId(\\d+)/:newTitle'
    }
    // {
    //   path: '/jsyue',
    //   name: 'HelloWorld',
    //   components: {
    //     default: HelloWorld,
    //     left: Hi2,
    //     right: Hi1
    //   }
    // }

  ]
})
