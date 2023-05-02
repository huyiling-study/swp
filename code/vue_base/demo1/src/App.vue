<template>
  <div>
    <h1>根组件</h1>
    <router-link to="/home">Home</router-link>&nbsp;
    <router-link to="/movie">Movie</router-link>
    <div></div>
    <el-button type="primary" @click="getInfo">主要按钮</el-button>
    <el-button type="success" @click="getUsers">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    async getInfo() {
      const { data: res } = await this.$http.get('/api/get', { params: { name: 'zs', age: 20 } })
      console.log(res);
    },
    // 获取用户列表的数据
    async getUsers() {
      const { data: res } = await this.$http.get('/api/users')
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped></style>