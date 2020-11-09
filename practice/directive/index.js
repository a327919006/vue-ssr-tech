import Vue from 'vue'

const app = new Vue({
    el: '#root',
    template: `
        <div>
            <!-- v-show是否显示此节点,dom中有此节点，display=none-->
            <!--v-once数据绑定内容只执行一次，后续数据有改变，界面不会变化-->
            <!--v-pre声明内容为字符串，即使有{{}}也只会原文显示-->
            <p v-show="active" v-once>{{text}}</p>

            <!-- v-on绑定事件 缩写@click-->
            <p v-on:click="handleClick">click me</p>

            <!-- v-if是否显示此节点,直接在dom中去除此节点-->
            <p v-if="active">if data</p>
            <p v-else-if="text === 0">else if data</p>
            <p v-else>else data</p>

            <!--v-text指定节点内容-->
            <p v-text="text"></p>

            <!--v-html指定节点内html代码-->
            <p v-html="html"></p>

            <!--v-for遍历数组、对象属性-->
            <ul>
                <li v-for="(item,index) in arr" :key="item">{{index}}_{{item}}</li>
            </ul>
            <ul>
                <li v-for="(val, key, index) in obj" :key="key">{{key}}_{{val}}_{{index}}</li>
            </ul>

            <!--v-model，一般用于input，输入数据改变text的值
                如果是数字可以用v-model.number，输入01自动转成1
                如果需要去除空格v-model.trim，自动去除首尾空格
            -->
            <input type="text" v-model="text">
            <input type="checkbox" v-model="active"><br>
            多选:
            <input type="checkbox" :value="1" v-model="arr">
            <input type="checkbox" :value="2" v-model="arr">
            <input type="checkbox" :value="3" v-model="arr"><br>
            单选:
            <input type="radio" value="one" v-model="picked">
            <input type="radio" value="two" v-model="picked">

        </div>
    `,
    data: {
        text: 0,
        arr: [1, 2, 3],
        obj: {
            a: 123,
            b: 456,
            c: 789,
        },
        active: true,
        html: `<p>aaa</p>`,
        picked: ''
    },
    methods: {
        handleClick () {
            alert('click')
        }
    }
})

