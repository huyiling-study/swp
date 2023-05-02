<template>
    <div>
        <h3>Set组件 --- {{ $route.params.id }}---{{ id }}</h3>
    </div>
</template>

<script>
    export default {
        name:'Myset',
        props:['id']
    }
</script>

<style lang="scss" scoped>

</style>