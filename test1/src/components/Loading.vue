<template>
    <div class="loading-container">
        <div class="loading-spinner"></div>
        <div v-if="text" class="loading-text">{{ text }}</div>
    </div>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        default: '加载中...'
    }
})
</script>

<style scoped>
.loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.loading-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid #42b983;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 10px;
}

.loading-text {
    color: #666;
    font-size: 14px;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>