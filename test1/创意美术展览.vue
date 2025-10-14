<!-- 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果 -->

<template>
  <div class="bg-white text-gray-800 min-h-screen">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-gray-900/60 backdrop-blur-md text-white z-50 shadow-md border-b border-white/10">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <span class="font-logo text-2xl tracking-wide">创意美术展览</span>
        </div>
        <div class="hidden md:flex space-x-8">
          <a href="#" class="hover:text-secondary transition-colors duration-300">首页</a>
          <a href="#" class="hover:text-secondary transition-colors duration-300">展览信息</a>
          <a href="#" class="hover:text-secondary transition-colors duration-300">艺术家介绍</a>
          <a href="#" class="hover:text-secondary transition-colors duration-300">参观指南</a>
          <a href="#" class="hover:text-secondary transition-colors duration-300">新闻动态</a>
        </div>
        <button class="rounded-button bg-primary hover:bg-blue-800 text-white px-4 py-2 whitespace-nowrap transition-colors duration-300 shadow-sm hover:shadow">
          购票入口
        </button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-bg h-screen flex items-center pt-20">
      <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/10"></div>
      <div class="container mx-auto px-6 relative z-10 text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg text-gradient">创意无限 · 美术新境</h1>
        <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">探索当代艺术的边界，感受视觉与心灵的碰撞</p>
        <div class="mt-8">
          <p class="text-white/90 text-lg">展览时间：2025年10月15日 - 2025年12月15日</p>
          <p class="text-white/90 text-lg">展览地点：北京市朝阳区艺术中心</p>
        </div>
        <div class="flex justify-center space-x-4">
          <button class="rounded-button bg-primary hover:bg-blue-800 text-white px-6 py-3 whitespace-nowrap transition-colors duration-300 shadow-md hover:shadow-lg">
            立即购票
          </button>
          <button class="rounded-button bg-transparent border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 px-6 py-3 whitespace-nowrap transition-colors duration-300">
            了解更多
          </button>
        </div>
      </div>
    </section>

    <!-- Exhibition Highlights -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">展览亮点</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-palette text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">特色展区</h3>
            <p class="text-gray-600 mb-4">沉浸式多媒体艺术空间，融合科技与美学</p>
            <a href="#" class="text-primary hover:underline font-medium">查看详情 →</a>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-user-graduate text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">知名艺术家</h3>
            <p class="text-gray-600 mb-4">汇聚国内外顶尖艺术家代表作品</p>
            <a href="#" class="text-primary hover:underline">认识艺术家 →</a>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-hands-helping text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">互动体验</h3>
            <p class="text-gray-600 mb-4">参与式艺术创作工坊，激发你的创造力</p>
            <a href="#" class="text-primary hover:underline">预约体验 →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- News & Events -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">最新资讯</h2>
        <div class="flex flex-col lg:flex-row gap-8">
          <div class="lg:w-2/3">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-gray-50 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                <img src="https://ai-public.mastergo.com/ai/img_res/88e3e33fada62f409a405911c0680cb0.jpg" alt="新闻图片" class="w-full h-48 object-cover">
                <div class="p-4">
                  <span class="text-sm text-gray-500">2023年10月15日</span>
                  <h3 class="font-semibold text-lg mt-2">展览开幕仪式圆满举行</h3>
                  <p class="text-gray-600 mt-2 text-sm">数百名艺术爱好者齐聚一堂，共同见证创意美术展的盛大启幕...</p>
                  <a href="#" class="text-primary text-sm mt-3 inline-block">阅读更多</a>
                </div>
              </div>
              <div class="bg-gray-50 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                <img src="https://ai-public.mastergo.com/ai/img_res/b707e7a4f4586370dd602cd2a2e5c3e9.jpg" alt="新闻图片" class="w-full h-48 object-cover">
                <div class="p-4">
                  <span class="text-sm text-gray-500">2023年10月10日</span>
                  <h3 class="font-semibold text-lg mt-2">特邀艺术家现场创作演示</h3>
                  <p class="text-gray-600 mt-2 text-sm">国际知名画家将在展览期间进行现场绘画表演...</p>
                  <a href="#" class="text-primary text-sm mt-3 inline-block">阅读更多</a>
                </div>
              </div>
              <div class="bg-gray-50 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                <img src="https://ai-public.mastergo.com/ai/img_res/8af34f797df0ec68244fdad0794c9c45.jpg" alt="新闻图片" class="w-full h-48 object-cover">
                <div class="p-4">
                  <span class="text-sm text-gray-500">2023年10月5日</span>
                  <h3 class="font-semibold text-lg mt-2">儿童艺术启蒙工作坊报名开启</h3>
                  <p class="text-gray-600 mt-2 text-sm">专为青少年设计的艺术课程，培养下一代创意思维...</p>
                  <a href="#" class="text-primary text-sm mt-3 inline-block">阅读更多</a>
                </div>
              </div>
              <div class="bg-gray-50 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                <img src="https://ai-public.mastergo.com/ai/img_res/992be4b711fc1ce690a004c6f9229c1c.jpg" alt="新闻图片" class="w-full h-48 object-cover">
                <div class="p-4">
                  <span class="text-sm text-gray-500">2023年9月28日</span>
                  <h3 class="font-semibold text-lg mt-2">艺术评论家专题讲座即将举办</h3>
                  <p class="text-gray-600 mt-2 text-sm">深度解读当代艺术发展趋势，欢迎艺术爱好者参与...</p>
                  <a href="#" class="text-primary text-sm mt-3 inline-block">阅读更多</a>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3">
            <div class="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
              <h3 class="font-semibold text-lg mb-4">热门标签</h3>
              <div class="flex flex-wrap gap-2">
                <span class="bg-white px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors duration-300 shadow-sm">#当代艺术</span>
                <span class="bg-white px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors duration-300 shadow-sm">#互动装置</span>
                <span class="bg-white px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors duration-300 shadow-sm">#青年艺术家</span>
                <span class="bg-white px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors duration-300 shadow-sm">#数字艺术</span>
                <span class="bg-white px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors duration-300 shadow-sm">#艺术教育</span>
              </div>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 class="font-semibold text-lg mb-4">分享我们</h3>
              <div class="flex space-x-4">
                <a href="#" class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Artists Showcase -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-center mb-12">
          <h2 class="text-3xl font-bold">艺术家风采</h2>
          <button class="rounded-button bg-primary hover:bg-blue-800 text-white px-4 py-2 whitespace-nowrap transition-colors duration-300 shadow-sm hover:shadow">
            查看全部艺术家
          </button>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div class="artist-grid-item text-center cursor-pointer hover:transform hover:scale-105 transition-transform duration-300">
            <div class="overflow-hidden rounded-lg mb-3">
              <img src="https://ai-public.mastergo.com/ai/img_res/c4a5fa97b09895106a323a1bcfd72dce.jpg" alt="艺术家" class="w-full h-40 object-cover transition-transform duration-300">
            </div>
            <h3 class="font-medium">林晓雨</h3>
            <p class="text-sm text-gray-600">装置艺术家</p>
          </div>
          <div class="artist-grid-item text-center cursor-pointer">
            <div class="overflow-hidden rounded-lg mb-3">
              <img src="https://ai-public.mastergo.com/ai/img_res/54e7587a216d3cd536566dfa91c96290.jpg" alt="艺术家" class="w-full h-40 object-cover transition-transform duration-300">
            </div>
            <h3 class="font-medium">张浩然</h3>
            <p class="text-sm text-gray-600">油画大师</p>
          </div>
          <div class="artist-grid-item text-center cursor-pointer">
            <div class="overflow-hidden rounded-lg mb-3">
              <img src="https://ai-public.mastergo.com/ai/img_res/a5d36d7a274141953dbced54c7d2d38d.jpg" alt="艺术家" class="w-full h-40 object-cover transition-transform duration-300">
            </div>
            <h3 class="font-medium">陈思颖</h3>
            <p class="text-sm text-gray-600">数字艺术先锋</p>
          </div>
          <div class="artist-grid-item text-center cursor-pointer">
            <div class="overflow-hidden rounded-lg mb-3">
              <img src="https://ai-public.mastergo.com/ai/img_res/a92879a811440767d930f65c9ce40870.jpg" alt="艺术家" class="w-full h-40 object-cover transition-transform duration-300">
            </div>
            <h3 class="font-medium">王建国</h3>
            <p class="text-sm text-gray-600">雕塑家</p>
          </div>
          <div class="artist-grid-item text-center cursor-pointer">
            <div class="overflow-hidden rounded-lg mb-3">
              <img src="https://ai-public.mastergo.com/ai/img_res/2e9d6f4cf38c5ba5ec6e560927bfa5b9.jpg" alt="艺术家" class="w-full h-40 object-cover transition-transform duration-300">
            </div>
            <h3 class="font-medium">赵雅婷</h3>
            <p class="text-sm text-gray-600">摄影艺术家</p>
          </div>
          <div class="artist-grid-item text-center cursor-pointer">
            <div class="overflow-hidden rounded-lg mb-3">
              <img src="https://ai-public.mastergo.com/ai/img_res/b5c52a5207442ce0b3644ed1814df939.jpg" alt="艺术家" class="w-full h-40 object-cover transition-transform duration-300">
            </div>
            <h3 class="font-medium">刘德华</h3>
            <p class="text-sm text-gray-600">书法艺术家</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Visitor Information -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">参观信息</h2>
        <div class="flex flex-col lg:flex-row gap-8">
          <div class="lg:w-1/2">
            <div class="bg-gray-200 rounded-lg h-96 flex items-center justify-center overflow-hidden shadow-sm">
              <img src="https://ai-public.mastergo.com/gen_page/map_placeholder_1280x720.png" alt="展览馆地图" class="w-full h-full object-cover object-center">
            </div>
          </div>
          <div class="lg:w-1/2">
            <div class="space-y-6">
              <div>
                <h3 class="text-xl font-semibold mb-2">开放时间</h3>
                <ul class="space-y-2">
                  <li class="flex justify-between border-b pb-2">
                    <span>周一至周五</span>
                    <span>09:00 - 17:00</span>
                  </li>
                  <li class="flex justify-between border-b pb-2">
                    <span>周六至周日</span>
                    <span>10:00 - 18:00</span>
                  </li>
                  <li class="flex justify-between border-b pb-2">
                    <span>法定节假日</span>
                    <span>10:00 - 18:00</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">票价信息</h3>
                <ul class="space-y-2">
                  <li class="flex justify-between border-b pb-2">
                    <span>成人票</span>
                    <span>¥80</span>
                  </li>
                  <li class="flex justify-between border-b pb-2">
                    <span>学生票 (凭证件)</span>
                    <span>¥40</span>
                  </li>
                  <li class="flex justify-between border-b pb-2">
                    <span>老年票 (65岁以上)</span>
                    <span>¥40</span>
                  </li>
                  <li class="flex justify-between border-b pb-2">
                    <span>团体票 (10人以上)</span>
                    <span>¥60/人</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">服务设施</h3>
                <div class="grid grid-cols-2 gap-3">
                  <div class="flex items-center">
                    <i class="fas fa-wheelchair text-primary mr-2"></i>
                    <span>无障碍通道</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-utensils text-primary mr-2"></i>
                    <span>餐厅服务</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-gift text-primary mr-2"></i>
                    <span>纪念品商店</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-parking text-primary mr-2"></i>
                    <span>停车场</span>
                  </div>
                </div>
              </div>
              <div class="pt-4">
                <button class="!rounded-button bg-primary hover:bg-blue-800 text-white px-6 py-3 whitespace-nowrap transition-colors duration-300 mr-4">
                  在线客服
                </button>
                <button class="!rounded-button bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 whitespace-nowrap transition-colors duration-300">
                  常见问题
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-2xl font-bold text-center mb-8">合作伙伴</h2>
        <div class="flex flex-wrap justify-center gap-12">
          <div class="partner-logo w-32 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm p-4">
            <span class="font-bold text-gray-700">文化集团</span>
          </div>
          <div class="partner-logo w-32 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm p-4">
            <span class="font-bold text-gray-700">艺术基金会</span>
          </div>
          <div class="partner-logo w-32 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm p-4">
            <span class="font-bold text-gray-700">创意传媒</span>
          </div>
          <div class="partner-logo w-32 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm p-4">
            <span class="font-bold text-gray-700">城市美术馆</span>
          </div>
          <div class="partner-logo w-32 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm p-4">
            <span class="font-bold text-gray-700">国际画廊</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
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
                <i class="fas fa-map-marker-alt mt-1 mr-2"></i>
                <span>北京市朝阳区艺术大道 123 号</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-phone mr-2"></i>
                <span>+86 10 1234 5678</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-envelope mr-2"></i>
                <span>info@artexhibition.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">订阅资讯</h4>
            <p class="text-gray-400 text-sm mb-3">获取最新展览信息和艺术资讯</p>
            <div class="flex">
              <input type="email" placeholder="您的邮箱地址" class="px-3 py-2 text-gray-800 text-sm w-full rounded-l focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0">
              <button class="rounded-button bg-primary hover:bg-blue-800 px-4 whitespace-nowrap transition-colors duration-300 rounded-l-none">
                订阅
              </button>
            </div>
            <div class="flex space-x-4 mt-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i class="fab fa-weixin"></i>
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
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  }
};
</script>

<style scoped>
body {
  font-family: 'Helvetica Neue', sans-serif;
  min-height: 1024px;
}
.font-logo {
  font-family: 'Pacifico', cursive;
}
.hero-bg {
  background-image: url('https://ai-public.mastergo.com/ai/img_res/6665279dba787045be4d3d1dd3574e71.jpg');
  background-size: cover;
  background-position: center;
}
.artist-grid-item:hover img {
  transform: scale(1.05);
}
.partner-logo:hover {
  opacity: 0.8;
}
</style>

