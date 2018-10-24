<template>
    <main class="slider-main">
        <div class="wrapper-prev" :class="wrapperClass" v-if="prevPhoto" :style="wrapperStyle">
            <slider-photo :src="prevPhoto.src" :alt="prevPhoto.codeName"></slider-photo>
        </div>
        <div class="wrapper-now" :class="wrapperClass" :style="wrapperStyle">
            <slider-photo :src="nowPhoto.src" :alt="nowPhoto.codeName" @moved="doMove" @movEnd="doEnd"></slider-photo>
        </div>
        <div class="wrapper-next" :class="wrapperClass" v-if="nextPhoto" :style="wrapperStyle">
            <slider-photo :src="nextPhoto.src" :alt="nextPhoto.codeName"></slider-photo>
        </div>
        <div class="slider-index">{{now + 1}} / {{total}}</div>
        <div class="slider-kill" @click="killMe">
            <dyn-icon :paths="['M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z']"></dyn-icon>
        </div>
    </main>
</template>

<script>
    import SliderPhoto from '@/components/SliderPhoto.vue'
    import DynIcon from '@/components/DynIcon.vue'

    export default {
        name: 'Slider',
        components: {
            SliderPhoto,
            DynIcon
        },
        props: {
            photos: Array,
            now: Number,
            total: Number
        },
        data() {
            return {
                disX: 0,
                aniOn: false
            }
        },
        computed: {
            nowPhoto() {
                return this.photos[this.now]
            },
            prevPhoto() {
                return this.photos[this.now - 1]
            },
            nextPhoto() {
                return this.photos[this.now + 1]
            },
            wrapperStyle() {
                return {
                    transform: 'translateX(' + this.disX + 'px)',

                }
            },
            wrapperClass() {
                return {
                    'wrapper-moving': this.aniOn
                }
            }
        },
        methods: {
            killMe() {
                this.$emit("killMe")
            },
            doMove(dis) {
                this.disX = dis

            },
            doEnd(dis) {
                if (Math.abs(dis) > 30) {
                    this.aniOn = true
                    if (dis > 0 && this.prevPhoto) {
                        this.disX = window.innerWidth
                    } else if (dis < 0 && this.nextPhoto) {
                        this.disX = -(window.innerWidth)
                    } else {
                        this.disX = 0
                    }
                    setTimeout(() => {
                        this.$emit('changeNow', dis)
                        this.aniOn = false
                        this.disX = 0
                    }, 250);
                }
            }
        },
        created() {
            document.body.style.overflow = 'hidden'
        },
        destroyed() {
            document.body.style.overflow = 'auto'
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";

    .slider-main {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 6;
        background-color: rgba(0, 0, 0, 0.875);
    }

    .slider-kill {
        position: absolute;
        top: 0;
        right: 0;
        width: 56px;
        height: 56px;
        padding: 16px;
        box-sizing: border-box;

        .icon {
            fill: @basicWhite;
        }
    }

    .slider-index {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        color: fade(@basicWhite, 50%);
        line-height: 5vh;
        height: 5vh;
        font-size: 0.75em;
    }

    .wrapper-now,
    .wrapper-prev,
    .wrapper-next {
        .abs-abs();
        width: 100vw;
    }

    .wrapper-prev {
        right: 100vw;
        left: auto;
        width: 100vw;
    }

    .wrapper-next {
        left: 100vw;
        right: auto;
        width: 100vw;
    }

    .wrapper-moving {
        transition: transform .25s;
    }
</style>