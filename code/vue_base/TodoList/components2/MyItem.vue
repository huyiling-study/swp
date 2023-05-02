<template>
  <li>
    <lable>
      <input type="checkbox" :checked="todo.completed" @change="handleChecked(todo.id)"/>
      <span>{{ todo.title }}</span>
    </lable>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  props: ['todo','checkTodo','deleteTodo'],
  methods: {
    // 勾选or取消勾选
    handleChecked(id){
      // console.log(id);
      // 通知App组件将对应的completed的值取反
      this.checkTodo(id)
    },
    // 删除
    handleDelete(id){
    // 通知App组件将对应的id事项
      this.deleteTodo(id)
    }
  },
}
</script>

<style lang="css" scoped>
/* item */
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
}

li label {
  cursor: pointer;
}

li button {
  display: none;
  margin: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: #ddd;
}
li:hover button{
  display: block;
}
</style>