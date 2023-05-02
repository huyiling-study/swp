<template>
    <div>
        <h2>二级组件</h2>
        <hr>
        <LevelThree/>
    </div>
</template>

<script>
    import LevelThree from './LevelThree.vue';
    export default {
        name:'LevelTwo',
        components:{LevelThree},
        data() {
            return {
                
            }
        },
    }
</script>

<style scoped>

</style>