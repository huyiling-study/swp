<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo" /><!--向子组件传递函数-->
        <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" /><!--设置todos属性，将todos数据传过去-->
        <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearCompletedTodo="clearCompletedTodo" />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyFooter from "./components/MyFooter.vue"
import MyList from './components/MyList.vue'

export default {
  name: 'App',
  components: { MyHeader, MyList, MyFooter },
  data() {
    return {
      todos: [
        { id: '001', title: '学习Vue', completed: false },
        { id: '002', title: '学习React', completed: true },
        { id: '003', title: '学习NodeJs', completed: false },
      ]
    }
  },
  // 数据在哪操作数据的方法就在哪（在app里写数据增删改查）
  methods: {
    // 添加一个todo
    addTodo(t) {
      // console.log('App组件，我收到的数据',t);
      this.todos.unshift(t)
    },
    // 取消or勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.completed = !todo.completed
      })
    },
    // 删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)//过滤出与被删除id不同的，生成新数组
      console.log(this.todos);
    },
    // 全选or全不选
    checkAllTodo(com) {
      this.todos.forEach((todo) => {
        todo.completed = com
      })
    },
    // 清除已完成的Todo
    clearCompletedTodo() {
      this.todos = this.todos.filter(todo => !todo.completed)//过滤出不等于todo.completed
    }
  }
}
</script>

<style>
/* base */
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>