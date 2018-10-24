<template>
    <div class="stack">
        <stack-photo class="stack-photo" v-for="p in randomPhotoset" :key="p.codename" :src="p.src.thumb"></stack-photo>
        <h2 class="stack-name">{{title}}</h2>
    </div>
</template>

<script>
    import StackPhoto from '@/components/StackPhoto.vue'
    export default {
        name: 'Stack',
        components: {
            StackPhoto
        },
        props: {
            photoset: Array,
            title: String
        },
        computed: {
            randomPhotoset() {
                return this.shuffle(this.photoset)
            }
        },
        methods: {
            shuffle(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            }
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";
    .stack {
        width: 160px;
        height: 180px;
        position: relative;
        overflow: hidden;
        .stack-name {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            margin: 0;
            font-size: 0.875em;
            font-weight: 400;
            text-align: center;
            color: @basicWhite;
            text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
        }
    }
</style>