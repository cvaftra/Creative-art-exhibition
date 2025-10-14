<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">展览亮点</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md text-center card-hover">
          <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-palette text-white text-2xl flex justify-center items-center"></i>
          </div>
          <h3 class="text-xl font-semibold mb-2">特色展区</h3>
          <p class="text-gray-600 mb-4">沉浸式多媒体艺术空间，融合科技与美学</p>
          <a href="#" class="text-primary hover:underline">查看详情 →</a>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md text-center card-hover">
          <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-user-graduate text-white text-2xl flex justify-center items-center"></i>
          </div>
          <h3 class="text-xl font-semibold mb-2">知名艺术家</h3>
          <p class="text-gray-600 mb-4">汇聚国内外顶尖艺术家代表作品</p>
          <a href="#" class="text-primary hover:underline">认识艺术家 →</a>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md text-center card-hover">
          <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-hands-helping text-white text-2xl flex justify-center items-center"></i>
          </div>
          <h3 class="text-xl font-semibold mb-2">互动体验</h3>
          <p class="text-gray-600 mb-4">参与式艺术创作工坊，激发你的创造力</p>
          <a href="#" class="text-primary hover:underline">预约体验 →</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExhibitionHighlights'
};
</script>

<style scoped>
/* 组件特定样式 */
</style>