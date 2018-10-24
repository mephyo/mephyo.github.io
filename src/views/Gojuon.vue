<template>
    <main class="gojuon">
        <navigator :selected="3"></navigator>
        <div class="gojuon-wrapper">
            <div class="gojuon-config" lang="cmn">
                <dyn-chk :active="showHira" @click.native="switchHira">平假名</dyn-chk>
                <dyn-chk :active="showKana" @click.native="switchKana">片假名</dyn-chk>
            </div>
            <table class="gojuon-table">
                <tr v-for="(row, index) in gojuon" :key="index">
                    <td v-for="(col, jndex) in row" :key="jndex" @click="giveMe(col)">
                        <div class="gojuon-card">
                            <div v-if="showHira" v-show="col.active" lang="ja-Hira">{{col.hira}}</div>
                            <div v-if="showKana" v-show="col.active" lang="ja-Kana">{{col.kana}}</div>
                            <div lang="en" v-show="!col.active">{{col.pro}}</div>
                        </div>
                        <div class="gojuon-marker" :class="{'selected': col.highlighted}" @click.stop="highMe(col)"></div>
                    </td>
                </tr>
            </table>
        </div>
    </main>
</template>

<script>
    import Navigator from '@/components/Navigator.vue'
    import DynChk from '@/components/DynChk.vue'

    export default {
        name: 'Gojuon',
        components: {
            Navigator,
            DynChk
        },
        data() {
            return {
                gojuon: [
                    [{
                            hira: 'あ',
                            kana: 'ア',
                            pro: 'a'
                        },
                        {
                            hira: 'い',
                            kana: 'イ',
                            pro: 'i'
                        },
                        {
                            hira: 'う',
                            kana: 'ウ',
                            pro: 'u'
                        },
                        {
                            hira: 'え',
                            kana: 'エ',
                            pro: 'e'
                        },
                        {
                            hira: 'お',
                            kana: 'オ',
                            pro: 'o'
                        }
                    ],
                    [{
                            hira: 'か',
                            kana: 'カ',
                            pro: 'ka'
                        },
                        {
                            hira: 'き',
                            kana: 'キ',
                            pro: 'ki'
                        },
                        {
                            hira: 'く',
                            kana: 'ク',
                            pro: 'ku'
                        },
                        {
                            hira: 'け',
                            kana: 'ケ',
                            pro: 'ke'
                        },
                        {
                            hira: 'こ',
                            kana: 'コ',
                            pro: 'ko'
                        }
                    ],
                    [{
                            hira: 'さ',
                            kana: 'サ',
                            pro: 'sa'
                        },
                        {
                            hira: 'し',
                            kana: 'シ',
                            pro: 'shi'
                        },
                        {
                            hira: 'す',
                            kana: 'ス',
                            pro: 'su'
                        },
                        {
                            hira: 'せ',
                            kana: 'セ',
                            pro: 'se'
                        },
                        {
                            hira: 'そ',
                            kana: 'ソ',
                            pro: 'so'
                        }
                    ],
                    [{
                            hira: 'た',
                            kana: 'タ',
                            pro: 'ta'
                        },
                        {
                            hira: 'ち',
                            kana: 'チ',
                            pro: 'chi'
                        },
                        {
                            hira: 'つ',
                            kana: 'ツ',
                            pro: 'tsu'
                        },
                        {
                            hira: 'て',
                            kana: 'テ',
                            pro: 'te'
                        },
                        {
                            hira: 'と',
                            kana: 'ト',
                            pro: 'to'
                        }
                    ],
                    [{
                            hira: 'な',
                            kana: 'ナ',
                            pro: 'na'
                        },
                        {
                            hira: 'に',
                            kana: 'ニ',
                            pro: 'ni'
                        },
                        {
                            hira: 'ぬ',
                            kana: 'ヌ',
                            pro: 'nu'
                        },
                        {
                            hira: 'ね',
                            kana: 'ネ',
                            pro: 'ne'
                        },
                        {
                            hira: 'の',
                            kana: 'ノ',
                            pro: 'no'
                        }
                    ],
                    [{
                            hira: 'は',
                            kana: 'ハ',
                            pro: 'ha'
                        },
                        {
                            hira: 'ひ',
                            kana: 'ヒ',
                            pro: 'hi'
                        },
                        {
                            hira: 'ふ',
                            kana: 'フ',
                            pro: 'fu'
                        },
                        {
                            hira: 'へ',
                            kana: 'ヘ',
                            pro: 'he'
                        },
                        {
                            hira: 'ほ',
                            kana: 'ホ',
                            pro: 'ho'
                        }
                    ],
                    [{
                            hira: 'ま',
                            kana: 'マ',
                            pro: 'ma'
                        },
                        {
                            hira: 'み',
                            kana: 'ミ',
                            pro: 'mi'
                        },
                        {
                            hira: 'む',
                            kana: 'ム',
                            pro: 'mu'
                        },
                        {
                            hira: 'め',
                            kana: 'メ',
                            pro: 'me'
                        },
                        {
                            hira: 'も',
                            kana: 'モ',
                            pro: 'mo'
                        }
                    ],
                    [{
                            hira: 'ら',
                            kana: 'ラ',
                            pro: 'ra'
                        },
                        {
                            hira: 'り',
                            kana: 'リ',
                            pro: 'ri'
                        },
                        {
                            hira: 'る',
                            kana: 'ル',
                            pro: 'ru'
                        },
                        {
                            hira: 'れ',
                            kana: 'レ',
                            pro: 're'
                        },
                        {
                            hira: 'ろ',
                            kana: 'ロ',
                            pro: 'ro'
                        }
                    ],
                    [{
                            hira: 'が',
                            kana: 'ガ',
                            pro: 'ga'
                        },
                        {
                            hira: 'ぎ',
                            kana: 'ギ',
                            pro: 'gi'
                        },
                        {
                            hira: 'ぐ',
                            kana: 'グ',
                            pro: 'gu'
                        },
                        {
                            hira: 'げ',
                            kana: 'ゲ',
                            pro: 'ge'
                        },
                        {
                            hira: 'ご',
                            kana: 'ゴ',
                            pro: 'go'
                        }
                    ],
                    [{
                            hira: 'ざ',
                            kana: 'ザ',
                            pro: 'za'
                        },
                        {
                            hira: 'じ',
                            kana: 'ジ',
                            pro: 'ji'
                        },
                        {
                            hira: 'ず',
                            kana: 'ズ',
                            pro: 'zu'
                        },
                        {
                            hira: 'ぜ',
                            kana: 'ゼ',
                            pro: 'ze'
                        },
                        {
                            hira: 'ぞ',
                            kana: 'ｿﾞ',
                            pro: 'zo'
                        }
                    ]
                ],
                showHira: true,
                showKana: false
            }
        },
        methods: {
            giveMe(col) {
                col.active = true
                this.$forceUpdate()
                setTimeout(() => {
                    col.active = false
                    this.$forceUpdate()
                }, 3000);
            },
            highMe(col) {
                col.highlighted = !col.highlighted
                this.$forceUpdate()
            },
            switchHira() {
                this.showHira = !this.showHira
            },
            switchKana() {
                this.showKana = !this.showKana
            }
        },
        mounted() {
            this.gojuon.forEach(row => {
                row.forEach(col => {
                    col.active = false
                    col.highlighted = false
                });
            });
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";

    .gojuon {
        background-color: #eee;
    }

    .gojuon-wrapper {
        padding: 16px 0;

        .gojuon-config {
            display: flex;
            justify-content: space-between;
            width: 352px;
            margin: 0 auto;
        }
    }

    .gojuon-table {
        border-collapse: collapse;
        border-style: hidden;
        margin: 0 auto;

        td {
            position: relative;
            height: 64px;
            width: 64px;
            padding: 0;
            box-sizing: border-box;

            .gojuon-card {
                .abs-abs();
                .flx-cet();
                text-align: center;
                cursor: pointer;
                user-select: none;
                background-color: @basicWhite;
                border-radius: 4px 10px 4px 4px;
                box-shadow: @shadowBtn;
                transition: .25s;
                height: 56px;
                width: 56px;
                margin: 4px;

                &:active {
                    box-shadow: @shadowBtnHover;
                }

                div {
                    color: #333;
                    font-weight: 400;
                    font-size: 1em;
                    line-height: 1;

                    &:first-child {
                        font-size: 1.5em;
                        font-weight: 500;
                    }
                }
            }

            .gojuon-marker {
                position: absolute;
                right: 0;
                top: 0;
                margin: 6px;
                height: 16px;
                width: 16px;
                box-sizing: border-box;
                border-radius: 8px;
                background-color: #eee;
                border: .5px solid #ccc;
                cursor: pointer;

                &:active {
                    background-color: rgba(255, 255, 255, 0.125);
                }

                &.selected {
                    background-color: #fff;
                }
            }
        }
    }
</style>