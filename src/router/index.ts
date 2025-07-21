import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// Import more views here to add them


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   component: () => import('../views/AboutView.vue'),
    // },
]

const router = createRouter({
    history: createWebHashHistory(), // Hash mode for GitHub Pages compatibility
    routes,
})

export default router
