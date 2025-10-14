<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-center mb-12">
        <h2 class="text-3xl font-bold">艺术家风采</h2>
        <button class="!rounded-button bg-primary hover:bg-blue-800 text-white px-4 py-2 whitespace-nowrap transition-colors duration-300">
          查看全部艺术家
        </button>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <div v-for="(artist, index) in artists" :key="index" class="artist-grid-item text-center cursor-pointer">
          <div class="overflow-hidden rounded-lg mb-3">
            <img :src="artist.avatar" :alt="artist.name" class="w-full h-40 object-cover transition-transform duration-300">
          </div>
          <h3 class="font-medium">{{ artist.name }}</h3>
          <p class="text-sm text-gray-600">{{ artist.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ArtistsShowcase',
  data() {
    return {
      artists: [
        { 
          avatar: 'https://ai-public.mastergo.com/ai/img_res/c4a5fa97b09895106a323a1bcfd72dce.jpg', 
          name: '林晓雨', 
          title: '装置艺术家',
          link: '#' 
        },
        { 
          avatar: 'https://ai-public.mastergo.com/ai/img_res/54e7587a216d3cd536566dfa91c96290.jpg', 
          name: '张浩然', 
          title: '油画大师',
          link: '#' 
        },
        { 
          avatar: 'https://ai-public.mastergo.com/ai/img_res/a5d36d7a274141953dbced54c7d2d38d.jpg', 
          name: '陈思颖', 
          title: '数字艺术先锋',
          link: '#' 
        },
        { 
          avatar: 'https://ai-public.mastergo.com/ai/img_res/a92879a811440767d930f65c9ce40870.jpg', 
          name: '王建国', 
          title: '雕塑家',
          link: '#' 
        },
        { 
          avatar: 'https://ai-public.mastergo.com/ai/img_res/2e9d6f4cf38c5ba5ec6e560927bfa5b9.jpg', 
          name: '赵雅婷', 
          title: '摄影艺术家',
          link: '#' 
        },
        { 
          avatar: 'https://ai-public.mastergo.com/ai/img_res/b5c52a5207442ce0b3644ed1814df939.jpg', 
          name: '刘德华', 
          title: '书法艺术家',
          link: '#' 
        }
      ]
    };
  }
};
</script>

<style scoped>
/* 组件特定样式 */
</style>