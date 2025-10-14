<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getTopics } from '../api/topics'
import Loading from './Loading.vue'

const route = useRoute()
const router = useRouter()

const topics = ref([])
const loading = ref(false)
const error = ref('')
const currentTab = ref('all')

const tabs = [
    { name: '全部', tab: 'all' },
    { name: '精华', tab: 'good' },
    { name: '分享', tab: 'share' },
    { name: '问答', tab: 'ask' },
    { name: '招聘', tab: 'job' }
]

const fetchTopics = async () => {
    loading.value = true
    try {
        const res = await getTopics({
            page: 1,
            limit: 20,
            tab: currentTab.value === 'all' ? '' : currentTab.value
        })
        if (res.success) {
            topics.value = res.data
        } else {
            error.value = '获取数据失败'
        }
    } catch (err) {
        error.value = err.message || '获取数据失败'
    } finally {
        loading.value = false
    }
}

const changeTab = (tab) => {
    router.push(`/topics/${tab}`)
}

const goToDetail = (id) => {
    router.push(`/topic/${id}`)
}

// 监听路由参数变化
watch(() => route.params.tab, (newTab) => {
    currentTab.value = newTab || 'all'
    fetchTopics()
}, { immediate: true })
</script>

<template>
    <div class="topic-list">
        <div class="tabs">
            <button v-for="item in tabs" :key="item.tab" class="tab-button" :class="{ active: currentTab === item.tab }"
                @click="changeTab(item.tab)">
                {{ item.name }}
            </button>
        </div>

        <Loading v-if="loading" />

        <div v-else-if="error" class="error">
            {{ error }}
        </div>

        <div v-else class="topics">
            <div v-for="topic in topics" :key="topic.id" class="topic-item" @click="goToDetail(topic.id)">
                <div class="topic-header">
                    <img :src="topic.author.avatar_url" :alt="topic.author.loginname" class="avatar">
                    <div class="topic-info">
                        <h3 class="title">
                            <span v-if="topic.top" class="tag top">置顶</span>
                            <span v-else-if="topic.good" class="tag good">精华</span>
                            {{ topic.title }}
                        </h3>
                        <div class="meta">
                            <span>作者: {{ topic.author.loginname }}</span>
                            <span>回复: {{ topic.reply_count }}</span>
                            <span>访问: {{ topic.visit_count }}</span>
                            <span>发布于: {{ new Date(topic.create_at).toLocaleDateString() }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.topic-list {
    max-width: 1200px;
    margin: 70px auto 0;
    padding: 20px;
}

.tabs {
    margin-bottom: 20px;
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.tab-button {
    padding: 6px 12px;
    margin-right: 10px;
    border: none;
    background: none;
    color: #666;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.tab-button:hover {
    color: #42b983;
    background-color: #f0f0f0;
}

.tab-button.active {
    color: white;
    background-color: #42b983;
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

.topics {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.topic-item {
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
    background-color: white;
}

.topic-item:hover {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
}

.topic-header {
    display: flex;
    gap: 15px;
}

.avatar {
    width: 48px;
    height: 48px;
    border-radius: 24px;
}

.topic-info {
    flex: 1;
}

.title {
    margin: 0 0 8px 0;
    font-size: 16px;
    color: #2c3e50;
    display: flex;
    align-items: center;
    gap: 8px;
}

.tag {
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: normal;
}

.tag.top {
    background-color: #ff4081;
    color: white;
}

.tag.good {
    background-color: #42b983;
    color: white;
}

.meta {
    display: flex;
    gap: 15px;
    color: #666;
    font-size: 14px;
}
</style>