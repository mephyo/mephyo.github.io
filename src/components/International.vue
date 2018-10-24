<template>
    <div class="int">
        <div :lang="lang" class="txt-main">{{localLangSet.main}}</div>
        <div class="txt-secondary">
            <span v-for="(value, key) in localLangSet.secondary" :key="key" :lang="key">{{value}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'International',
        props: {
            langSet: Object
        },
        data() {
            return {
                localLangSet: {}
            }
        },
        computed: {
            lang() {
                return this.$store.state.lang
            }
        },
        mounted() {
            const lang = this.$store.state.lang
            let set = {
                main: {},
                secondary: this.langSet
            }
            set.main = this.langSet[lang]
            delete set.secondary[lang]
            this.localLangSet = set
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";
    .int {
        text-align: center;
        line-height: 1;
        .txt-main {
            font-size: 0.875em;
            font-weight: 500;
        }
        .txt-secondary {
            font-size: 0.5em;
            font-weight: 500;
            opacity: 0.875;
            padding-top: 4px;
            span:first-child:after {
                content: " / "
            }
        }
    }
</style>