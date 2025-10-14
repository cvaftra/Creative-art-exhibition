<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const navItems = [
    { name: '首页', path: '/' },
    { name: '新手入门', path: '/getstart' },
    { name: 'API', path: '/api' },
    { name: '关于', path: '/about' },
    { name: '注册', path: '/register' },
    { name: '登录', path: '/login' }
]
let abc = 1234

</script>

<template>
    <header class="header">
        <div class="container">
            <div class="brand">
                <!-- <router-link to="/">CNode 社区</router-link> -->
                <router-link to="/">
                    <img style=" height: 40px;" src="@/assets/logo.svg" alt="CNode 社区" class="logo">
                </router-link>
            </div>
            <nav class="nav">
                <router-link v-for="item in navItems" :key="item.path" :to="item.path" class="nav-item"
                    :class="{ active: route.path === item.path }">
                    {{ item.name }}
                </router-link>
                <router-link to="/home" class="nav-item">
                    Home
                </router-link>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.header {
    background-color: #444;
    color: white;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.brand {
    font-size: 1.2em;
    font-weight: bold;
}

.brand a {
    color: white;
    text-decoration: none;
}

.nav {
    display: flex;
    gap: 20px;
    margin-left: 50px;
}

.nav-item {
    color: #ccc;
    text-decoration: none;
    padding: 4px 8px;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.nav-item:hover {
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
}

.nav-item.active {
    color: white;
    background-color: rgba(255, 255, 255, 0.2);
}
</style>