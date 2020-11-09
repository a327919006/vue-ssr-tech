import Router from 'vue-router'
import routes from './routes'

export default () => {
    return new Router({
        routes,
        mode: 'history',
        // base: '/base/'
        linkActiveClass: 'active-link',
        linkExactActiveClass: 'exact-active-link',
        // 定义滚动行为
        scrollBehavior (to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            } else {
                return {
                    x: 0,
                    y: 0
                }
            }
        },
        // 有些浏览器默认不支持mode: 'history',
        // fallback: true
    })
}
