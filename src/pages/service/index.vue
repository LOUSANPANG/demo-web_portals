<script setup lang="ts">
const serviceInfo = ref([
  {
    icon: '/images/service/icon_1.png',
    title: `值得信赖的`,
    description: `专业至上，以诚待客，效率争先，赢得客户信赖。专业能力过硬，有效解决客户需求问题。提升服务效率，及时响应客户需求。`,
  },
  {
    icon: '/images/service/icon_2.png',
    title: `可持续的`,
    description: `保持服务可持续性，建立长期稳定的客户关系。明确服务标准，规范服务流程，持续保障服务品质。提供综合服务，满足客户全周期的需求。`,
  },
  {
    icon: '/images/service/icon_3.png',
    title: `有温度的`,
    description: `贴心陪伴，密切互动,与客户共成长，传递企业温暖。待人热情，让客户感觉舒心，陪伴客户每一天。`,
  },
  {
    icon: '/images/service/icon_4.png',
    title: `有品质的`,
    description: `创造高品质、差异化的服务体验，实现服务增值。洞悉客户需求，创新服务模式，不断为客户创造增值， 实现共同发展`,
  },
])
</script>

<template>
  <PageLayout>
    <!-- pc -->
    <div class="pt-10 pc:block mobile:hidden">
      <div class="flex justify-between">
        <div class="min-h-full w-75 flex flex-col justify-between">
          <div class="mb-10 w-full">
            <img class="mb-3 block h-18 w-18" :src="serviceInfo[0].icon">
            <div class="mb-6 text-xl text-gray-800 font-700">
              {{ serviceInfo[0].title }}
            </div>
            <div class="text-sm text-gray-600">
              {{ serviceInfo[0].description }}
            </div>
          </div>
          <div class="w-full">
            <img class="mb-3 block h-18 w-18" :src="serviceInfo[1].icon">
            <div class="mb-6 text-xl text-gray-800 font-700">
              {{ serviceInfo[1].title }}
            </div>
            <div class="text-sm text-gray-600">
              {{ serviceInfo[1].description }}
            </div>
          </div>
        </div>
        <img class="block h-135 h-135" src="/images/service/center.png">
        <div class="min-h-full w-75 flex flex-col justify-between">
          <div class="mb-10 w-full">
            <img class="mb-3 block h-18 w-18" :src="serviceInfo[2].icon">
            <div class="mb-6 text-xl text-gray-800 font-700">
              {{ serviceInfo[2].title }}
            </div>
            <div class="text-sm text-gray-600">
              {{ serviceInfo[2].description }}
            </div>
          </div>
          <div class="w-full">
            <img class="mb-3 block h-18 w-18" :src="serviceInfo[3].icon">
            <div class="mb-6 text-xl text-gray-800 font-700">
              {{ serviceInfo[3].title }}
            </div>
            <div class="text-sm text-gray-600">
              {{ serviceInfo[3].description }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div class="mobile:block pc:hidden">
      <img class="mx-auto mb-10 block w-full shadow-sm" src="/images/service/center.png">
      <div class="w-full flex flex-col justify-center">
        <div v-for="item in serviceInfo" :key="item.title" class="mb-10 box-border w-full rounded-lg p-4 shadow shadow-orange-100">
          <img class="mb-3 block h-18 w-18" :src="item.icon">
          <div class="mb-6 text-xl text-gray-800 font-700">
            {{ item.title }}
          </div>
          <div class="text-sm text-gray-600">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
    <!-- /mobile -->
  </PageLayout>
</template>
