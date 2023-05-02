<template>
    <div>
        <h1>根组件---{{ color }}</h1>
        <button @click="changeColor">ChangeColor</button>
        <hr>
        <LevelTwo />
    </div>
</template>

<script>
import LevelTwo from './components/LevelTwo.vue';
import { computed } from 'vue';
export default {
    name: 'App',
    components: { LevelTwo },
    data() {
        return {
            color: 'red',
        }
    },
    methods: {
        changeColor() {
            this.color = 'blue'
        }
    },
    provide() {
        // 返回要共享的数据对象
        return {
            color: computed(() => this.color)
        }
    }
}
</script>

<style scoped>

</style>