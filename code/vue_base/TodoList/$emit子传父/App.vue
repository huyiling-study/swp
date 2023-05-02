<template>
  <div class="app">
    <h1>父组件：{{ num }}</h1>
    <Son @getNum="getNum"/>
  </div>
</template>

<script>
import Son from './components/Son.vue';
  export default {
    name:'App',
    components:{Son},
    data() {
      return {
        num:""
      }
    },
    methods:{
      getNum(num){
        this.num = num
        console.log("我是父组件我收到子组件数据了",num);
      }
    }
  }
</script>

<style scoped>
.app{
  background-color: gray;
  padding: 5px;
}
</style>