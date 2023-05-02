<template>
    <div class="student">
        <h2>{{ name }}</h2>
        <h2>{{ age }}</h2>
        <button @click="sendStudentName">把名字传给App</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:"胡伊玲",
                age:18
            }
        },
        methods:{
            sendStudentName(){
                // 触发Student组件实列身上的huyiling事件
                this.$emit('huyiling',this.name,666,777,888)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>