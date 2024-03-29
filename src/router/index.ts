import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router'
import Home from '../views/home/index.vue'
import TodayPopup from '../views/today-popup/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404/index.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/today-popup',
    name: 'TodayPopup',
    component: () => import('@/views/today-popup/index.vue'),
  },
  {
    path: '/scroll-y',
    name: 'ScrollY',
    component: () => import('@/views/scroll-y/index.vue'),
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import('@/views/music/index.vue'),
  },
  {
    path: '/event-modifier',
    name: 'EventModifier',
    component: () => import('@/views/event-modifier/index.vue'),
  },
  {
    path: '/slot',
    name: 'Slot',
    component: () => import('@/views/slot/parent/index.vue'),
  },
  {
    path: '/grid',
    name: 'Grid',
    component: () => import('@/views/grid/index.vue'),
  },
  {
    path: '/swiper',
    name: 'Swiper',
    component: () => import('@/views/swiper-page/index.vue'),
  },
  {
    path: '/windicss',
    name: 'Windicss',
    component: () => import('@/views/windicss/index.vue'),
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('@/views/calendar/index.vue'),
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('@/views/form/index.vue'),
  },
  {
    path: '/responsive',
    name: 'Responsive',
    component: () => import('@/views/responsive/index.vue'),
  },
  {
    path: '/action-sheet',
    name: 'ActionSheet',
    component: () => import('@/views/action-sheet/index.vue'),
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('@/views/chat/index.vue'),
  },
  {
    path: '/v-name-of-directive',
    name: 'VNameOfDirective',
    component: () => import('@/views/v-name-of-directive/index.vue'),
  },
  {
    path: '/popup-picker',
    name: 'PopupPicker',
    component: () => import('@/views/popup-picker/index.vue'),
  },
  {
    path: '/loading',
    name: 'Loading',
    component: () => import('@/views/loading/index.vue'),
  },
  {
    path: '/v3-proxy/',
    name: 'V3Proxy',
    component: () => import('@/views/v3-proxy/index.vue'),
    children: [
      {
        path: 'demo1',
        name: 'ProxyDemo01',
        component: () => import('@/views/v3-proxy/demo01.vue'),
      },
      {
        path: 'v3',
        name: 'ProxyDemo02',
        component: () => import('@/views/v3-proxy/V3Proxy.vue'),
      },
    ],
  },
  {
    path: '/rate',
    name: 'Rate',
    component: () => import('@/views/rate/index.vue'),
  },
  {
    path: '/progress',
    name: 'Progress',
    component: () => import('@/views/progress/index.vue'),
  },
  {
    path: '/input',
    name: 'Input',
    component: () => import('@/views/input/index.vue'),
  },
  {
    path: '/icon',
    name: 'Icon',
    component: () => import('@/views/icon/index.vue'),
  },
  {
    path: '/icon-all',
    name: 'IconAll',
    component: () => import('@/views/icon-all/index.vue'),
  },
  {
    path: '/svg-icon-demo',
    name: 'IconAll',
    component: () => import('@/views/svg-icon-demo/index.vue'),
  },
  {
    path: '/theme-switch',
    name: 'ThemeSwitch',
    component: () => import('@/views/theme-switch/index.vue'),
  },
]
const router = createRouter({
  // 设置为history模式，就是路径里面没有#,  createWebHashHistory 是默认的，括号里面的就是基础路径，可以理解为项目名称，就是请求路径的基础url
  // history: createWebHistory(),
  // 此处打包以后http-serve 会报页面404，但是不设置/yn/就没问题
  history: createWebHistory('/packaging-vant.github.io/'),
  routes,
})

export default router
