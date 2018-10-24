<template>
    <img class="stack-photo" :src="src" @load="imageReady" ref="photo" :style="photoStyle" />
</template>

<script>
    export default {
        name: 'StackPhoto',
        props: {
            src: String
        },
        data() {
            return {
                photoStyle: {
                    marginTop: '0px',
                    marginLeft: '0px',
                    transform: 'rotate(0deg) translateZ(0)',
                    opacity: 0
                }
            }
        },
        methods: {
            calcPosition() {
                const photoBox = this.$refs.photo
                this.photoStyle.marginTop = photoBox.offsetHeight / -2 + 'px'
                this.photoStyle.marginLeft = photoBox.offsetWidth / -2 + 'px'
            },
            calcAngle() {
                const angle = Math.floor(Math.random() * 30) - 15
                this.photoStyle.transform = 'rotate(' + angle + 'deg) translateZ(0)'
            },
            imageReady() {
                this.calcPosition()
                this.calcAngle()
                this.photoStyle.opacity = 1
            }
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";
    .stack-photo {
        max-width: 120px;
        max-height: 120px;
        position: absolute;
        display: block;
        top: 80px;
        left: 80px;
        border: 2px solid @basicWhite;
        box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.05), 0 4px 2px 2px rgba(0, 0, 0, 0.025);
        transform-origin: center;
        transition: opacity .5s;
    }
</style>