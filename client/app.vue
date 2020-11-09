<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
<!--        <router-link to="/app/123">app</router-link>-->
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
    import Header from './layout/header.vue'
    import Footer from './layout/footer.vue'
    import Todo from './views/todo/todo.vue'

    export default {
        components: {
            Header,
            Footer,
            Todo
        },
        mounted () {
            console.info('route=', this.$route)
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
