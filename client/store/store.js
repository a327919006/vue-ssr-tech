import Vuex from 'vuex'

import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
    const store = new Vuex.Store({
        // 不允许在外部直接通过$store修改数据，否则就失去store的意义
        strict: isDev,
        // 定义参数
        state: defaultState,
        // 定义方法
        mutations,
        // 类似computed的作用
        getters,
        // 可以有异步方法，mutations只能是同步操作
        actions,
        // 设置自定义插件
        // plugins: [
        //   (store) => {
        //     console.log('my plugin invoked')
        //   }
        // ],
        // 分模块，每个模块定义不同的参数、方法
        modules: {
            a: {
                // true，方法也根据模块划分
                namespaced: true,
                state: {
                    text: 333
                },
                mutations: {
                    updateText (state, text) {
                        console.log('updateText=', text)
                        state.text = text + '123'
                    }
                },
                getters: {
                    textPlus (state, getters, rootState) {
                        return state.text + rootState.count
                    }
                },
                actions: {
                    add ({ state, commit, rootState }) {
                        commit('updateText', rootState.count)
                        commit('updateCount', { num: 444 }, { root: true })
                    }
                }
            },
            b: {
                state: {
                    text: 444
                }
            }
        }
    })

    // 修改store不用刷新整个页面
    if (module.hot) {
        module.hot.accept([
            './state/state',
            './mutations/mutations',
            './actions/actions',
            './getters/getters'
        ], () => {
            const newState = require('./state/state').default
            const newMutations = require('./mutations/mutations').default
            const newActions = require('./actions/actions').default
            const newGetters = require('./getters/getters').default

            store.hotUpdate({
                state: newState,
                mutations: newMutations,
                getters: newGetters,
                actions: newActions
            })
        })
    }

    return store
}
