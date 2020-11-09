import Vue from 'vue'

new Vue({
    el: '#root',
    // template: `
    //     <!-- id为静态id， :id动态id-->
    //     <div :id="aaa" v-on:click="handleClick">
    //         {{isActive}}<br>
    //         {{isActive ? 'yes' : 'no'}}<br>
    //         {{arr.join(' ')}}<br>
    //         {{Date.now()}}<br>
    //         <p v-html="html11"></p><br>
    //     </div>
    // `,
    template: `
        <!-- class为静态样式， :class动态样式, 3种写法-->
        <!-- <div :class="{active: !isActive}">-->
        <!-- <div :class="[isActive?'active':'']">-->
        <!-- :style,可以写1到多个，单个不用[]，多个时自动整合，相同项后者覆盖前者-->
        <div
            :class="[{active: !isActive}]"
            :style="[style1, style2]"
        >
            <!-- 调用方法获取数据-->
            <p>{{getData(arr)}}</p>
        </div>
    `,
    data: {
        isActive: false,
        arr: [1, 2, 3],
        html11: '<span>123</span>',
        aaa: 'test1',
        style1: {
            color: 'red'
        },
        style2: {
            color: 'blue'
        }
    },
    methods: {
        handleClick () {
            alert('click')
        },
        getData (arr) {
            return arr.join(' ')
        }
    }
})
