<template>
    <div class="son">
        <h3>子组件---{{ num }}</h3>
        <button @click="sendNum">子传父</button>
    </div>
</template>

<script>
export default {
    name: 'Son',
    emits:['getNum'],
    data() {
        return {
            num:0
        }
    },
    methods:{
        sendNum(){
            this.$emit('getNum',this.num++)
        }
    }    
}

</script>

<style scoped>
.son {
    background-color: pink;
}
</style>