<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

const { width: windowWidth } = useWindowSize()

// const query = useRoute('/information/detail').query
const details = ref({
  id: 1,
  title: 'BT44RT(一键原地阔腿)',
  powerSource: '1',
  workHeight: '44.44m',
  workWith: '25.60m',
  workLoad: '300kg/454kg',
  workWeight: '22500kg',
  imgUrl: 'https://www.cndingli.com/upload/images/2022/10/13/8888d6a580354241a96eb5007c1c8355.png',
})
</script>

<template>
  <PageLayout>
    <div v-if="details.id">
      <!-- 产品信息 -->
      <div class="pb-6 pc:grid pc:grid-cols-2 mobile:block pc:gap-4">
        <!-- 图片 -->
        <img class="w-full cursor-pointer shadow-sm transition-all mobile:mb-6 mobile:h-60 pc:h-100 hover:scale-105" src="https://www.cndingli.com/upload/images/2022/10/13/8888d6a580354241a96eb5007c1c8355.png">

        <!-- 信息 -->
        <div class="flow-root w-full">
          <dl class="text-sm -my-3 divide-y divide-gray-100">
            <!-- 概况 -->
            <div class="grid py-3 mobile:grid-cols-1 pc:grid-cols-3 mobile:gap-1 pc:gap-4">
              <dt class="text-gray-900 font-medium">
                名称
              </dt>
              <dd class="text-gray-700 pc:col-span-2">
                BT44RT
              </dd>
            </div>
            <div class="grid py-3 mobile:grid-cols-1 pc:grid-cols-3 mobile:gap-1 pc:gap-4">
              <dt class="text-gray-900 font-medium">
                最大工作高度
              </dt>
              <dd class="text-gray-700 pc:col-span-2">
                44.44m
              </dd>
            </div>
            <div class="grid py-3 mobile:grid-cols-1 pc:grid-cols-3 mobile:gap-1 pc:gap-4">
              <dt class="text-gray-900 font-medium">
                最大作业幅度
              </dt>
              <dd class="text-gray-700 pc:col-span-2">
                25.60m
              </dd>
            </div>
            <div class="grid py-3 mobile:grid-cols-1 pc:grid-cols-3 mobile:gap-1 pc:gap-4">
              <dt class="text-gray-900 font-medium">
                安全工作载荷
              </dt>
              <dd class="text-gray-700 pc:col-span-2">
                300kg/454kg
              </dd>
            </div>
            <div class="grid py-3 mobile:grid-cols-1 pc:grid-cols-3 mobile:gap-1 pc:gap-4">
              <dt class="text-gray-900 font-medium">
                整机重量
              </dt>
              <dd class="text-gray-700 pc:col-span-2">
                22500kg
              </dd>
            </div>
            <!-- 产品亮点 -->
            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                class="flex cursor-pointer items-center justify-between rounded py-3 hover:bg-gray-100"
              >
                <dt class="text-gray-900 font-medium">
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
            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                class="flex cursor-pointer items-center justify-between rounded py-3 hover:bg-gray-100"
              >
                <dt class="text-gray-900 font-medium">
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
      </div>

      <!-- 相关产品 -->
      <div class="w-ful my-4 flex justify-center border-t border-gray-100 py-4">
        <Swiper
          class="mobile:h-60 pc:h-80"
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
            <img src="https://swiperjs.com/demos/images/nature-1.jpg">
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg">
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg">
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg">
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </PageLayout>
</template>
