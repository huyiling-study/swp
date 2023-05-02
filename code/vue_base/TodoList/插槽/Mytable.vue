<template>
    <div class="mytable">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>State</th>
        </tr>
        <tr v-for="item in list" :key="item.id">
            <slot :user="item"></slot>
        </tr>
    </div>
</template>

<script>
export default {
    name: 'Mytable',
    data() {
        return {
            list: [
                { id: 1, name: '雄安', state: true },
                { id: 2, name: '理论', state: false },
                { id: 3, name: '混合', state: true },
            ],
        }
    },
}
</script>

<style scoped>

</style>