<template>
    <main>
        <navigator></navigator>
        <ul class="home-gallery-list">
            <li v-for="(project, index) in gallery" :key="(index + 1) + '-' + project.codeName">
                <router-link :to="{ name: 'Project', params: { id: project.codeName }}">
                    <home-slider :gallery="project.cover" :name="project.name" :full="index === 0"></home-slider>
                </router-link>
            </li>
        </ul>
        <router-link to="/gallery">
            <dyn-btn>
                <international :langSet="moreBtn"></international>
            </dyn-btn>
        </router-link>
        <tail></tail>
    </main>
</template>

<script>
    import Navigator from '@/components/Navigator.vue'
    import Tail from '@/components/Tail.vue'
    import HomeSlider from '@/components/HomeSlider.vue'
    import DynBtn from '@/components/DynBtn.vue'
    import International from '@/components/International.vue'

    export default {
        name: 'Home',
        components: {
            Navigator,
            Tail,
            HomeSlider,
            DynBtn,
            International
        },
        data() {
            return {
                moreBtn: {
                    en: 'More',
                    ja: 'もっと見る',
                    cmn: '更多'
                }
            }
        },
        computed: {
            gallery() {
                const fullGallery = this.$store.state.gallery
                return fullGallery.slice(0, 5)
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

    .home-gallery-list {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        margin: 16px auto;
        padding: 0 8px;
        box-sizing: border-box;
        max-width: @sizes[tablet];

        li {
            width: 50%;
            height: 240px;
            position: relative;

            @media (min-width: @sizes[tablet]) {
                height: 300px;
            }

            &:first-child {
                width: 100%;

                @media (min-width: @sizes[tablet]) {
                    height: 600px;
                }
            }
        }
    }
</style>