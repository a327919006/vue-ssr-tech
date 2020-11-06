import Vue from 'vue'

const app = new Vue({
    el: '#root',
    template: '<div>{{text}}</div>',
    data: {
        text: 0,
        obj: {}
    }
    // 数据监听，跳转别的界面时自动取消监听
    // watch: {
    //   text (newText, oldText) {
    //     console.log(`${newText} : ${oldText}`)
    //   }
    // }
})

// app.$mount('#root')

let i = 0
setInterval(() => {
    i++
    app.text += 1
    // app.obj.a = i
    // app.$set(app.obj, 'a', i)
    // app.$forceUpdate()
    // app.$options.data.text += 1 // 修改此项不会对界面有影响
    // app.$data.text += 1 // 与app.text一致
}, 1000)

// 上面定义的data
console.log(app.$data)

// 目前没有，可以在上面定义props
// console.log(app.$props)

// html内容，即div和其内容
// console.log(app.$el)

// 在new Vue对象时{}内定义的参数，包括Vue的默认参数
// console.log(app.$options)

// 修改界面渲染结果
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }

// 即Vue对象
// console.log(app.$root === app)

// 组件的子标签
// console.log(app.$children)

// console.log(app.$slots)
// console.log(app.$scopedSlots)

// console.log(app.$refs)

// 获取是否是服务端
// console.log(app.$isServer)

// 设置数据监听
// const unWatch = app.$watch('text', (newText, oldText) => {
//   console.log(`${newText} : ${oldText}`)
// })
// unWatch取消监听
// setTimeout(() => {
//   unWatch()
// }, 2000)

// 监听事件,$on监听，$once只监听一次
// app.$once('test', (a, b) => {
//   console.log(`test emited ${1} ${b}`)
// })

// 触发事件
// setInterval(() => {
//   app.$emit('test', 1, 2)
// }, 1000)

// 强制组件重新渲染
// app.$forceUpdate()
