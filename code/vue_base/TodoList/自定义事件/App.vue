<!-- 
  父组件中给子组件绑定自定义事件 子组件内触发
  （给谁绑的自定义事件就找谁触发）
 -->
<!-- 
  当huyiling被触发时，执行回调
-->

<template>
  <div class="App">
    <!-- 第一种：通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（@） -->
    <Student @huyiling="getStudentName" />
  </div>
</template>

<script>
import Student from './components/student.vue';

export default {
  name: 'App',
  components: { Student },
  data() {
    return {
      msg: '你好！'
    }
  },
  methods: {
    // 配置回调函数（作为事件的回调在使用）
    getStudentName(name, ...params) {
      console.log("我是app组件，我拿到子组件的名字了:", name, params);
    }
  },

}
</script>

<style lang="scss" scoped>

</style>
