<template>
  <footer class="bg-gray-900 text-white pt-12 pb-8">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 class="font-logo text-2xl mb-4">logo</h3>
          <p class="text-gray-400 text-sm">致力于推广当代艺术，搭建艺术家与公众之间的桥梁。</p>
        </div>
        <div>
          <h4 class="font-semibold mb-4">快速链接</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><a href="#" class="hover:text-white transition-colors">关于我们</a></li>
            <li><a href="#" class="hover:text-white transition-colors">展览历史</a></li>
            <li><a href="#" class="hover:text-white transition-colors">加入我们</a></li>
            <li><a href="#" class="hover:text-white transition-colors">联系方式</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">联系我们</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li class="flex items-start">
              <i class="fas fa-map-marker-alt mt-1 mr-2 flex justify-center items-center"></i>
              <span>北京市朝阳区艺术大道 123 号</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-phone mr-2 flex justify-center items-center"></i>
              <span>+86 10 1234 5678</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-envelope mr-2 flex justify-center items-center"></i>
              <span>info@artexhibition.com</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">订阅资讯</h4>
          <p class="text-gray-400 text-sm mb-3">获取最新展览信息和艺术资讯</p>
          <div class="flex">
            <input type="email" placeholder="您的邮箱地址" class="px-3 py-2 text-gray-800 text-sm w-full rounded-l focus:outline-none border-none">
            <button class="!rounded-button bg-primary hover:bg-blue-800 px-4 whitespace-nowrap transition-colors duration-300 rounded-l-none">
              订阅
            </button>
          </div>
          <div class="flex space-x-4 mt-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <i class="fab fa-facebook-f flex justify-center items-center"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <i class="fab fa-twitter flex justify-center items-center"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <i class="fab fa-instagram flex justify-center items-center"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <i class="fab fa-weixin flex justify-center items-center"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        <p>&copy; 2023 创意美术展览. 保留所有权利.</p>
        <div class="mt-2">
          <a href="#" class="hover:text-white transition-colors mx-2">隐私政策</a>
          <a href="#" class="hover:text-white transition-colors mx-2">使用条款</a>
          <a href="#" class="hover:text-white transition-colors mx-2">网站地图</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
};
</script>

<style scoped>
/* 组件特定样式 */
</style>