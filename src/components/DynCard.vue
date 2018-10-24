<template>
    <div class="dyn-card-wrapper">
        <div class="dyn-card-scrim" :class="{'show': show}"></div>
        <div class="dyn-card" :class="{'show': show}">
            <slot></slot>
            <router-link to="/">
                <dyn-btn>
                    <div>去首页看看</div>
                </dyn-btn>
            </router-link>
        </div>
    </div>
</template>
<script>
    import DynBtn from '@/components/DynBtn.vue'
    export default {
        name: "DynCard",
        components: {
            DynBtn
        },
        data() {
            return {
                show: false
            }
        },
        mounted() {
            setTimeout(() => {
                this.show = true
            }, 50);
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

    .dyn-card-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 6;
        .flx-cet();

        .dyn-card-scrim {
            .abs-abs();
            background-color: rgba(0, 0, 0, 0.5);
            transition: .25s;
            opacity: 0;

            &.show {
                opacity: 1;
            }
        }

        .dyn-card {
            width: 75vw;
            height: 75vw;
            min-width: 240px;
            min-height: 240px;
            max-width: 400px;
            max-height: 400px;
            background-color: @basicWhite;
            border-radius: 16px;
            padding: 32px;
            box-sizing: border-box;
            box-shadow: @shadowCard;
            z-index: 7;
            transform: translateY(100vh);
            transition: .25s;
            .flx-cet();
            flex-direction: column;

            p {
                padding: 0;
                margin: .5em 0;
            }

            &.show {
                transform: none;
            }
        }
    }
</style>