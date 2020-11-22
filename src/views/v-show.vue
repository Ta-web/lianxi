<template>
    <div>
        <div>
            <button @click="fangfaA">点我显示或隐藏P1</button>
            <button @click="fangfaB">点我显示或隐藏P2</button>
        </div>
        <p v-show="P1">我是显示或隐藏的P1</p>
        <p v-show="P2">我是显示或隐藏的P2</p>
    </div>
</template>

<script>
export default {
    name: 'show',
    data() {
        return {
            P1: true,
            P2: false,
        };
    },
    methods: {
        fangfaA() {
            this.P1 = !this.P1;
        },
        fangfaB() {
            this.P2 = !this.P2;
        },
    },
};
</script>
