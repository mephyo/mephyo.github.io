<template>
    <nav class="nav" :class="{'shah': shah}">
        <div class="nav-logo-wrapper" @click.stop="go('/')">
            <dyn-icon :paths="['M12 0C5.373 0 0 5.373 0 12c0 6.006 4.412 10.982 10.173 11.861a35.448 35.448 0 0 0-.377-2.834l3.524-.476a119.13 119.13 0 0 0-.139 3.391C19.254 23.35 24 18.23 24 12c0-6.627-5.373-12-12-12zm4.74 11.388c-1.069 0-2.15-.046-3.242-.14l-.106.352c2.573 2.126 3.86 3.524 3.86 4.194 0 .481-.26.96-.776 1.436-.517.475-1.028.713-1.533.713-.963 0-1.856-1.836-2.678-5.603h-.406c-1.292 3.397-2.36 5.093-3.206 5.093-.494 0-1.011-.21-1.551-.626-.54-.417-.81-.866-.81-1.348 0-.846 1.503-2.168 4.51-3.965l-.105-.405c-1.316-.106-3.043-.347-5.181-.722-.458-.153-.687-.588-.687-1.305 0-.563.135-1.086.405-1.568.27-.481.646-.722 1.128-.722.681 0 2.296 1.016 4.846 3.048l.317-.211c-.6-2.632-.899-4.346-.899-5.145 0-.364.203-.661.608-.89a2.76 2.76 0 0 1 1.383-.344c1.163 0 1.745.411 1.745 1.234 0 .928-.494 2.666-1.48 5.215l.282.282c2.572-1.644 4.21-2.467 4.915-2.467.447 0 .832.27 1.155.81.323.541.484 1.058.484 1.552 0 1.021-.992 1.532-2.978 1.532z']"></dyn-icon>
        </div>
        <ul class="nav-links">
            <li class="nav-links-item" v-for="l in links" :key="l.path" @click.stop="go(l.path)">
                <div class="nav-links-item-inner">
                    <international :langSet="l.name"></international>
                </div>
                <div class="nav-links-item-indicator" v-if="l.selected"></div>
            </li>
        </ul>
        <div class="nav-btn" @click.stop="go('/apply')">
            <international :langSet="applyBtn"></international>
        </div>
    </nav>
</template>

<script>
    import DynIcon from '@/components/DynIcon.vue'
    import International from '@/components/International.vue'
    export default {
        name: 'Navigator',
        components: {
            DynIcon,
            International
        },
        props: {
            selected: Number,
            shah: Boolean
        },
        data() {
            return {
                navLinks: [{
                        name: {
                            en: "Gallery",
                            ja: "ぎやらりい",
                            cmn: "画廊"
                        },
                        path: '/gallery'
                    },
                    {
                        name: {
                            en: "About",
                            ja: "約",
                            cmn: "关于"
                        },
                        path: '/about'
                    },
                    {
                        name: {
                            en: "Gojūon",
                            ja: "ごじゅうおん",
                            cmn: "五十音"
                        },
                        path: '/gojuon'
                    }
                ],
                applyBtn: {
                    en: 'Apply',
                    ja: '申し込む',
                    cmn: '申请'
                }
            }
        },
        computed: {
            links() {
                let links = this.navLinks.slice()
                if (this.selected) {
                    links[this.selected - 1].selected = true
                }
                return links
            }
        },
        methods: {
            go(path) {
                this.$router.push({
                    path: path
                });
            }
        },
    }
</script>

<style lang="less">
    @import "../style/variables.less";

    .nav {
        position: relative;
        z-index: 5;
        top: 0;
        left: 0;
        right: 0;
        height: 50px;
        transition: .25s;
        box-sizing: border-box;
        overflow: hidden;
        border-bottom-width: .5px;
        border-bottom-style: solid;
        margin: 0 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nav-logo-wrapper {
        height: 100%;
        cursor: pointer;
        .flx-cet();

        .icon {
            margin: 0 16px;
            filter: drop-shadow(@shadowBtn);
            fill: @greyFont;
            transition: .25s;

            @media (max-width: @sizes[mobile]) {
                margin: 0 8px;
            }
        }

        &:active {
            .icon {
                margin-bottom: 4px;
                filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.5));
            }
        }
    }

    .nav-links {
        margin: 0;
        padding: 0;
        display: flex;
        flex-grow: 1;
        justify-content: space-around;
        height: 100%;

        .nav-links-item {
            position: relative;
            list-style: none;
            flex-grow: 1;
            height: 100%;

            @media (max-width: 580px) {
                display: none;

                &:first-child {
                    display: block;
                }

                &:nth-child(2) {
                    display: block;

                    .nav-links-item-inner {
                        border-right-width: .5px;
                        border-right-style: solid;
                    }
                }
            }

            &:last-child &-inner {
                border-right-width: .5px;
                border-right-style: solid;
            }

            &:active {
                background: rgba(0, 0, 0, 0.125);
            }
        }

        .nav-links-item-inner {
            .btnBav();
            .abs-abs();
            .flx-cet();
            transition: .25s;
            margin: 10px 0;
            border-left-width: .5px;
            border-left-style: solid;
            text-shadow: @shadowBtn;
            padding: 0 8px;
            font-size: 1em;

            @media (max-width: @sizes[mobile]) {
                padding: 0 4px;
            }
        }

        .nav-links-item-indicator {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 1px;
        }
    }

    .nav-btn {
        .btnBav();
        position: relative;
        font-size: 0.875em;
        padding: 4px 8px;
        margin: 0 16px;
        border-radius: 4px;
        text-transform: uppercase;
        transition: .25s;

        &:active {
            margin-bottom: 4px;
        }

        @media (max-width: @sizes[mobile]) {
            margin: 0 8px;
        }
    }

    .nav {
        border-bottom-color: @greyLine;

        .nav-logo-wrapper .icon {
            fill: @greyBg;
        }

        .nav-links {
            .nav-links-item-inner {
                border-color: @greyLine;
                color: @greyBg;
            }

            .nav-links-item-indicator {
                background-color: @greyBg;
            }
        }

        .nav-btn {
            background-color: @greyMain;
            color: @greyFont;
        }
    }

    .nav.shah {
        color: @shahFont;
        border-bottom-color: @shahMain;

        .nav-logo-wrapper .icon {
            fill: @shahFont;
        }

        .nav-links {
            .nav-links-item-inner {
                border-color: @shahMain;
                color: @shahFont;
            }

            .nav-links-item-indicator {
                background-color: @shahMain;
            }
        }

        .nav-btn {
            background-color: @shahFont;
            color: @shahBg;
        }
    }
</style>