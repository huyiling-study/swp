<template>
    <div>
        <h3>About</h3>
        <router-link to="/about/tab1">Tab1</router-link>&nbsp;
        <router-link to="/about/tab2">Tab2</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'MyAbout'
    }
</script>

<style lang="scss" scoped>

</style>