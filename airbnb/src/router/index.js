import Vue from 'vue'
import Router from 'vue-router'
import mainHomePage from '@/page/mainHomePage'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    name: 'mainHomePage',
    component: mainHomePage,
    meta: {
      title: '여행은 살아보는 거야 - 에어비앤비 - 에어비앤비'
    }
  }
]

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

router.afterEach((to, from) => {
  const title = to.meta.title === undefined ? '여행은 살아보는 거야 - 에어비앤비 -에어비앤비' : to.meta.title
  Vue.nextTick(() => {
    document.title = title
  })
})

export default router
