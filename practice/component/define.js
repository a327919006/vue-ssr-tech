import Vue from 'vue'

const component = {
    props: {
        active: {
            type: Boolean,
            // require: true,
            default: true
            // 假如是对象，要这么写
            // default(){
            //     return{}
            // }
            // 自定义校验规则
            // validator (value) {
            //     return typeof value === 'boolean'
            // }
        },
        propOne: String
    },
    template: `
        <div>
            <input type="text" v-model="text">
            <span v-show="active">active</span>
            <span @click="handleChange2">{{propOne}}</span>
        </div>
    `,
    data () {
        return {
            text: 0
        }
    },
    methods: {
        handleChange2 () {
            this.$emit('change')
        }
    }
}

// 全局组件
// Vue.component('CompOne', component)

new Vue({
    components: {
        CompOne: component
    },
    data: {
        prop1: 'text1'
    },
    methods: {
        handleChange1 () {
            this.prop1 += '1'
        }
    },
    mounted () {
        console.info(this.$refs.comp1)
    },
    el: '#root',
    template: `
        <div>
            <!--v-bind:缩写只要:, 传变量加:，传字符串不用加:-->
            <comp-one ref="comp1" v-bind:active="true" :prop-one="prop1" @change="handleChange1"></comp-one>
            <comp-one :active="false" prop-one="text2"></comp-one>
        </div>
    `,
})

