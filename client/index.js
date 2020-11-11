import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

// 临时增加一个store的module
store.registerModule('c', {
    state: {
        text: 3
    }
})

// 设置state监听器，当第一个条件发生时，触发第二个回调函数
// store.watch((state) => state.count + 1, (newCount) => {
//   console.log('new count watched:', newCount)
// })

// 设置mutation监听器，当mutation被调用时触发
// store.subscribe((mutation, state) => {
//   console.log(mutation.type)
//   console.log(mutation.payload)
// })

// 设置action监听器，当action被调用时触发
// store.subscribeAction((action, state) => {
//     console.log(action.type)
//     console.log(action.payload)
// })


// 解绑module
// store.unregisterModule('c')

// 全局路由守卫
router.beforeEach((to, from, next) => {
    console.log('before each invoked')
    next()
    // if (to.fullPath === '/app') {
    //   next('/login')
    //   next({ path: '/login' })
    // } else {
    //   next()
    // }
})

router.beforeResolve((to, from, next) => {
    console.log('before resolve invoked')
    next()
})

router.afterEach((to, from) => {
    console.log('after each invoked')
})

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount(root)
