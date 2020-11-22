<template>
    <div>
        <div @click="fangfa">我是子组件 的emit</div>
    </div>
</template>

<script>
export default {
    name: 'emit',
    props: ['a'],
    data() {
        return {
            i: 0,
        };
    },
    methods: {
        fangfa() {
            console.log(this.a);
            this.i++;
            this.$emit('suibian', `当前点击次数${this.i}`);
        },
    },
};
</script>
