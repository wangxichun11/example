import Vue from 'vue'
import Router from 'vue-router'
import firstContent from '@/components/firstContent/firstContent'
import secondContent from '@/components/secondContent/secondContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstContent',
      component: firstContent
    }, {
      path: '/from',
      name: 'secondContent',
      component: secondContent
    }
  ]
})
