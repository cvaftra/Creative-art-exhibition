<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')

const handleSubmit = async () => {
    if (!username.value || !email.value || !password.value || !confirmPassword.value) {
        error.value = '请填写完整信息'
        return
    }

    if (password.value !== confirmPassword.value) {
        error.value = '两次输入的密码不一致'
        return
    }

    // 这里添加实际的注册逻辑
    console.log('注册信息：', {
        username: username.value,
        email: email.value,
        password: password.value
    })
    router.push('/login')
}
</script>

<template>
    <div class="register-page">
        <div class="register-box">
            <h1>注册</h1>
            <form @submit.prevent="handleSubmit" class="register-form">
                <div class="form-group">
                    <label for="username">用户名</label>
                    <input id="username" v-model="username" type="text" placeholder="请输入用户名" autocomplete="username">
                </div>

                <div class="form-group">
                    <label for="email">电子邮箱</label>
                    <input id="email" v-model="email" type="email" placeholder="请输入电子邮箱" autocomplete="email">
                </div>

                <div class="form-group">
                    <label for="password">密码</label>
                    <input id="password" v-model="password" type="password" placeholder="请输入密码"
                        autocomplete="new-password">
                </div>

                <div class="form-group">
                    <label for="confirm-password">确认密码</label>
                    <input id="confirm-password" v-model="confirmPassword" type="password" placeholder="请再次输入密码"
                        autocomplete="new-password">
                </div>

                <div v-if="error" class="error-message">
                    {{ error }}
                </div>

                <button type="submit" class="register-button">注册</button>

                <div class="links">
                    <router-link to="/login">已有账号？立即登录</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.register-page {
    max-width: 1200px;
    margin: 70px auto 0;
    padding: 20px;
    display: flex;
    justify-content: center;
}

.register-box {
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

.register-form {
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

.register-button {
    background-color: #42b983;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.register-button:hover {
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