<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({ name: 'Index' })

// 第一屏
// 内容
const indexOneContent = ref({
  bgVideo: '/video/index_bg.mp4',
  title: 'Prosperous China Force the world',
  subtitle: 'Zhejiang Dingli has always implemented a green sustainable development strategy. Through modular research and development, digital management, and professional development, we have worked hard to build a future factory.',
})

// 第二屏
// 内容
const indexTwoContent = ref({
  title: 'Equipment',
  subtitle: 'Boom Lifts、Scissor Lifts、Vertical Lifts、Customization...',
  leftViewMoreBtn: { name: 'Equipment center', link: '/equipment' },
  rightInfo: [
    { title: 'Boom Lifts', imgUrl: '' },
    { title: 'Scissor Lifts', imgUrl: '' },
    { title: 'Vertical Lifts', imgUrl: '' },
    { title: 'Customization', imgUrl: '' },
  ],
})
// 监听中线元素显示
const refIndexTwoMid = ref(null)
const indexTwoMidIsVisible = useElementVisibility(refIndexTwoMid)

// 第三屏
// 内容
const indexThreeContent = ref({
  title: 'Service',
  subtitle: 'Company',
  infoList: [
    { title: '', imgUrl: 'https://cdn.prod.website-files.com/63fdcbe48aa020c0a5493507/656784f4a1a5876ea1668c22_creator-2-p-500.webp' },
    { title: '', imgUrl: 'https://cdn.prod.website-files.com/63fdcbe48aa020c0a5493507/656784f4ba607c947979e46f_creator-1-p-500.webp' },
    { title: '', imgUrl: 'https://cdn.prod.website-files.com/63fdcbe48aa020c0a5493507/6567286fa483986cef4ac893_creator-1-p-500.webp' },
    { title: '', imgUrl: 'https://cdn.prod.website-files.com/63fdcbe48aa020c0a5493507/6567286e6cab2a3cb6cdcfc6_creator-2-p-500.webp' },
  ],
})
</script>

