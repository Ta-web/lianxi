<template>
    <div>
        <input @input="fangfaA" />
        <p :title="content">这个标题显示 input 的内容</p>
        <p v-bind:title="content">我也是显示 input 的内容</p>
    </div>
</template>

<script>
export default {
    name: 'bind',
    data() {
        return {
            content: '',
        };
    },
    methods: {
        fangfaA(e) {
            this.content = e.target.value;
        },
    },
};
</script>
