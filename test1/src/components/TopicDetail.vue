<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getTopicDetail } from '../api/topics'
import Loading from './Loading.vue'

const route = useRoute()
const topic = ref(null)
const loading = ref(false)
const error = ref('')

const fetchTopic = async () => {
    loading.value = true
    try {
        const res = await getTopicDetail(route.params.id)
        if (res.success) {
            topic.value = res.data
        } else {
            error.value = '获取数据失败'
        }
    } catch (err) {
        error.value = err.message || '获取数据失败'
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    fetchTopic()
})
</script>

<template>
    <div class="topic-detail">
        <Loading v-if="loading" />

        <div v-else-if="error" class="error">
            {{ error }}
        </div>

        <div v-else-if="topic" class="content">
            <h1 class="title">{{ topic.title }}</h1>

            <div class="author-info">
                <img :src="topic.author.avatar_url" :alt="topic.author.loginname" class="avatar">
                <div class="info">
                    <div class="name">{{ topic.author.loginname }}</div>
                    <div class="meta">
                        发布于: {{ new Date(topic.create_at).toLocaleString() }}
                    </div>
                </div>
            </div>

            <div class="markdown-body" v-html="topic.content"></div>

            <div class="replies" v-if="topic.replies.length">
                <h3>{{ topic.replies.length }} 条回复</h3>
                <div v-for="reply in topic.replies" :key="reply.id" class="reply">
                    <div class="reply-author">
                        <img :src="reply.author.avatar_url" :alt="reply.author.loginname" class="avatar">
                        <div class="info">
                            <div class="name">{{ reply.author.loginname }}</div>
                            <div class="meta">
                                {{ new Date(reply.create_at).toLocaleString() }}
                            </div>
                        </div>
                    </div>
                    <div class="reply-content" v-html="reply.content"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.topic-detail {
    max-width: 1200px;
    margin: 70px auto 0;
    padding: 20px;
}

.loading,
.error {
    text-align: center;
    padding: 20px;
    color: #666;
}

.error {
    color: #ff4444;
}

.content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.title {
    margin: 0 0 20px 0;
    font-size: 24px;
    color: #2c3e50;
}

.author-info,
.reply-author {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 20px;
}

.info {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.name {
    font-weight: bold;
    color: #2c3e50;
}

.meta {
    font-size: 14px;
    color: #666;
}

.markdown-body {
    margin: 20px 0;
    padding: 20px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}

.replies {
    margin-top: 30px;
}

.replies h3 {
    margin-bottom: 20px;
    color: #2c3e50;
}

.reply {
    padding: 20px;
    border-bottom: 1px solid #eee;
}

.reply:last-child {
    border-bottom: none;
}

.reply-content {
    margin-left: 55px;
}

:deep(.markdown-body img) {
    max-width: 100%;
}
</style>