export default {
    // 这里的方法只能有两个参数，如果需要多个，可以num改为传对象{num1, num2}
    // updateCount (state, num) {
    //     state.count = num
    // }
    updateCount (state, { num, num2 }) {
        console.log('num2=', num2)
        state.count = num
    }
}
