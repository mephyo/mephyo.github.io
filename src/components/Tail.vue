<template>
    <footer>
        <section v-for="f in footers" :key="f.lang" :lang="f.lang">
            <p v-for="(s, index) in f.strings" :key="index">{{s}}</p>
        </section>
    </footer>
</template>

<script>
    export default {
        name: 'Tail',
        data() {
            return {
                footers: [{
                        lang: 'en',
                        strings: ['All rights reserved', 'Please respect the model']
                    },
                    {
                        lang: 'ja',
                        strings: ['全著作権所有', 'モードを尊重してください']
                    },
                    {
                        lang: 'cmn',
                        strings: ['版权所有', '请尊重模特']
                    }
                ]
            }
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";

    footer {
        padding: 0 16px;
        margin: 0 8px;
        font-size: 0.75em;
        color: @greyLine;
        text-align: center;
        border-top: .5px solid @greyLine;

        section {
            margin: 1em auto;
        }

        p {
            margin: .25em 0;
        }
    }
</style>