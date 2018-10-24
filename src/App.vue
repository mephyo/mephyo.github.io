<template>
    <div id="app" :lang="language">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        computed: {
            language() {
                const lang = this.$store.state.language
                switch (lang) {
                    case 'cn':
                        return 'zh-cn'
                        break;

                    default:
                        return 'en'
                        break;
                }
            }
        },
        mounted() {
            localStorage.removeItem("likedPhotos")
            this.$store.dispatch("getGallery")
            this.$store.dispatch("init")
        }
    }
</script>