<template>
  <div relative>
    <div class="isolate">
      <!-- index 1 -->
      <div relative h-svh>
        <CssBackgroundBlack />
        <div class="absolute inset-x-0 top-0 h-full w-full transform-gpu overflow-hidden -z-5 pc:block mobile:hidden">
          <video class="h-full w-full object-fill" autoplay loop muted>
            <source :src="indexOneContent.bgVideo" type="video/mp4">
          </video>
        </div>
        <div class="mx-auto box-border h-full max-w-2xl flex items-center justify-center">
          <div class="text-center">
            <div data-aos="fade" data-aos-delay="500" class="mb-10 text-4xl font-bold tracking-tight mobile:text-white pc:text-gray-900">
              {{ indexOneContent.title }}
            </div>
            <div data-aos="fade" data-aos-delay="1000" class="text-xl leading-8 mobile:text-gray-300 pc:text-gray-600">
              {{ indexOneContent.subtitle }}
            </div>
          </div>
        </div>
      </div>

      <!-- index 2 -->
      <div relative>
        <CssBackgroundBlack />
        <div class="pc:max-w-screen-xl mx-auto py-20 mobile:max-w-90%">
          <!-- =================pc -->
          <div class="relative w-full items-center justify-center mobile:hidden pc:flex">
            <!-- left -->
            <div class="relative h-80 w-100 rounded-3xl bg-orange-500 shadow-xl backdrop-blur-xl">
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
                  <div class="animate__animated animate__headShake animate__infinite animate__infinite ml-0.5 text-sm">
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
                class="group absolute left-50% z-1 h-62 w-62 rounded-3xl bg-[#7559ff] shadow-xl backdrop-blur-xl transition-all duration-500 delay-0 ease-linear -translate-x-1/2"
                :class="[indexTwoMidIsVisible ? 'top-0 translate-y-0' : 'top-50% -translate-y-1/2']"
              >
                <div class="relative h-full w-full">
                  <div class="absolute left-2 top-2 rounded-xl bg-gray-900/50 px-4 py-3 text-white pc:group-hover:scale-110">
                    {{ indexTwoContent.rightInfo[0].title }}
                  </div>
                </div>
              </div>
              <div
                class="group absolute top-50% z-2 h-62 w-62 rounded-3xl bg-[#00bf8f] shadow-xl backdrop-blur-xl transition-all duration-500 delay-0 ease-linear -translate-y-1/2"
                :class="[indexTwoMidIsVisible ? 'left-0 translate-x-0' : 'left-50% -translate-x-1/2']"
              >
                <div class="relative h-full w-full">
                  <div class="absolute left-2 top-2 rounded-xl bg-gray-900/50 px-4 py-3 text-white group-hover:scale-110">
                    {{ indexTwoContent.rightInfo[1].title }}
                  </div>
                </div>
              </div>
              <div
                class="group absolute top-50% z-3 h-62 w-62 rounded-3xl bg-[#458fff] shadow-xl backdrop-blur-xl transition-all duration-500 delay-0 ease-linear -translate-y-1/2"
                :class="[indexTwoMidIsVisible ? 'right-0 translate-x-0' : 'right-50% translate-x-1/2']"
              >
                <div class="relative h-full w-full">
                  <div class="absolute left-2 top-2 rounded-xl bg-gray-900/50 px-4 py-3 text-white group-hover:scale-110">
                    {{ indexTwoContent.rightInfo[2].title }}
                  </div>
                </div>
              </div>
              <div
                class="group absolute left-50% z-4 h-62 w-62 rounded-3xl bg-purple-600 shadow-xl backdrop-blur-xl transition-all duration-500 delay-0 ease-linear -translate-x-1/2"
                :class="[indexTwoMidIsVisible ? 'bottom-0 translate-y-0' : 'bottom-50% translate-y-1/2']"
              >
                <div class="relative h-full w-full">
                  <div class="absolute left-2 top-2 rounded-xl bg-gray-900/50 px-4 py-3 text-white group-hover:scale-110">
                    {{ indexTwoContent.rightInfo[3].title }}
                  </div>
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
              <div class="mr-4 h-62 w-62 shrink-0 rounded-3xl bg-[#7559ff] shadow-xl backdrop-blur-xl">
                <div class="relative h-full w-full">
                  <div class="absolute left-2 top-2 rounded-xl bg-gray-900/50 px-4 py-3 text-white">
                    {{ indexTwoContent.rightInfo[0].title }}
                  </div>
                </div>
              </div>
              <div class="mr-4 h-62 w-62 shrink-0 rounded-3xl bg-[#00bf8f] shadow-xl backdrop-blur-xl">
                <div class="relative h-full w-full">
                  <div class="absolute left-2 top-2 rounded-xl bg-gray-900/50 px-4 py-3 text-white">
                    {{ indexTwoContent.rightInfo[1].title }}
                  </div>
                </div>
              </div>
              <div class="mr-4 h-62 w-62 shrink-0 rounded-3xl bg-[#458fff] shadow-xl backdrop-blur-xl">
                <div class="relative h-full w-full">
                  <div class="absolute left-2 top-2 rounded-xl bg-gray-900/50 px-4 py-3 text-white">
                    {{ indexTwoContent.rightInfo[2].title }}
                  </div>
                </div>
              </div>
              <div class="mr-4 h-62 w-62 shrink-0 rounded-3xl bg-purple-600 shadow-xl backdrop-blur-xl">
                <div class="relative h-full w-full">
                  <div class="absolute left-2 top-2 rounded-xl bg-gray-900/50 px-4 py-3 text-white">
                    {{ indexTwoContent.rightInfo[3].title }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- index 3 -->
      <!--  data-aos="fade" data-aos-delay="300" -->
      <!-- <RoughNotation type="underline" :is-show="indexThreeIsVisible">
      </RoughNotation> -->
      <div class="relative isolate h-screen w-full overflow-hidden">
        <CssBackgroundBlack />
        <img class="absolute inset-0 h-full w-full object-cover object-right -z-5" src="/images/index_3_bg.avif" alt="">
        <div class="absolute left-50% top-50% z-1 text-center -translate-x-1/2 -translate-y-1/2">
          <div class="mb-2 text-white font-semibold mobile:text-4xl pc:text-7xl">
            {{ indexThreeContent.subtitle }}
          </div>
          <div class="text-orange-500 font-bold mobile:text-6xl pc:text-9xl">
            {{ indexThreeContent.title }}
          </div>
        </div>

        <!-- =================pc -->
        <div class="absolute left-50% top-0 z-10 h-full w-7xl pc:block mobile:hidden -translate-x-1/2">
          <div data-aos="fade" data-aos-delay="300" class="absolute left-5% top-5% h-56 w-96 flex cursor-pointer items-center rounded-3xl shadow-2xl shadow-orange-100 transition-all hover:translate-y-0.5">
            <img class="h-full w-full rounded-3xl" :src="indexThreeContent.infoList[0].imgUrl">
          </div>
          <div data-aos="fade" data-aos-delay="300" class="absolute right-5% top-20% h-56 w-96 flex cursor-pointer items-center rounded-3xl shadow-2xl shadow-orange-100 transition-all hover:translate-y-0.5">
            <img class="h-full w-full rounded-3xl" :src="indexThreeContent.infoList[1].imgUrl">
          </div>
          <div data-aos="fade" data-aos-delay="300" class="absolute left-10% top-50% h-56 w-96 flex cursor-pointer items-center rounded-3xl shadow-2xl shadow-orange-100 transition-all hover:translate-y-0.5">
            <img class="h-full w-full rounded-3xl" :src="indexThreeContent.infoList[2].imgUrl">
          </div>
          <div data-aos="fade" data-aos-delay="300" class="absolute bottom-5% right-10% h-56 w-96 flex cursor-pointer items-center rounded-3xl shadow-2xl shadow-orange-100 transition-all hover:translate-y-0.5">
            <img class="h-full w-full rounded-3xl" :src="indexThreeContent.infoList[3].imgUrl">
          </div>
        </div>
        <!-- =================mobile -->
        <div class="absolute left-50% top-0 z-10 h-full w-90% flex-col items-center justify-around pc:hidden mobile:flex -translate-x-1/2">
          <div data-aos="fade" data-aos-delay="300" class="absolute left-5% top-8% h-24 w-44 flex items-center rounded-xl shadow shadow-orange-100">
            <img class="h-full w-full rounded-xl" :src="indexThreeContent.infoList[0].imgUrl">
          </div>
          <div data-aos="fade" data-aos-delay="300" class="absolute right-5% top-30% h-24 w-44 flex items-center rounded-xl shadow shadow-orange-100">
            <img class="h-full w-full rounded-xl" :src="indexThreeContent.infoList[1].imgUrl">
          </div>
          <div data-aos="fade" data-aos-delay="300" class="absolute left-10% top-55% h-24 w-44 flex items-center rounded-xl shadow shadow-orange-100">
            <img class="h-full w-full rounded-xl" :src="indexThreeContent.infoList[2].imgUrl">
          </div>
          <div data-aos="fade" data-aos-delay="300" class="absolute bottom-8% right-10% h-24 w-44 flex items-center rounded-xl shadow shadow-orange-100">
            <img class="h-full w-full rounded-xl" :src="indexThreeContent.infoList[3].imgUrl">
          </div>
        </div>
      </div>
      <!-- /end -->
    </div>
  </div>
</template>
