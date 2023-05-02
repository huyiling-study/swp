<template>
    <div>
        <h1>根组件</h1>
        <Mytest>
            <template v-slot:default="{ msg, info }">
                <p>{{ msg }}</p>
                <p>{{ info.phone }}---{{ info.address }}</p>
            </template>
        </Mytest>
        <hr>
        <Mytable>
            <template #default="{ user }">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>
                    <input type="checkbox" :checked="user.state">
                </td>
            </template>
        </Mytable>
    </div>
</template>

<script>
import Mytest from './components/Mytest.vue'
import Mytable from './components/Mytable.vue';
export default {
    name: 'App',
    components: { Mytest, Mytable },
}
</script>

<style scoped>
td {
    border: 1px solid #ddd;
    width: 150px
}
</style>