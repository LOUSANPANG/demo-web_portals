<script setup lang="ts" generic="T extends any, O extends any">
import { strSplice } from '~/utils/tools.ts'

defineOptions({ name: 'Index' })

// 第一屏
// 内容
const indexOneContent = ref({
  mobileBgImgUrl: '/images/index/index_1_mobile_bg.png',
  bgVideo: '/video/index_bg.mp4',
  title: 'Prosperous China Force the world',
  subtitle: 'BeiGong has always implemented a green sustainable development strategy. Through modular research and development, digital management, and professional development, we have worked hard to build a future factory.',
})

// 第二屏
// 内容
const indexTwoContent = ref({
  bgImgUrl: '/images/index/index_2_bg.webp',
  title: 'Equipment',
  subtitle: strSplice('Aluminum alloy single-column lift、crawler scissor lift、Double-column aluminum alloy lift、sleeve lift、trailer curved arm lift、boarding bridge unloading platform Mobile scissor lift、Self-scissor lift、self-curved arm lift、self-mast lift', { pcStrLen: 300, mobileStrLen: 100 }),
  leftViewMoreBtn: { name: 'Equipment center', link: '/equipment' },
  rightInfo: [
    { title: 'Boom Lifts', imgUrl: '/images/index/index_2_bishi.png' },
    { title: 'Scissor Lifts', imgUrl: '/images/index/index_2_jianchashi.png' },
    { title: 'Vertical Lifts', imgUrl: '/images/index/index_2_chuizhishi.png' },
    { title: 'Customization', imgUrl: '/images/index/index_2_dingzhi.png' },
  ],
})
// 监听中线元素显示
const refIndexTwoMid = ref(null)
const indexTwoMidIsVisible = useElementVisibility(refIndexTwoMid)

// 第三屏
// 内容
const indexThreeContent = ref({
  bgImgUrl: '/images/index/index_3_bg.avif',
  title: 'Service',
  subtitle: 'Company',
  infoList: [
    { title: '售前售后服务', describe: '售前、售中、售后服务全方位，包括定制化线上线下培训、设立IPAF培训中心、终身维修、免费技术支持等。', imgUrl: '/images/index/index_3_service1.jpg' },
    { title: '质保服务', describe: '依托高端智造及卓越品质，鼎力全系列产品三年质保。', imgUrl: '/images/index/index_3_service2.jpg' },
    { title: '保障服务', describe: '北工为客户终身提供产品维修及保养配件，专业品质、质量保证。', imgUrl: '/images/index/index_3_service3.jpg' },
    { title: '贴心服务', describe: '北工提供7×24小时”保姆式“贴心服务。', imgUrl: '/images/index/index_3_service4.jpg' },
  ],
})
</script>

