<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">最新资讯</h2>
      <div class="flex flex-col lg:flex-row gap-8">
        <div class="lg:w-2/3">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(news, index) in newsList" :key="index" class="bg-gray-50 rounded-lg overflow-hidden shadow-sm card-hover">
              <img :src="news.coverImage" :alt="news.title" class="w-full h-48 object-cover">
              <div class="p-4">
                <span class="text-sm text-gray-500">{{ news.date }}</span>
                <h3 class="font-semibold text-lg mt-2">{{ news.title }}</h3>
                <p class="text-gray-600 mt-2 text-sm">{{ news.excerpt }}</p>
                <a href="#" class="text-primary text-sm mt-3 inline-block">阅读更多</a>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3">
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <h3 class="font-semibold text-lg mb-4">热门标签</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in popularTags" :key="tag" class="bg-white px-3 py-1 rounded-full text-sm">{{ tag }}</span>
            </div>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 class="font-semibold text-lg mb-4">分享我们</h3>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <i class="fab fa-facebook-f flex justify-center items-center"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                <i class="fab fa-twitter flex justify-center items-center"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <i class="fab fa-instagram flex justify-center items-center"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <i class="fab fa-youtube flex justify-center items-center"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NewsSection',
  data() {
    return {
      newsList: [
        { 
          coverImage: 'https://ai-public.mastergo.com/ai/img_res/88e3e33fada62f409a405911c0680cb0.jpg', 
          title: '展览开幕仪式圆满举行', 
          excerpt: '数百名艺术爱好者齐聚一堂，共同见证创意美术展的盛大启幕...', 
          date: '2023年10月15日',
          link: '#' 
        },
        { 
          coverImage: 'https://ai-public.mastergo.com/ai/img_res/b707e7a4f4586370dd602cd2a2e5c3e9.jpg', 
          title: '特邀艺术家现场创作演示', 
          excerpt: '国际知名画家将在展览期间进行现场绘画表演...', 
          date: '2023年10月10日',
          link: '#' 
        },
        { 
          coverImage: 'https://ai-public.mastergo.com/ai/img_res/8af34f797df0ec68244fdad0794c9c45.jpg', 
          title: '儿童艺术启蒙工作坊报名开启', 
          excerpt: '专为青少年设计的艺术课程，培养下一代创意思维...', 
          date: '2023年10月5日',
          link: '#' 
        },
        { 
          coverImage: 'https://ai-public.mastergo.com/ai/img_res/992be4b711fc1ce690a004c6f9229c1c.jpg', 
          title: '艺术评论家专题讲座即将举办', 
          excerpt: '深度解读当代艺术发展趋势，欢迎艺术爱好者参与...', 
          date: '2023年9月28日',
          link: '#' 
        }
      ],
      popularTags: ['#当代艺术', '#互动装置', '#青年艺术家', '#数字艺术', '#艺术教育']
    };
  }
};
</script>

<style scoped>
/* 组件特定样式 */
</style>