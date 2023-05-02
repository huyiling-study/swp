<template>
    <div>
        <h3>watch侦听器的用法</h3>
        <input type="text" class="form-control" v-model.trim="username">
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'MyWatch',
    data() {
        return {
            username: 'admin'
        }
    },
    watch: {
        immediate: true,
        username: {
            async handler(newVal, oldVal) {
                const { data: res } = await axios.get('https://www.escook.cn/api/finduser/' + newVal)
                console.log(res);
            }
        }
    }
}
</script>

<style scoped>

</style>