import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi1 from '@/components/Hi1'
// import Hi2 from '@/components/Hi2'
import Params from '@/components/params'
import Error from '@/components/404page'
Vue.use(Router)

export default new Router({
 // mode: 'history',//一般模式
  mode: 'hash', //hash 模式 加#号
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      alias: 'gohome1'//首页起别名是跳不过去的
        // left: Hi1,
        // right: Hi2
    },
    {
      path: '/params/:newsId(\\d+)/:newTitle',
      component: Params
      // beforeEnter: (to, form, next) => {
      //   // eslint-disable-next-line no-unused-expressions
      //   console.log(to),
      //   console.log(form),
      //   next(true)//点击后页面跳转
      //  // next(false)//点击链接页面不跳转
      //   //next({path: '/'})//点击params 页面跳转到Home 页面
      //   //next()
      // }
    },
    {
      path: '/goHome',//路径加反斜杠
      redirect: '/'//重定向
    },
    {
      path: '/goParams/:newsId(\\d+)/:newTitle',
      redirect: '/params/:newsId(\\d+)/:newTitle'
    },
    {
      path: '/Hi1',
      component: Hi1,
      alias: '/vueHi1'//别名

    },
    {
      path: '*',
      component: Error
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
