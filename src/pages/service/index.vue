<script setup lang="ts">
const serviceInfo = ref({
  templateList: [
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
  ],
  serviceList: [
    {
      img: '/images/service/service_1.jpg',
      title: `售前售后服务`,
      description: '售前、售中、售后服务全方位，包括定制化线上线下培训、设立IPAF培训中心、终身维修、免费技术支持等。',
    },
    {
      img: '/images/service/service_2.jpg',
      title: `质保服务`,
      description: '依托高端智造及卓越品质，鼎力全系列产品三年质保。',
    },
    {
      img: '/images/service/service_3.jpg',
      title: `保障服务`,
      description: '北工为客户终身提供产品维修及保养配件，专业品质、质量保证。',
    },
    {
      img: '/images/service/service_4.jpg',
      title: `贴心服务`,
      description: '北工提供7×24小时”保姆式“贴心服务。',
    },
  ],
})
</script>

<template>
  <PageLayout>
    <!-- pc -->
    <div class="pt-10 pc:block mobile:hidden">
      <!-- 服务 -->
      <div class="mb-20 flex justify-between">
        <div class="min-h-full w-75 flex flex-col justify-between">
          <div class="mb-10 w-full">
            <img class="mb-3 block h-18 w-18" :src="serviceInfo.templateList[0].icon">
            <div class="mb-6 text-xl text-gray-800 font-700">
              {{ serviceInfo.templateList[0].title }}
            </div>
            <div class="text-sm text-gray-600">
              {{ serviceInfo.templateList[0].description }}
            </div>
          </div>
          <div class="w-full">
            <img class="mb-3 block h-18 w-18" :src="serviceInfo.templateList[1].icon">
            <div class="mb-6 text-xl text-gray-800 font-700">
              {{ serviceInfo.templateList[1].title }}
            </div>
            <div class="text-sm text-gray-600">
              {{ serviceInfo.templateList[1].description }}
            </div>
          </div>
        </div>
        <img class="block h-135 w-135" src="/images/service/center.png">
        <div class="min-h-full w-75 flex flex-col justify-between">
          <div class="mb-10 w-full">
            <img class="mb-3 block h-18 w-18" :src="serviceInfo.templateList[2].icon">
            <div class="mb-6 text-xl text-gray-800 font-700">
              {{ serviceInfo.templateList[2].title }}
            </div>
            <div class="text-sm text-gray-600">
              {{ serviceInfo.templateList[2].description }}
            </div>
          </div>
          <div class="w-full">
            <img class="mb-3 block h-18 w-18" :src="serviceInfo.templateList[3].icon">
            <div class="mb-6 text-xl text-gray-800 font-700">
              {{ serviceInfo.templateList[3].title }}
            </div>
            <div class="text-sm text-gray-600">
              {{ serviceInfo.templateList[3].description }}
            </div>
          </div>
        </div>
      </div>
      <!-- 案例 -->
      <div class="mx-auto w-200">
        <div class="mb-6 w-full border-b py-4 text-2xl text-gray-800 font-700">
          四项服务
        </div>
        <div v-for="item in serviceInfo.serviceList" :key="item.title" class="group mx-auto mb-6 w-full cursor-pointer items-center justify-around rounded-lg bg-white px-4 py-8 shadow-md mobile:hidden pc:flex">
          <div class="h-60 w-96">
            <div class="mb-8 text-base text-gray-700 font-700 underline decoration-2 decoration-orange-500 underline-offset-8">
              {{ item.title }}
            </div>
            <div class="text-xs text-gray-500">
              {{ item.description }}
            </div>
          </div>
          <div class="h-60 w-78 overflow-hidden">
            <img class="h-full w-full rounded-lg object-cover object-center duration-300 ease-out group-hover:scale-110" :src="item.img">
          </div>
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div class="mobile:block pc:hidden">
      <!-- 服务 -->
      <div class="mb-10">
        <img class="block w-full" src="/images/service/center.png">
        <div v-for="item in serviceInfo.templateList" :key="item.title" class="mb-5 box-border w-full rounded-lg px-2 py-4 shadow">
          <img class="mb-3 block h-10 w-10" :src="serviceInfo.templateList[1].icon">
          <div class="mb-6 text-base text-gray-800 font-700">
            {{ serviceInfo.templateList[1].title }}
          </div>
          <div class="text-xs text-gray-600">
            {{ serviceInfo.templateList[1].description }}
          </div>
        </div>
      </div>

      <!-- 案例 -->
      <div class="w-full">
        <div class="mb-6 w-full border-b py-4 text-xl text-gray-800 font-700">
          四项服务
        </div>
        <div v-for="item in serviceInfo.serviceList" :key="item.title" class="mb-4 w-full rounded-lg bg-white px-2 py-4 shadow-md mobile:block pc:hidden">
          <div class="h-50 w-full">
            <img class="h-full w-full rounded-lg object-cover object-center" :src="item.img">
          </div>
          <div class="w-full py-8">
            <div class="mb-4 text-sm text-gray-700 font-700 underline decoration-2 decoration-orange-500 underline-offset-4">
              {{ item.title }}
            </div>
            <div class="text-xs text-gray-500">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /mobile -->
  </PageLayout>
</template>
