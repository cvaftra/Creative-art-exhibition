<template>
  <section class="py-12 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 class="text-2xl font-bold text-center mb-8">合作伙伴</h2>
      <div class="flex flex-wrap justify-center gap-12">
        <div v-for="(partner, index) in partners" :key="index" class="partner-logo w-32 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm p-4">
          <span class="font-bold text-gray-700">{{ partner.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PartnersSection',
  data() {
    return {
      partners: [
        { name: '文化集团', link: '#' },
        { name: '艺术基金会', link: '#' },
        { name: '创意传媒', link: '#' },
        { name: '城市美术馆', link: '#' },
        { name: '国际画廊', link: '#' }
      ]
    };
  }
};
</script>

<style scoped>
/* 组件特定样式 */
</style>