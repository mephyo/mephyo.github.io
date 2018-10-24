<template>
    <main>
        <navigator></navigator>
        <div class="project-content">
            <h2>{{project.name}}</h2>
            <ul class="photo-list">
                <li v-for="(p, index) in project.photos" :key="p.codename">
                    <photo :src="p.src" :alt="p.codeName" @click.native="showSlider(index)"></photo>
                    <div class="watermark-wrapper">
                        <span class="watermark">{{project.name}} {{index + 1}}</span>
                    </div>
                </li>
            </ul>
            <div class="project-navigator">
                <div class="proj-nav-btn" :class="{'faded': !prevProjectCodeName}" @click="goProject(prevProjectCodeName)">
                    <dyn-icon :paths="['M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z']"></dyn-icon>
                </div>
                <div class="proj-nav-btn" :class="{'faded': !nextProjectCodeName}" @click="goProject(nextProjectCodeName)">
                    <dyn-icon :paths="['M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z']"></dyn-icon>
                </div>
            </div>
        </div>
        <slider :photos="project.photos" :now="nowPhoto" :total="project.photos.length" v-if="sliderVisible" @killMe="sliderVisible = false" @changeNow="changeNow"></slider>
        <tail></tail>
    </main>
</template>

<script>
    import Photo from '@/components/Photo.vue'
    import Navigator from '@/components/Navigator.vue'
    import Tail from '@/components/Tail.vue'
    import DynIcon from '@/components/DynIcon.vue'
    import Slider from '@/components/Slider.vue'

    export default {
        name: 'Project',
        components: {
            Photo,
            Navigator,
            Tail,
            DynIcon,
            Slider
        },
        data() {
            return {
                project: {},
                prevProjectCodeName: "",
                nextProjectCodeName: "",
                nowPhoto: 0,
                sliderVisible: false
            }
        },
        methods: {
            indexing() {
                this.prevProjectCodeName = ""
                this.nextProjectCodeName = ""
                const codeName = this.$route.params.id
                const gallery = this.$store.state.gallery
                if (codeName && gallery.length) {
                    gallery.forEach(project => {
                        for (let index = 0; index < gallery.length; index++) {
                            const project = gallery[index];
                            if (project.codeName === codeName) {
                                this.project = project
                                if (index > 0) {
                                    this.prevProjectCodeName = gallery[index - 1].codeName
                                }
                                if (gallery[index + 1]) {
                                    this.nextProjectCodeName = gallery[index + 1].codeName
                                }
                            }
                        }
                    });
                } else {
                    setTimeout(() => {
                        this.indexing()
                    }, 500);
                }
            },
            goProject(codeName) {
                this.project = ""
                this.$router.push({
                    name: 'Project',
                    params: {
                        id: codeName
                    }
                })
            },
            showSlider(index) {
                this.nowPhoto = index
                this.sliderVisible = true
            },
            changeNow(dis) {
                if ((dis < 0) && this.project.photos[this.nowPhoto + 1]) {
                    this.nowPhoto = this.nowPhoto + 1
                } else if ((dis > 0) && this.project.photos[this.nowPhoto - 1]) {
                    this.nowPhoto = this.nowPhoto - 1
                }
            }
        },
        mounted() {
            this.indexing()
        },
        watch: {
            $route() {
                this.indexing()
            }
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";

    .project-content {
        padding: 16px 0;

        h2 {
            padding-top: 16px;
            text-align: center;
            color: @basicWhite;
        }

        .photo-list {
            padding-bottom: 16px;

            li {
                position: relative;
                text-align: center;
                max-width: @sizes[tablet];
                padding: 30px 0;
                margin: 0 auto;
                box-sizing: border-box;
                border-bottom: .5px solid rgba(255, 255, 255, 0.125);
            }
        }
    }

    .watermark-wrapper {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        margin-bottom: -15px;
        text-align: center;

        .watermark {
            color: rgba(255, 255, 255, 0.125);
            line-height: 30px;
            padding: 0 8px;
            font-size: 13px;
            font-weight: 400;
            font-style: italic;
            background-color: @greyFont;
        }
    }

    .project-navigator {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 32px;

        .proj-nav-btn {
            .flx-cet();
            width: 36px;
            height: 36px;
            border-radius: 20px;
            background-color: @greyMain;
            cursor: pointer;
            user-select: none;
            box-shadow: @shadowBtn;

            &.faded {
                opacity: 0.5;
                pointer-events: none;
                box-shadow: none;
            }

            &:active {
                box-shadow: @shadowBtnHover;
            }

            .icon {
                fill: @greyFont;
            }
        }
    }
</style>