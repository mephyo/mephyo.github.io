<template>
    <main class="judy-juice">
        <h1 class="judy-title">{{project.title}}</h1>
        <ul class="pal-list" v-if="galleryReady">
            <li class="pal-list-item" v-for="g in project.gallery" :key="g.id">
                <img class="pal-list-img" v-for="s in g.set" :key="s.src" :src="s.src" :alt="s.alt" :style="{width: s.width + 'px', height: s.height + 'px'}">
                <div class="pal-list-label">{{g.id}}</div>
            </li>
        </ul>
    </main>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                pageWidth: 375,
                galleryReady: false,
                project: {
                    title: '8',
                    gallery: [{
                            id: 1,
                            set: [{
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-1.jpg',
                                    width: 640,
                                    height: 960
                                },
                                {
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-2.jpg',
                                    width: 640,
                                    height: 960
                                }
                            ]
                        },
                        {
                            id: 2,
                            set: [{
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-3.jpg',
                                    width: 960,
                                    height: 640
                                },
                                {
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-4.jpg',
                                    width: 640,
                                    height: 960
                                }
                            ]
                        },
                        {
                            id: 3,
                            set: [{
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-5.jpg',
                                    width: 960,
                                    height: 640
                                },
                                {
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-6.jpg',
                                    width: 640,
                                    height: 960
                                }
                            ]
                        },
                        {
                            id: 4,
                            set: [{
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-7.jpg',
                                    width: 640,
                                    height: 960
                                },
                                {
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-9.jpg',
                                    width: 640,
                                    height: 960
                                }
                            ]
                        },
                        {
                            id: 5,
                            set: [{
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-8.jpg',
                                    width: 640,
                                    height: 960
                                },
                                {
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-10.jpg',
                                    width: 640,
                                    height: 960
                                }
                            ]
                        },
                        {
                            id: 6,
                            set: [{
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-11.jpg',
                                    width: 640,
                                    height: 960
                                },
                                {
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-17.jpg',
                                    width: 640,
                                    height: 960
                                }
                            ]
                        },
                        {
                            id: 7,
                            set: [{
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-12.jpg',
                                    width: 639,
                                    height: 960
                                },
                                {
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-15.jpg',
                                    width: 640,
                                    height: 960
                                }
                            ]
                        },
                        {
                            id: 8,
                            set: [{
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-13.jpg',
                                    width: 640,
                                    height: 960
                                },
                                {
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-14.jpg',
                                    width: 640,
                                    height: 960
                                }
                            ]
                        },
                        {
                            id: 9,
                            set: [{
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-19.jpg',
                                    width: 960,
                                    height: 640
                                },
                                {
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-18.jpg',
                                    width: 640,
                                    height: 960
                                }
                            ]
                        },
                        {
                            id: 10,
                            set: [{
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-20.jpg',
                                    width: 640,
                                    height: 960
                                },
                                {
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-25.jpg',
                                    width: 640,
                                    height: 960
                                }
                            ]
                        },
                        {
                            id: 11,
                            set: [{
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-21.jpg',
                                    width: 640,
                                    height: 960
                                },
                                {
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-22.jpg',
                                    width: 640,
                                    height: 960
                                }
                            ]
                        },
                        {
                            id: 12,
                            set: [{
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-23.jpg',
                                    width: 640,
                                    height: 960
                                },
                                {
                                    src: 'https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-24.jpg',
                                    width: 640,
                                    height: 960
                                }
                            ]
                        }
                    ]
                }
            }
        },
        methods: {
            back() {
                this.$router.back()
            }
        },
        mounted() {
            this.pageWidth = window.innerWidth
            this.project.gallery.forEach(g => {
                const bw1 = g.set[0].width
                const bh1 = g.set[0].height
                const bw2 = g.set[1].width
                const bh2 = g.set[1].height

                const sw1 = bh2 / bh1 * bw1
                const sh1 = bh2

                const theNumber = (this.pageWidth - 2) / (sw1 + bw2)

                g.set[0].width = theNumber * sw1
                g.set[0].height = theNumber * sh1
                g.set[1].width = theNumber * bw2
                g.set[1].height = theNumber * bh2
                this.galleryReady = true
            });
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";

    .judy-title {
        text-align: center;
        color: @basicWhite;
        margin: 32px 0;
    }

    .pal-list {

        &-item {
            position: relative;
            display: flex;
            justify-content: center;
            max-height: 400px;
            align-items: stretch;
            align-content: stretch;
            margin: 32px 0;
            box-sizing: border-box;
            border: 1px solid @basicWhite;
            box-shadow: @shadowCard;
        }

        &-img {
            display: block;
            outline: 1px solid @basicWhite;
            outline-offset: -1px;
        }

        &-label {
            position: absolute;
            width: 20px;
            height: 14px;
            line-height: 14px;
            text-align: center;
            background-color: @basicWhite;
            color: @basicBlack;
            bottom: -18px;
            right: 2px;
            box-shadow: @shadowBtn;
            border-radius: 3px;
            font-size: 10px;
            font-weight: 600;
        }
    }
</style>