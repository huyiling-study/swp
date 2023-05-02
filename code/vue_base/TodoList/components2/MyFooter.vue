<template>
  <!--当没有待办事项时，total为0，布尔值为false不展示-->
  <div class="todo-footer" v-show="total">
    <lable>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"> -->
      <input type="checkbox" v-model="isAll">
    </lable>
    <span>
      <span>已完成{{ completedTotal }}</span> / 全部{{ total }}个
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  props: ['todos', 'checkAllTodo','clearCompletedTodo'],
  computed: {
    total() {
      return this.todos.length
    },
    completedTotal() {
      // 初始值为0，遍历每一个对象，若completed为true，pre就加1，作为下一次计算的pre
      return this.todos.reduce((pre, current) => pre + (current.completed ? 1 : 0), 0)
    },
    isAll: {
      get() {
        this.completedTotal === this.total && this.total > 0
      },
      set(value) {
        // console.log("@@@",value);
        this.$emit('checkAllTodo',value)
      }
    }
  },
  methods: {
    // checkAll(e) {
    //   //通知App主键全选or不选
    //   this.checkAllTodo(e.target.checked)
    // },
    clearAll(){
      this.$emit('clearCompletedTodo')
    }
  }
}
</script>

<style lang="css" scoped>
/* footer */
.todo-footer {
  height: 40px;
  line-height: 40px;
}

.todo-footer label {
  cursor: pointer;
  float: left;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
}
</style>