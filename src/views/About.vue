<template>
    <main class="about-wrapper">
        <navigator :selected="2"></navigator>
        <article class="about-main">
            <section>
                <p lang="en"><del>Sorry, there is no about page yet.</del></p>
                <p lang="ja"><del>申し訳ありませんが、ページはまだありません。</del></p>
                <p lang="cmn"><del>不好，现在还没有关于页面。</del></p>
            </section>
            <section>
                <p>不像其他那些「独立摄影师」的所谓「个人项目」，这个网站纯粹是用来把从2014年开始我拍过的东西展示出来。</p>
                <p>如果你是因为想做我的模特而来到这里，希望你能花点时间填一下申请，这样能帮助我了解你想拍什么样的照片。</p>
            </section>
        </article>
    </main>
</template>

<script>
    import Navigator from '@/components/Navigator.vue'

    export default {
        name: 'About',
        components: {
            Navigator
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";

    .about-wrapper {
        text-align: center;
        color: @greyBg;

        .about-main {
            padding: 8px 16px;
            margin: 0 auto;
            max-width: @sizes[tablet];
            box-sizing: border-box;

            section {
                margin: 2.5em 0;
            }

            h3 {
                text-align: start;
                font-size: 2em;
                font-weight: 200;
                color: @greyBg;
                border-bottom: .5px solid @greyMain;
                padding-bottom: .25em;
            }

            p {
                text-align: start;
                font-weight: 400;
            }
        }
    }
</style>