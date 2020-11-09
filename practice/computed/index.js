import Vue from 'vue'

new Vue({
    el: '#root',
    template: `
        <div>
            <p>Name: {{name}}</p>
            <p>Name: {{getName()}}</p>
            <p>fullName: {{fullName}}</p>
            <p>Num: {{num}}</p>
            <p><input type="text" v-model="num"></p>
            <p>firstName: <input type="text" v-model="firstName"></p>
            <p>lastName: <input type="text" v-model="lastName"></p>
        </div>`,
    data: {
        firstName: '张三',
        lastName: '李四',
        fullName: '',
        num: 0
    },
    watch: {
        // 改变时触发
        // firstName (newName, oldName) {
        //     this.fullName = newName + ' ' + this.lastName
        // }
        firstName: {
            handler (newName, oldName) {
                this.fullName = newName + ' ' + this.lastName
            },
            // 不用改变数据, 直接触发一次
            immediate: true,
            // 如果监听的是对象，默认对象的属性改变不会触发监听，deep设成true才会触发
            deep: true
        }
    },
    computed: {
        // 首次界面渲染时调用一次，方法内相关数据改变时才会再调用
        name () {
            console.info('name')
            return `${this.firstName} ${this.lastName}`
        }
    },
    methods: {
        // 界面上所有数据改变时，都会调用，不管方法有没用到该数据
        getName () {
            console.info('getName')
            return `${this.firstName} ${this.lastName}`
        }
    }
})
