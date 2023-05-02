<template>
    <div class="todo-header">
        <input type="text" placeholder="待办任务..." @keyup.enter="add" v-model="title">
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name: "MyHeader",
    // props:['addTodo'],
    data() {
      return {
        title:''
      }
    },
    methods: {
      add(e){
        // 校验输入框是否为空
        if(!this.title.trim()) return
        // 将用户包装成一个todo对象
        const todoObj = {id:nanoid(),title:this.title,completed:false}
        // 通知App组件去添加一个todo对象
        this.$emit('addTodo',todoObj)
        this.title=''
      }
    },
}
</script>

<style lang="css" scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>