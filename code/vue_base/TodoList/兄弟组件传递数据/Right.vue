<template>
    <div class="right">
        <h3>Right数据接收方---num的值为：{{ num }}</h3>
    </div>
</template>

<script>
import bus from './eventBus'
    export default {
        name:'Right',
        data() {
            return {
                num:0
            }
        },
        created(){
            // 调用bus.on()方法 注册一个自定义事件，通过事件处理函数的形参接收数据
            bus.on('countChange',(count)=>{
                this.num = count
            })
        }
    }
</script>

<style scoped>
.right{
    border: 1px #ddd solid;
    width: 300px;

}
</style>