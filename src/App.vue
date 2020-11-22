<template>
    <div id="app">
        <p><router-link to="/">home</router-link></p>
        <p><router-link to="/tiao">点我跳转</router-link></p>
        <p><router-link to="/dian">我也可以跳转哦</router-link></p>

        <router-view></router-view>

        <IF></IF>
        <hr />
        <hr />
        <Show></Show>
        <hr />
        <hr />
        <Bind></Bind>
        <hr />
        <hr />
        <On></On>
        <hr />
        <hr />

        <h3 :title="123" @click="fang">emit 例子</h3>
        <EmitProps :a="value" @suibian="fang"></EmitProps>
    </div>
</template>

<script>
import IF from './views/v-if.vue';
import Show from './views/v-show.vue';
import Bind from './views/v-bind.vue';
import On from './views/v-on.vue';
import EmitProps from './views/emit-props.vue';

export default {
    name: 'App',
    components: {
        IF,
        Show,
        Bind,
        On,
        EmitProps,
    },
    data() {
        return {
            value: '我传给子组件的值',
        };
    },

    methods: {
        fang(e) {
            console.log('来自父组件的打印', e);
        },
    },
};
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
