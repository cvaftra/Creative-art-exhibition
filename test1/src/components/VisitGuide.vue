<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">参观信息</h2>
      <div class="flex flex-col lg:flex-row gap-8">
        <div class="lg:w-1/2">
          <div class="bg-gray-200 rounded-lg h-96 flex items-center justify-center overflow-hidden">
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
                  <i class="fas fa-wheelchair text-primary mr-2 flex justify-center items-center"></i>
                  <span>无障碍通道</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-utensils text-primary mr-2 flex justify-center items-center"></i>
                  <span>餐厅服务</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-gift text-primary mr-2 flex justify-center items-center"></i>
                  <span>纪念品商店</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-parking text-primary mr-2 flex justify-center items-center"></i>
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
</template>

<script>
export default {
  name: 'VisitGuide'
};
</script>

<style scoped>
/* 组件特定样式 */
</style>