<template>
    <ul class="todo-main">
      <!-- 
        :todo="t"用于给子组件传递数据
        （将遍历的数据存入todo，在MyItem用props注册数据） -->
        <MyItem 
        v-for="t in todos" 
        :key="t.id" 
        :todo="t" 
        :checkTodo="checkTodo"
        :deleteTodo="deleteTodo"
        />
    </ul>
</template>

<script>
import MyItem from './MyItem.vue';
export default {
    name: 'MyList',
    components:{MyItem},
    props:['todos','checkTodo','deleteTodo']
}
</script>

<style lang="css" scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>