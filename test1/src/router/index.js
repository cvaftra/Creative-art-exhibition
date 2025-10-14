import { createRouter, createWebHistory } from 'vue-router'
import TopicList from '../components/TopicList.vue'
import TopicDetail from '../components/TopicDetail.vue'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/topics/all'
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: '/home/:id',
                    component: () => import('../views/subPages/Home1.vue')
                },
                // {
                //     path: '/home/home2',
                //     component: () => import('../views/subPages/Home2.vue')
                // },
                // {
                //     path: '/home/home3',
                //     component: () => import('../views/subPages/Home3.vue')
                // }
            ]
        },
        {
            path: '/topics/:tab',
            name: 'topics',
            component: TopicList
        },
        {
            path: '/getstart',
            name: 'getstart',
            component: () => import('../views/GetStart.vue')
        },
        {
            path: '/api',
            name: 'api',
            component: () => import('../views/Api.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/Register.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '/topic/:id',
            name: 'topic',
            component: TopicDetail
        }
    ]
})

export default router
