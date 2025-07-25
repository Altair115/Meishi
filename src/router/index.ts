import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from "@/views/BlogView.vue";
// Import more views here to add them


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'About',
        component: HomeView
    },
    {
        path: '/projects',
        name: 'Projects',
        component: HomeView
    },
    {
        path: '/contact',
        name: 'Contact',
        component: HomeView
    },
    {
        path: '/blog',
        name: 'Blog',
        component: BlogView,
    },
]


const router = createRouter({
    history: createWebHashHistory(), // Hash mode for GitHub Pages compatibility
    routes,
    scrollBehavior(to, from, savedPosition) {
        // Smooth scroll to section, if matching route
        if (to.path === '/about') {
            return { el: '#about', behavior: 'smooth' }
        }
        if (to.path === '/projects') {
            return { el: '#projects', behavior: 'smooth' }
        }
        if (to.path === '/contact') {
            return { el: '#contact', behavior: 'smooth' }
        }
        // Default scroll to top for Home/Blog, or saved position for history nav
        if (to.path === '/') {
            return { top: 0 }
        }
        if (savedPosition) {
            return savedPosition
        }
        return {}
    }
})

export default router
