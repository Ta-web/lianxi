<template>
    <div>
        <div>
            <button @click="fangfaA">点我隐藏或显示P1</button>
            <button @click="fangfaB">点我隐藏或显示P2</button>
        </div>
        <P v-if="P1">我是显示或隐藏的P1</P>
        <p v-if="P2">我是显示或隐藏的P2</p>
    </div>
</template>

<script>
export default {
    name: 'if',
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
