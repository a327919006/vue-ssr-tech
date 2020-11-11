<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <!--        <router-link to="/app/123">app</router-link>-->
        <p>{{count}}</p>
        <p>{{fullName}}</p>
        <p>{{text}}</p>
        <router-link to="/app">app</router-link>
        <router-link to="/login">login</router-link>
        <!--<Todo></Todo>-->
        <!--transition用于切换vue的时候动画效果，fade动画定义在global.styl，根据名称对应-->
        <transition name="fade">
            <router-view></router-view>
        </transition>
        <Footer></Footer>
        <router-view name="aa"></router-view>
    </div>
</template>

<script>
    import {
        mapState,
        mapGetters,
        mapActions,
        mapMutations
    } from 'vuex'
    import Header from './layout/header.vue'
    import Footer from './layout/footer.vue'
    // import Todo from './views/todo/todo.vue'

    export default {
        components: {
            Header,
            Footer,
            // Todo
        },
        methods: {
            ...mapActions(['updateCountAsync', 'a/add']),
            ...mapMutations(['updateCount', 'a/updateText'])
        },
        mounted () {
            console.info('route=', this.$route)
            console.info('store=', this.$store)
            console.info('textPlus=', this.textPlus)
            let i = 1
            // this.$store.dispatch('updateCountAsync', {
            //     num: 5,
            //     time: 1000
            // })
            // 简化上面代码
            this.updateCountAsync({
                num: 5,
                time: 1000
            })
            this['a/updateText']('ddddd')
            this['a/add'](113)

            setInterval(() => {
                // this.$store.commit('updateCount', i++)
                // this.$store.commit('updateCount', {
                //      num: i++,
                //      num2: 123
                //  })
                this.updateCount({
                    num: i++,
                    num2: 123
                })
            }, 1000)
        },
        computed: {
            // ...mapState(['count']),
            ...mapState({
                count: (state) => state.count,
                text: (state) => state.a.text
            }),
            // count () {
            //     return this.$store.state.count
            // },
            ...mapGetters({
                fullName: 'fullName',
                textPlus: 'a/textPlus'
            })
            // fullName () {
            //     return this.$store.getters.fullName
            // }
        }
    }
</script>

<!--scoped 下面的样式只针对此组件-->
<style lang="stylus" scoped>
    #app {
        position absolute
        left 0
        right 0
        top 0
        bottom 0
    }

    #cover {
        position absolute
        left 0
        top 0
        right 0
        bottom 0
        background-color #999
        opacity .9
        z-index -1
    }

    #loading {
        position fixed
        top 0
        right 0
        bottom 0
        left 0
        background-color rgba(255, 255, 255, .3)
        z-index 99
        display flex
        align-items center
        justify-content center
    }
</style>
