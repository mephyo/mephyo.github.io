<template>
    <div class="slider-wrapper">
        <transition-group name="slide" mode="out-in">
            <div class="slider-cover-wrapper" v-for="(p, index) in gallery" :key="index" v-if="index === coverIndex">
                <img v-if="!full" class="slider-cover" :src="p.src.thumb" :alt="name + 'Cover-' + (index+1)">
                <img v-else class="slider-cover" :src="p.src.jpg" :alt="name + 'Cover-' + (index+1)">
            </div>
        </transition-group>
        <div class="slider-title-wrapper">
            <h2>{{name}}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeSlider",
        props: {
            gallery: Array,
            name: String,
            full: Boolean
        },
        data() {
            return {
                coverIndex: 0,
                timer: ""
            }
        },
        methods: {
            changeCover() {
                this.coverIndex = this.coverIndex === 2 ? 0 : this.coverIndex + 1
            }
        },
        mounted() {
            for (let coverIndex = 0; coverIndex < this.gallery.length; coverIndex++) {
                const preloadImage = new Image()
                preloadImage.src = this.gallery[coverIndex];
            }
            const gapTime = Math.random() * 2000 + 5000;
            this.timer = setInterval(() => {
                this.changeCover();
            }, gapTime)

        },
        beforeDestroy() {
            clearInterval(this.timer)
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";
    .slider-wrapper {
        .abs-abs();
        overflow: hidden;
        box-sizing: border-box;
        .slider-cover-wrapper {
            .abs-abs();
            margin: 8px;
            .slider-cover {
                .abs-abs();
                width: 100%;
                height: 100%;
                display: block;
                object-fit: cover;
                border-radius: 8px;
            }
        }
        .slider-title-wrapper {
            .abs-abs();
            .flx-cet();
            h2 {
                font-size: 1em;
                white-space: nowrap;
                color: @basicWhite;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
                font-style: italic;
                font-weight: 400;
            }
        }
    }
</style>