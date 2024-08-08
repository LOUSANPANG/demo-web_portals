<script setup lang="ts">
// import { Swiper, SwiperSlide } from 'swiper/vue'
// import { Autoplay, EffectCoverflow } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/effect-coverflow'

// const { width: windowWidth } = useWindowSize()

// const query = useRoute('/information/detail').query
</script>

<template>
  <PageLayout>
    <!-- 产品信息概况 -->
    <div class="group box-border rounded-md bg-gray-200/70 p-4 mobile:block pc:flex pc:items-center pc:justify-around">
      <div class="text-base text-gray-500 mobile:mb-4 pc:mb-0">
        <div class="mb-6 flex items-center text-orange-500 font-700 mobile:text-xl pc:text-2xl">
          BT44RT
        </div>
        <div class="mb-4 flex items-center">
          <img class="mr-3 h-6 w-6" src="/images/equipment/icon_height.png">
          <div class="flex items-end">
            最大工作高度：<strong class="text-gray-800">44.44m</strong>
          </div>
        </div>
        <div class="mb-4 flex items-center">
          <img class="mr-3 h-6 w-6" src="/images/equipment/icon_width.png">
          <div class="flex items-end">
            最大作业幅度：<strong class="text-gray-800">25.60m</strong>
          </div>
        </div>
        <div class="mb-4 flex items-center">
          <img class="mr-3 h-6 w-6" src="/images/equipment/icon_weight.png">
          <div class="flex items-end">
            安全工作载荷：<strong class="text-gray-800">300kg/454kg</strong>
          </div>
        </div>
        <div class="flex items-center">
          <img class="mr-4 h-6 w-6" src="/images/equipment/icon_kg.png">
          <div class="flex items-end">
            整机重量：<strong class="text-gray-800">22500kg</strong>
          </div>
        </div>
      </div>
      <img
        class="transition-all mobile:h-60 mobile:w-full pc:h-100 pc:w-1/2 group-hover:scale-105"
        src="/images/equipment/lvhejindanzhushi_detail.png"
      >
    </div>
    <!-- /产品概况 -->

    <!-- 产品详情 -->
    <div class="my-8 w-full border-t border-gray-100 py-4">
      <!-- 产品亮点 -->
      <div class="mb-8">
        <div class="mb-4 text-orange-500 font-700 mobile:text-xl pc:text-2xl">
          产品亮点
        </div>
        <ul class="py-2 text-sm text-gray-400 mobile:px-0 pc:px-4">
          <li>
            1、一键原地扩腿，四驱四转，狭窄空间收/扩腿自如
          </li>
          <li>
            2、横&纵双向模块化设计，全系列85%部件通用，同平台研发
          </li>
        </ul>
      </div>
      <!-- /产品亮点 -->

      <!-- 产品参数 -->
      <div class="mb-8">
        <div class="mb-4 text-orange-500 font-700 mobile:text-xl pc:text-2xl">
          产品参数
        </div>
        <!-- 尺寸 -->
        <div class="box-border w-full py-2 text-sm text-gray-400 mobile:px-0 pc:px-4">
          <div class="bg-orange-500 px-4 py-2 text-white">
            尺寸
          </div>
          <div class="w-full flex items-center border-b border-gray-200 px-4 py-2">
            <div class="w-50%">
              最大工作高度
            </div>
            <div class="w-50%">
              44.44m
            </div>
          </div>
          <div class="w-full flex items-center border-b border-gray-200 px-4 py-2">
            <div class="w-50%">
              最大平台高度
            </div>
            <div class="w-50%">
              42.44m
            </div>
          </div>
          <div class="w-full flex items-center border-b border-gray-200 px-4 py-2">
            <div class="w-50%">
              最大作业幅度(+0.6m)
            </div>
            <div class="w-50%">
              25.60m
            </div>
          </div>
          <div class="w-full flex items-center border-b border-gray-200 px-4 py-2">
            <div class="w-50%">
              最大平台幅度
            </div>
            <div class="w-50%">
              25.00m
            </div>
          </div>
        </div>
        <!-- /尺寸 -->
        <!-- 下载 -->
        <div class="box-border w-full py-2 text-sm text-gray-400 mobile:px-0 pc:px-4">
          <div class="bg-orange-500 px-4 py-2 text-white">
            下载
          </div>
          <div class="w-full flex items-center border-b border-gray-200 px-4 py-2">
            <div class="w-50%">
              BT44RT产品说明书
            </div>
            <div class="w-50% flex items-center justify-end">
              <div class="h-6 w-15 flex cursor-pointer items-center justify-center rounded bg-orange-600 hover:bg-orange-700">
                <div class="i-carbon-cloud-download h-5 w-5 text-white font-medium" />
              </div>
            </div>
          </div>
        </div>
        <!-- /下载 -->
      </div>
      <!-- /产品参数 -->
    </div>
    <!-- /产品详情 -->
  </PageLayout>
</template>
