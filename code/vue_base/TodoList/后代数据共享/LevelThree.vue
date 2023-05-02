<template>
    <div>
        <h3>三级组件---{{ color.value }}</h3>
    </div>
</template>

<script>
export default {
    name: 'LevelThree',
    inject: ['color']
}
</script>

<style scoped>

</style>