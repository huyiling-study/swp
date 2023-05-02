<template>
    <div>
        <h2>Mytest组件</h2>
        <slot :info="infomation" :msg="massage"></slot>
    </div>
</template>

<script>
    export default {
        name:'Mytest',
        data() {
            return {
                infomation:{
                    phone:'166****0954',
                    address:'武汉'
                },
                massage:'欢迎光临！'
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>