import Vue from 'vue'

const component = {
    props: {
        active: Boolean,
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
    },
    mounted () {
        // 1
        console.info('component mounted')
    }
}

// 继承组件，方式一
// const CompVue = Vue.extend(component)
// new CompVue({
//     el: '#root',
//     propsData: {
//         propOne: 'aaa'
//     },
//     data: {
//         text: 123
//     },
//     mounted () {
//         //2
//         console.info('CompVue mounted')
//     }
// })

// 继承组件，方式二
const component2 = {
    extends: component,
    data () {
        return {
            text: 1
        }
    },
    mounted () {
        // 2
        console.info('component2 mounted')
        console.info(console.log(this.$parent.$options.name)
        )
    }
}

new Vue({
    name: 'test',
    el: '#root',
    components: {
        Comp: component2
    },
    template: '<comp></comp>'
})
