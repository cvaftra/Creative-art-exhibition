<template>
  <nav class="fixed top-0 w-full bg-gray-900 text-white z-50 shadow-md">
    <div class="container mx-auto px-6 py-3 flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <span class="font-logo text-2xl">logo</span>
      </div>
      <div class="hidden md:flex space-x-8">
        <a href="#" class="hover:text-secondary transition-colors duration-300">首页</a>
        <a href="#" class="hover:text-secondary transition-colors duration-300">展览信息</a>
        <a href="#" class="hover:text-secondary transition-colors duration-300">艺术家介绍</a>
        <a href="#" class="hover:text-secondary transition-colors duration-300">参观指南</a>
        <a href="#" class="hover:text-secondary transition-colors duration-300">新闻动态</a>
      </div>
      <button class="!rounded-button bg-primary hover:bg-blue-800 text-white px-4 py-2 whitespace-nowrap transition-colors duration-300">
        购票入口
      </button>
      <!-- 移动端菜单按钮 -->
      <div class="md:hidden">
        <button 
          @click="toggleMobileMenu" 
          class="text-white focus:outline-none"
          aria-label="切换菜单"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path 
              v-if="!isMobileMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16" 
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      </div>
    </div>
    
    <!-- 移动端菜单 -->
    <div 
      v-show="isMobileMenuOpen" 
      class="md:hidden bg-gray-900 border-t border-gray-800"
    >
      <div class="px-6 py-4 space-y-4">
        <a href="#" class="block hover:text-secondary transition-colors duration-300">首页</a>
        <a href="#" class="block hover:text-secondary transition-colors duration-300">展览信息</a>
        <a href="#" class="block hover:text-secondary transition-colors duration-300">艺术家介绍</a>
        <a href="#" class="block hover:text-secondary transition-colors duration-300">参观指南</a>
        <a href="#" class="block hover:text-secondary transition-colors duration-300">新闻动态</a>
        <button class="w-full !rounded-button bg-primary hover:bg-blue-800 text-white px-4 py-2 transition-colors duration-300">
          购票入口
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    }
  }
};
</script>

<style scoped>
/* 组件特定样式 */
</style>