<template>
  <div relative>
    <div class="isolate">
      <!-- index 1 -->
      <div relative h-svh>
        <CssBackgroundBlack />
        <img class="absolute h-full w-full object-cover object-right -z-1 mobile:block pc:hidden" :src="indexOneContent.mobileBgImgUrl">
        <div class="absolute inset-x-0 top-0 h-full w-full transform-gpu overflow-hidden -z-5 pc:block mobile:hidden">
          <video class="h-full w-full object-fill" autoplay loop muted>
            <source :src="indexOneContent.bgVideo" type="video/mp4">
          </video>
        </div>
        <div class="mx-auto box-border h-full max-w-2xl flex items-center justify-center">
          <div class="text-center">
            <div data-aos="fade" data-aos-delay="500" class="mb-10 font-bold tracking-tight mobile:text-4xl pc:text-6xl mobile:text-white pc:text-white">
              {{ indexOneContent.title }}
            </div>
            <div data-aos="fade" data-aos-delay="1000" class="leading-8 mobile:text-xl pc:text-2xl mobile:text-gray-300 pc:text-white">
              {{ indexOneContent.subtitle }}
            </div>
          </div>
        </div>
      </div>

      <!-- index 2 -->
      <div relative>
        <CssBackgroundBlack />
        <img class="absolute block h-full w-full object-cover object-right -z-1" :src="indexTwoContent.bgImgUrl">
        <div class="pc:max-w-screen-xl mx-auto py-20 mobile:max-w-90%">
          <!-- =================pc -->
          <div class="relative w-full items-center justify-center mobile:hidden pc:flex">
            <!-- left -->
            <div class="relative h-80 w-100 rounded-3xl bg-orange-400 shadow-xl backdrop-blur-xl">
              <div class="absolute left-0 top-0 z-1 h-full w-full flex flex-col justify-between p-8">
                <div>
                  <div class="mb-2 text-white">
                    {{ indexTwoContent.title }}
                  </div>
                  <div class="text-base text-white">
                    <LibComponentTyped :values="[indexTwoContent.subtitle]" />
                  </div>
                </div>
                <RouterLink :to="indexTwoContent.leftViewMoreBtn.link" class="flex items-baseline text-base text-white font-semibold leading-6 hover:text-gray-900">
                  {{ indexTwoContent.leftViewMoreBtn.name }}
                  <div class="animate__animated animate__headShake animate__infinite ml-0.5 text-sm">
                    →
                  </div>
                </RouterLink>
              </div>
            </div>
            <!-- line -->
            <div ref="refIndexTwoMid" class="w-50 border-b-4 border-gray-300 border-dotted" />
            <!-- right -->
            <div class="relative h-150 w-135">
              <div
                class="group absolute left-50% z-1 h-62 w-62 rounded-3xl bg-[#7559ff] backdrop-blur-xl duration-300 ease-out -translate-x-1/2"
                :class="[indexTwoMidIsVisible ? 'top-0 translate-y-0' : 'top-50% -translate-y-1/2']"
              >
                <div class="relative h-full w-full">
                  <div class="absolute left-2 top-2 z-10 rounded-xl bg-gray-900/50 px-4 py-3 text-white duration-300 ease-out pc:group-hover:scale-110">
                    {{ indexTwoContent.rightInfo[0].title }}
                  </div>
                  <img class="absolute z-1 block h-full w-full rounded-3xl object-cover object-center" :src="indexTwoContent.rightInfo[0].imgUrl">
                </div>
              </div>
              <div
                class="group absolute top-50% z-2 h-62 w-62 rounded-3xl bg-[#00bf8f] backdrop-blur-xl duration-300 ease-out -translate-y-1/2"
                :class="[indexTwoMidIsVisible ? 'left-0 translate-x-0' : 'left-50% -translate-x-1/2']"
              >
                <div class="relative h-full w-full">
                  <div class="absolute left-2 top-2 z-10 rounded-xl bg-gray-900/50 px-4 py-3 text-white duration-300 ease-out group-hover:scale-110">
                    {{ indexTwoContent.rightInfo[1].title }}
                  </div>
                  <img class="absolute z-1 block h-full w-full rounded-3xl object-cover object-center" :src="indexTwoContent.rightInfo[1].imgUrl">
                </div>
              </div>
              <div
                class="group absolute top-50% z-3 h-62 w-62 rounded-3xl bg-[#458fff] backdrop-blur-xl duration-300 ease-out -translate-y-1/2"
                :class="[indexTwoMidIsVisible ? 'right-0 translate-x-0' : 'right-50% translate-x-1/2']"
              >
                <div class="relative h-full w-full">
                  <div class="absolute left-2 top-2 z-10 rounded-xl bg-gray-900/50 px-4 py-3 text-white duration-300 ease-out group-hover:scale-110">
                    {{ indexTwoContent.rightInfo[2].title }}
                  </div>
                  <img class="absolute z-1 block h-full w-full rounded-3xl object-cover object-center" :src="indexTwoContent.rightInfo[2].imgUrl">
                </div>
              </div>
              <div
                class="group absolute left-50% z-4 h-62 w-62 rounded-3xl bg-purple-600 backdrop-blur-xl duration-300 ease-out -translate-x-1/2"
                :class="[indexTwoMidIsVisible ? 'bottom-0 translate-y-0' : 'bottom-50% translate-y-1/2']"
              >
                <div class="relative h-full w-full">
                  <div class="absolute left-2 top-2 z-10 rounded-xl bg-gray-900/50 px-4 py-3 text-white duration-300 ease-out group-hover:scale-110">
                    {{ indexTwoContent.rightInfo[3].title }}
                  </div>
                  <img class="absolute z-1 block h-full w-full rounded-3xl object-cover object-center" :src="indexTwoContent.rightInfo[3].imgUrl">
                </div>
              </div>
            </div>
          </div>

          <!-- =================mobile -->
          <div class="w-full mobile:block pc:hidden">
            <!-- top -->
            <div class="relative mb-8 h-60 w-full rounded-3xl bg-orange-500 shadow-xl backdrop-blur-xl">
              <div class="absolute left-0 top-0 z-1 h-full w-full flex flex-col justify-between p-8">
                <div>
                  <div class="mb-2 text-white">
                    {{ indexTwoContent.title }}
                  </div>
                  <div class="text-base text-white">
                    {{ indexTwoContent.subtitle }}
                  </div>
                </div>
                <RouterLink :to="indexTwoContent.leftViewMoreBtn.link" class="flex items-baseline text-base text-white font-semibold leading-6 hover:text-gray-900">
                  {{ indexTwoContent.leftViewMoreBtn.name }}
                  <div class="animate__animated animate__headShake animate__infinite animate__infinite ml-0.5 text-sm">
                    →
                  </div>
                </RouterLink>
              </div>
            </div>
            <!-- bottom -->
            <div class="w-full flex items-center overflow-x-auto">
              <div
                v-for="(item, key) in indexTwoContent.rightInfo"
                :key="key"
                class="bg-orange-15 mr-4 h-62 w-62 shrink-0 rounded-3xl shadow-xl backdrop-blur-xl"
                data-aos="fade" :data-aos-delay="(key + 1) * 100"
              >
                <div class="relative h-full w-full">
                  <div class="absolute left-2 top-2 z-10 rounded-xl bg-gray-900/50 px-4 py-3 text-white">
                    {{ item.title }}
                  </div>
                  <img class="absolute z-1 block h-full w-full rounded-3xl object-cover object-center" :src="item.imgUrl">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- index 3 -->
      <div class="relative isolate w-full overflow-hidden mobile:py-10 pc:py-20">
        <!-- bg -->
        <CssBackgroundBlack />
        <img class="absolute inset-0 h-full w-full object-cover object-right -z-5" :src="indexThreeContent.bgImgUrl" alt="">
        <!-- content -->
        <div class="relative mx-auto mobile:w-90% pc:w-7xl">
          <div class="mobile:mb-10 pc:mb-20">
            <div class="mb-2 text-white font-semibold mobile:text-4xl pc:text-7xl">
              {{ indexThreeContent.subtitle }}
            </div>
            <div class="text-orange-500 font-bold mobile:text-6xl pc:text-9xl">
              {{ indexThreeContent.title }}
            </div>
          </div>
          <div class="w-full flex overflow-x-auto py-4 pc:justify-between mobile:justify-around">
            <RouterLink
              v-for="(item, key) in indexThreeContent.infoList"
              :key="item.title"
              to="/service"
              data-aos="fade" :data-aos-delay="(key + 1) * 100"
              class="group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-md shadow shadow-orange-100 duration-300 ease-out mobile:mr-5 pc:mr-0 mobile:h-90 mobile:w-50 pc:h-130 pc:w-75 hover:shadow-md"
            >
              <img class="h-full w-full rounded-md" :src="item.imgUrl">
              <div class="absolute left-0 z-5 h-full w-full rounded-md bg-orange-500/95 duration-300 ease-out -bottom-100% group-hover:bottom-0" />
              <div class="absolute left-5% top-5 z-10 w-90% text-white font-700 mobile:text-lg pc:text-xl">
                {{ item.title }}
              </div>
              <div class="absolute left-5% top-15 line-clamp-2 z-10 w-90% text-white mobile:text-xs pc:text-sm">
                {{ item.describe }}
              </div>
              <div class="animate__animated animate__headShake animate__infinite absolute bottom-5 right-5% z-10 text-sm text-white">
                →
              </div>
            </RouterLink>
          </div>
        </div>
        <!-- /content -->
      </div>
      <!-- /end index3 -->
    </div>
  </div>
</template>
