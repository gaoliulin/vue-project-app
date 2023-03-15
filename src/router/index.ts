import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/Login.vue'
import MainView from '../views/Main.vue'
import ErrorPage from '../views/ErrorPage.vue'
import One from '../components/one.vue'
import Two from '../components/two.vue'
import Three from '../components/three.vue'
import Four from '../components/four.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: LoginView
    },
    {
      path: '/home',
      component: HomeView
    },
    {
      path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/main',
      component: MainView,
      children: [
        {
          path: '/main/one',
          component: One,
        },
        {
          path: '/main/two',
          component: Two,
        },
        {
          path: '/main/three',
          component: Three,
        },
        {
          path: '/main/four',
          component: Four,
        },
        {
          path: '/main/:path',
          component: ErrorPage,
        }
      ]
    },
    {
      path: '/404',
      component: ErrorPage
    }
  ]
})


// 导航守卫
router.beforeEach((to, from) => {

  console.log('router.beforeEach--', to, from)
  // ...
  // 返回 false 以取消导航
  // return false
})


export default router
