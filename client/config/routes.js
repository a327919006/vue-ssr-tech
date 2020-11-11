// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
    {
        path: '/',
        redirect: '/app'
    },
    {
        path: '/app',
        // path: '/app/:id',
        // 地址上带参数时设为true
        // props: true,
        // 地址对应组件
        // component: Todo,
        component: () => import('../views/todo/todo.vue'),
        // 一个地址显示多个组件
        // components: {
        //     default: Todo,
        //     aa: Login
        // },
        name: 'app',
        meta: {
            title: 'title1',
            description: 'aaa'
        },
        // 此方法路由守卫
        beforeEnter (to, form, next) {
            console.log('app beforeEnter')
            next()
        }
        // 需要在todo.vue里声明<router-view></router-view>
        // children: [
        //     {
        //         path: 'test',
        //         component: Login
        //     }
        // ]
    },
    {
        path: '/login',
        // component: Login
        component: () => import('../views/login/login.vue')
    }
]
