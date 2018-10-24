import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Gallery from './views/Gallery.vue'
import Project from './views/Project.vue'
import About from './views/About.vue'
import Apply from './views/Apply.vue'
import Gojuon from './views/Gojuon.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/gallery',
            name: 'Gallery',
            component: Gallery
        },
        {
            path: '/project/:id',
            name: 'Project',
            component: Project
        },
        {
            path: '/about',
            alias: '/copyright',
            name: 'About',
            component: About
        },
        {
            path: '/apply',
            name: 'Apply',
            component: Apply
        },
        {
            path: '/gojuon',
            name: 'Gojuon',
            component: Gojuon
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})