<template>
    <main>
        <navigator :selected="1"></navigator>
        <ul class="gallery-list">
            <li v-for="g in gallery" :key="g.codeName" @click="go(g.codeName)">
                <stack :photoset="g.cover" :title="g.name"></stack>
            </li>
        </ul>
        <tail></tail>
    </main>
</template>

<script>
    import Navigator from '@/components/Navigator.vue'
    import Tail from '@/components/Tail.vue'
    import Stack from '@/components/Stack.vue'

    export default {
        name: 'Gallery',
        components: {
            Navigator,
            Stack,
            Tail
        },
        computed: {
            gallery() {
                return this.$store.state.gallery
            }
        },
        methods: {
            go(codeName) {
                this.$router.push({
                    name: 'Project',
                    params: {
                        id: codeName
                    }
                })
            }
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";
    .gallery-list {
        list-style: none;
        padding: 8px 0;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: @sizes[tablet];
    }
</style>