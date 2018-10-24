<template>
    <svg class="icon" viewBox="0 0 24 24">
        <path v-for="(p, index) in paths" :d="p" :key="index" />
    </svg>
</template>

<script>
    export default {
        name: 'DynIcon',
        props: {
            paths: Array
        }
    }
</script>

<style lang="less">
    .icon {
        width: 24px;
        height: 24px;
        display: block;
    }
</style>