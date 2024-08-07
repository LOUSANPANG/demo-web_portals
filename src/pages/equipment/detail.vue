<script setup lang="ts">
// import { Swiper, SwiperSlide } from 'swiper/vue'
// import { Autoplay, EffectCoverflow } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/effect-coverflow'

// const { width: windowWidth } = useWindowSize()

// const query = useRoute('/information/detail').query
const details = ref({
  id: 1,
  title: '铝合金单柱式升降机',
  powerSource: '1',
  workHeight: '44.44m',
  workWidth: '25.60m',
  workLoad: '300kg/454kg',
  imgUrl: '/images/equipment/lvhejindanzhushi_detail.png',
})
</script>

<template>
  <PageLayout>
    <div v-if="details.id">
      <!-- 产品信息概况 -->
      <div class="group box-border cursor-pointer rounded-md bg-gray-200 p-4 pc:grid pc:grid-cols-2 mobile:block pc:gap-4">
        <!-- 信息 -->
        <div class="h-full w-full pc:flex pc:items-center">
          <dl class="w-full text-base -my-3 divide-y divide-gray-100">
            <!-- 概况 -->
            <div class="grid py-3 mobile:grid-cols-1 pc:grid-cols-3 mobile:gap-1 pc:gap-4">
              <dt class="text-gray-900 font-900">
                名称
              </dt>
              <dd class="text-gray-700 pc:col-span-2">
                {{ details.title }}
              </dd>
            </div>
            <div class="grid py-3 mobile:grid-cols-1 pc:grid-cols-3 mobile:gap-1 pc:gap-4">
              <dt class="text-gray-900 font-900">
                最大工作高度
              </dt>
              <dd class="text-gray-700 pc:col-span-2">
                {{ details.workHeight }}
              </dd>
            </div>
            <div class="grid py-3 mobile:grid-cols-1 pc:grid-cols-3 mobile:gap-1 pc:gap-4">
              <dt class="text-gray-900 font-900">
                最大作业幅度
              </dt>
              <dd class="text-gray-700 pc:col-span-2">
                {{ details.workWidth }}
              </dd>
            </div>
            <div class="grid py-3 mobile:grid-cols-1 pc:grid-cols-3 mobile:gap-1 pc:gap-4">
              <dt class="text-gray-900 font-900">
                安全工作载荷
              </dt>
              <dd class="text-gray-700 pc:col-span-2">
                {{ details.workLoad }}
              </dd>
            </div>
            <div class="grid py-3 mobile:grid-cols-1 pc:grid-cols-3 mobile:gap-1 pc:gap-4">
              <dt class="text-gray-900 font-900">
                整机重量
              </dt>
              <dd class="text-gray-700 pc:col-span-2">
                22500kg
              </dd>
            </div>
          </dl>
        </div>

        <!-- 图片 -->
        <img
          class="w-full transition-all mobile:mb-6 pc:mb-0 mobile:h-60 pc:h-100 group-hover:scale-105"
          :src="details.imgUrl"
        >
      </div>

      <!-- 产品详细参数 -->
      <div class="w-ful my-8 border-t border-gray-100 py-4">
        <dl class="text-base -my-3 divide-y divide-gray-100">
          <!-- 产品亮点 -->
          <details class="group [&_summary::-webkit-details-marker]:hidden" open>
            <summary
              class="flex cursor-pointer items-center justify-between rounded py-3 hover:bg-gray-100"
            >
              <dt class="text-gray-900 font-900">
                产品亮点
              </dt>
              <dd class="i-carbon-chevron-down group-open:i-carbon-chevron-up h-5 w-5 text-gray-700" />
            </summary>
            <ul class="px-4 py-2 text-sm text-gray-400">
              <li>
                1、一键原地扩腿，四驱四转，狭窄空间收/扩腿自如
              </li>
              <li>
                2、横&纵双向模块化设计，全系列85%部件通用，同平台研发
              </li>
            </ul>
          </details>
          <!-- 产品参数 -->
          <details class="group [&_summary::-webkit-details-marker]:hidden" open>
            <summary
              class="flex cursor-pointer items-center justify-between rounded py-3 hover:bg-gray-100"
            >
              <dt class="text-gray-900 font-900">
                产品参数
              </dt>
              <dd class="i-carbon-chevron-down group-open:i-carbon-chevron-up h-5 w-5 text-gray-700" />
            </summary>
            <table class="min-w-full bg-white py-1 text-sm text-gray-400 divide-y-2 divide-gray-200">
              <thead>
                <tr>
                  <th class="whitespace-nowrap px-4 py-2 text-left">
                    参数名
                  </th>
                  <th class="whitespace-nowrap px-4 py-2 text-left">
                    参数值
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="whitespace-nowrap px-4 py-2">
                    最大工作高度
                  </td>
                  <td class="whitespace-nowrap px-4 py-2">
                    44.44m
                  </td>
                </tr>
              </tbody>
            </table>
          </details>
        </dl>
      </div>

      <!-- 相关产品 -->
      <!-- <div class="w-ful my-8 flex justify-center">
        <Swiper
          class="mobile:h-50 pc:h-70"
          effect="coverflow"
          :modules="[Autoplay, EffectCoverflow]"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
          }"
          :grab-cursor="true"
          :centered-slides="true"
          :space-between="30"
          :slides-per-view="windowWidth > 1200 ? 3 : 1.5"
          :coverflow-effect="{
            slideShadows: false,
          }"
        >
          <SwiperSlide>
            <img src="/images/equipment/fudaishijiancha_detail.png">
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/equipment/shuangzhulvhejin_detail.png">
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/equipment/taotongshi_detail.png">
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/equipment/tuochequbishi_detail.png">
          </SwiperSlide>
        </Swiper>
      </div> -->
      <!-- /end -->
    </div>
  </PageLayout>
</template>
