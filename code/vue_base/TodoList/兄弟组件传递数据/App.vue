<template>
  <h2>根组件</h2>
  <div class="app">
    <Left></Left>
    <Right></Right>
  </div>
</template>

<script>
import Left from './components/Left.vue'
import Right from './components/Right.vue'
export default {
  name: 'App',
  components: { Left, Right }
}
</script>

<style scoped>
*{
  margin: 0 auto;
}
.app {
  display: flex;
  justify-content:space-around;
  border: 2px solid #555;
  padding: 20px;
  width: 700px;
}
</style>