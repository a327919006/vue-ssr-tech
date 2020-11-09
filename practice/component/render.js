import Vue from 'vue'

const component = {
    template: `
        <div :style="style">
            <solt></solt>
        </div>
    `,
    data () {
        return {
            style: {
                width: '200px',
                height: '200px',
                border: '1px solid #aaa'
            }
        }
    }
}

new Vue({
    components: {
        CompOne: component
    },
    el: '#root',
    data () {
        return {
            value: '123'
        }
    },
    template: `
        <div>
            <comp-one ref="comp">
                <!--通过slot-scope取到组件内部定义的属性-->
                <p ref="span">{{value}}</p>
            </comp-one>
        </div>
    `
})
