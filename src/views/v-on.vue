<template>
    <div>
        <input @input="fangfaA" />
        <p :title="content">我显示 input 的内容</p>
    </div>
</template>
<script>
export default {
    name: 'on',
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
