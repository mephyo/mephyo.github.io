import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

Vue.http.options.root = 'https://camera-dev-cavallo.herokuapp.com/'
Vue.http.options.emulateJSON = true;

export default new Vuex.Store({
    state: {
        lang: 'en',
        viewTimes: 0,
        location: '',
        gallery: []
    },
    getters: {
        viewerInfo(state) {
            return {
                model: navigator.userAgent,
                viewTimes: state.viewTimes,
                lastLocation: state.location,
                navigator: {
                    language: navigator.language,
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            }
        }
    },
    mutations: {
        detLang(state) {
            const lang = navigator.language
            if (lang.includes('zh')) {
                state.lang = 'cmn'
            } else if (lang.includes('ja')) {
                state.lang = 'ja'
            } else {
                state.lang = 'en'
            }
        },
        setGallery(state, gallery) {
            state.gallery = gallery
        },
        detVisitor(state) {
            let viewTimes = localStorage.getItem("viewTimes")
            if (!viewTimes) {
                viewTimes = 1
            } else {
                viewTimes++
            }
            localStorage.setItem("viewTimes", viewTimes)
            state.viewTimes = viewTimes
        },
        detLocation(state) {
            let lastLocation = localStorage.getItem("lastLocation")
            if (!lastLocation) {
                lastLocation = "Not Applied."
            }
            state.location = lastLocation
        }
    },
    actions: {
        init(context) {
            context.commit("detLang")
            context.commit("detVisitor")
            context.commit("detLocation")
            if (process.env.NODE_ENV === 'development') return
            Vue.http.post('newViewer', context.getters.viewerInfo)
        },
        getGallery: function (context) {
            let url = "/json/gallery.json"
            if (process.env.NODE_ENV === 'development') url = "/json/galerie.json"

            return new Promise((resolve, reject) => {
                Vue.http.get(url).then(response => {
                    const prefix = response.body.prefix
                    let gallery = response.body.gallery.reverse()
                    gallery.forEach(g => {
                        g.cover = []
                        g.photos = []
                        for (let photoIndex = 1; photoIndex <= g.photoIds; photoIndex++) {
                            const photo = {
                                src: {
                                    jpg: prefix + g.codeName + "-" + photoIndex + ".jpg",
                                    thumb: prefix + 'c_limit,h_400,q_90:420,w_400/' + g.codeName + "-" + photoIndex + ".jpg"
                                },
                                codeName: g.codeName + "-" + photoIndex
                            }
                            g.photos.push(photo)
                        }
                        for (let coverIndex = 0; coverIndex < g.coverIds.length; coverIndex++) {
                            const coverId = g.coverIds[coverIndex];
                            g.cover.push(g.photos[coverId - 1])
                        }
                    });

                    context.commit("setGallery", gallery)
                    resolve()
                }, response => {
                    console.error("Get gallery failed.")
                    reject()
                });
            })
        },
        newLocation(context, position) {
            Vue.http.post('newLocation', {
                position: position
            })
        }
    }
})