<template>
    <div class="left">
        <h3>Left数据发送方---count的值为：{{ count }}</h3>
        <button @click="add">+1</button>
    </div>
</template>

<script>
import bus from './eventBus'
    export default {
        name:'Left',
        data() {
            return {
                count:0
            }
        },
        methods: {
            add(){
                this.count++
                bus.emit('countChange',this.count)
            }
        },
    }
</script>

<style scoped>
.left{
    border: 1px #ddd solid;
    width: 300px;
}
</style>