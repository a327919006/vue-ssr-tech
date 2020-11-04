import Vue from 'vue'
import App from './test.vue'

import './assets/styles/test.css'
import './assets/images/head.jpg'
import './assets/styles/test-stylus.styl'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render: (h) => h(App)
}).$mount(root)