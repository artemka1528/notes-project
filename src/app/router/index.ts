import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/pages/main/index.vue'),
        },
        {
            path: '/lk',
            component: () => import('../../pages/lk/index.vue'),
            meta: { requiresAuth: true },
        }
    ]
})

export default router
