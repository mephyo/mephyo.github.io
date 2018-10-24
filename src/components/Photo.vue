<template>
    <div class="basic-picture">
        <img class="basic-picture-img" :src="src.jpg" :alt="alt">
        <div class="basic-picture-scrim"></div>
    </div>
</template>

<script>
    export default {
        name: 'Photo',
        props: {
            src: Object,
            alt: String
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";
    .basic-picture {
        position: relative;
        &-img {
            display: block;
            margin: 0 auto;
            max-width: 100%;
            box-shadow: @shadowCard;
            outline: 1px solid rgba(255,255,255,0.25);
            outline-offset: -1px;
        }
        &-scrim {
            .abs-abs();
        }
    }
</style>