import Vue from 'vue'

const ChildComp = {
    template: '<div>child:{{value}}</div>',
    inject: ['yeye', 'value'],
    mounted () {
        console.info('child=', this.yeye, this.value)
    }
}

const component = {
    components: {
        ChildComp: ChildComp
    },
    // template: `
    //     <div :style="style">
    //         <slot name="header"></slot>
    //         <slot name="body"></slot>
    //     </div>
    // `,
    template: `
        <div :style="style">
            <slot :value="value" aaa="3333"></slot>
            <child-comp></child-comp>
        </div>
    `,
    data () {
        return {
            style: {
                width: '200px',
                height: '200px',
                border: '1px solid #aaa'
            },
            value: 111
        }
    }
}

new Vue({
    components: {
        CompOne: component
    },
    // provide: 提供给孙子级及更深层级组件获取yeye实例和数据
    // 这么写有缺点，当前爷爷修改完value后，孙子不会变，要变可以看课程里的代码，提供get方法
    provide () {
        return {
            yeye: this,
            value: this.value
        }
    },
    el: '#root',
    data () {
        return {
            value: '123'
        }
    },
    // template: `
    //     <div>
    //         <comp-one>
    //             <!--
    //             vue默认不会显示组件内定义的html元素，
    //             需要用到插槽solt，如果只有一个内容，不用指定solt的name
    //             多个内容时，根据name放入对应solt中
    //             -->
    //             <p slot="header">hello1</p>
    //             <p slot="header">hello2</p>
    //             <p slot="body">world</p>
    //         </comp-one>
    //     </div>
    // `
    template: `
        <div>
            <comp-one ref="comp">
                <!--通过slot-scope取到组件内部定义的属性-->
                <p slot-scope="props" ref="span">{{props.value}} {{props.aaa}} {{value}}</p>
            </comp-one>
        </div>
    `,
    mounted () {
        // comp是vue实例，span是html代码
        console.info(this.$refs.comp, this.$refs.span)
    }
})
