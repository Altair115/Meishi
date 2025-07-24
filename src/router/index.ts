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
        path: '/blog',
        name: 'Blog',
        component: BlogView,
    },
]

const router = createRouter({
    history: createWebHashHistory(), // Hash mode for GitHub Pages compatibility
    routes,
})

export default router
