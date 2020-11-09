import Vue from 'vue'

const app = new Vue({
    el: '#root',
    template: '<div>{{text}}</div>',
    data: {
        text: 0
    },
    beforeCreate () {
        // 顺序1，一次性
        console.log(this, 'beforeCreate')
    },
    created () {
        // 顺序2，一次性
        console.log(this, 'created')
    },
    beforeMount () {
        // 顺序3，一次性 如果没有el或调用$mount，则不会执行
        // 加载了#root所在的dom节点
        console.log(this, 'beforeMount')
    },
    mounted () {
        // 顺序4，一次性 如果没有el或调用$mount，则不会执行
        // 覆盖root，加载了上面template定义的dom节点
        // 如果要进行dom操作，需在此方法
        console.log(this, 'mounted')
    },
    beforeUpdate () {
        // 有data改变时触发
        console.log(this, 'beforeUpdate')
    },
    updated () {
        // 有data改变时触发
        console.log(this, 'updated')
    },
    activated () {
        console.log(this, 'activated')
    },
    deactivated () {
        console.log(this, 'deactivated')
    },
    beforeDestroy () {
        // 主动销毁时调用
        console.log(this, 'beforeDestroy')
    },
    destroyed () {
        // 主动销毁时调用
        console.log(this, 'destroyed')
    },
    // render (h) {
        // 手动抛异常
        // throw new TypeError('render error')
        // console.log('render function invoked')
        // return h('div', {}, this.text)
    // },
    // render异常时执行此方法
    renderError (h, err) {
        return h('div', {}, err.stack)
    },
    // 组件包括子组件报错都可捕获
    errorCaptured () {
        // 会向上冒泡，并且正式环境可以使用
    }
})

// setInterval(() => {
//   app.text = app.text += 1
// }, 1000)

// setTimeout(() => {
// 主动销毁
//     app.$destroy()
// }, 1000)
