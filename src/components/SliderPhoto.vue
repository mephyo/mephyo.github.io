<template>
    <div class="silder-photo-wrapper" @touchstart="startTouch" @touchmove="moveTouch" @touchend="endTouch">
        <img class="slider-photo" :src="src.jpg" :alt="alt">
    </div>
</template>

<script>
    export default {
        name: 'SliderPhoto',
        props: {
            src: Object,
            alt: String
        },
        data() {
            return {
                startX: 0,
                disX: 0
            }
        },
        methods: {
            startTouch(e) {
                e.preventDefault()
                const posX = e.changedTouches[0].clientX
                this.startX = posX
            },
            moveTouch(e) {
                e.preventDefault()
                const posX = e.changedTouches[0].clientX
                this.disX = posX - this.startX
                this.$emit('moved', this.disX)
            },
            endTouch() {
                this.$emit('movEnd', this.disX)
                this.startX = 0
                this.disX = 0
            }
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";

    .silder-photo-wrapper {
        .abs-abs();
        .flx-cet();

        .slider-photo {
            display: block;
            margin: 0 auto;
            max-width: 90vw;
            max-height: 90vh;
            box-shadow: @shadowCard;
            outline: 1px solid rgba(255, 255, 255, 0.25);
            outline-offset: -1px;
            user-select: none;
        }
    }
</style>