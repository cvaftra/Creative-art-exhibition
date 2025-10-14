<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')

const handleSubmit = async () => {
    if (!username.value || !password.value) {
        error.value = '请填写完整信息'
        return
    }

    // 这里添加实际的登录逻辑
    console.log('登录信息：', { username: username.value, password: password.value })
    router.push('/')
}
</script>

<template>
    <div class="login-page">
        <div class="login-box">
            <h1>登录</h1>
            <form @submit.prevent="handleSubmit" class="login-form">
                <div class="form-group">
                    <label for="username">用户名</label>
                    <input id="username" v-model="username" type="text" placeholder="请输入用户名" autocomplete="username">
                </div>

                <div class="form-group">
                    <label for="password">密码</label>
                    <input id="password" v-model="password" type="password" placeholder="请输入密码"
                        autocomplete="current-password">
                </div>

                <div v-if="error" class="error-message">
                    {{ error }}
                </div>

                <button type="submit" class="login-button">登录</button>

                <div class="links">
                    <router-link to="/register">没有账号？立即注册</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.login-page {
    max-width: 1200px;
    margin: 70px auto 0;
    padding: 20px;
    display: flex;
    justify-content: center;
}

.login-box {
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
}

h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

label {
    color: #666;
    font-size: 14px;
}

input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}

input:focus {
    outline: none;
    border-color: #42b983;
}

.error-message {
    color: #ff4444;
    font-size: 14px;
    text-align: center;
}

.login-button {
    background-color: #42b983;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.login-button:hover {
    background-color: #3aa876;
}

.links {
    text-align: center;
    font-size: 14px;
}

.links a {
    color: #42b983;
    text-decoration: none;
}

.links a:hover {
    text-decoration: underline;
}
</style>