<template>
  <section class="hero-bg h-screen flex items-center pt-16">
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
    <div class="container mx-auto px-6 relative z-10 text-center">
      <h1 class="text-5xl font-bold text-white mb-4">创意无限 · 美术新境</h1>
      <p class="text-xl text-white mb-8 max-w-2xl mx-auto">探索当代艺术的边界，感受视觉与心灵的碰撞</p>
      <div class="flex justify-center space-x-4">
        <button class="!rounded-button bg-primary hover:bg-blue-800 text-white px-6 py-3 whitespace-nowrap transition-colors duration-300">
          立即购票
        </button>
        <button class="!rounded-button bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 whitespace-nowrap transition-colors duration-300">
          了解更多
        </button>
      </div>
    </div>
    
    <!-- 滚动指示器 -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
      <div class="animate-bounce">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
};
</script>

<style scoped>
/* 组件特定样式 */
</style>