<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

interface TypeVideoData {
  title: string
  videoUrl: string
}

// 获取数据
const currentPage = ref(1)
const pageSize = ref(0)
const currentVideos = ref<Array<TypeVideoData>>([])
watchEffect(async () => {
  pageSize.value = 5
  currentVideos.value = [
    { title: 'Video Class', videoUrl: 'http://101.201.49.30:8002/video/index_bg.mp4' },
  ]
})

// 播放音频
const isOpen = ref(false)
function closeModal() {
  isOpen.value = false
}
const playVideoInfo = ref({ title: '', videoUrl: '' })
function handlePlayVideo(videoInfo: TypeVideoData) {
  isOpen.value = true
  playVideoInfo.value = videoInfo
}
</script>

<template>
  <PageLayout>
    <div class="h-73vh w-full flex flex-col justify-between mobile:px-0 pc:px-8">
      <!-- 搜索、筛选 -->
      <div class="w-full flex items-center justify-end">
        <UiSelect />
        <UiInputSearch />
      </div>

      <!-- 内容 -->
      <div class="scrollbar my-6 w-full grow overflow-y-auto">
        <div class="grid mobile:grid-cols-2 pc:grid-cols-4 mobile:gap-4 pc:gap-8">
          <div
            v-for="item in currentVideos"
            :key="item.title"
            class="group relative box-border flex flex-col cursor-pointer overflow-hidden rounded-lg p-4 shadow hover:shadow-md hover:brightness-100"
            @click="handlePlayVideo(item)"
          >
            <div class="relative mb-4 rounded-lg bg-gray-100/40 mobile:h-48 pc:h-80">
              <div class="i-carbon-video-player absolute left-50% top-50% z-10 h-8 w-10 text-orange-400/50 -translate-x-1/2 -translate-y-1/2 group-hover-text-orange-400/80" />
              <video class="mobile:h-48 pc:h-80">
                <source :src="item.videoUrl" type="video/mp4">
              </video>
            </div>
            <div class="truncate text-lg text-gray-900 font-medium leading-6">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>

      <!-- 分页 -->
      <ComponentPagination :page-size="pageSize" @emit-change-page="page => currentPage = page" />
    </div>

    <!-- 弹窗播放视频 -->
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" class="relative z-10" @close="closeModal">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="min-h-full flex items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all mobile:w-full pc:w-60vw"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg text-gray-900 font-medium leading-6"
                >
                  {{ playVideoInfo.title }}
                </DialogTitle>
                <div class="mt-2 mobile:h-40vh pc:h-50vh">
                  <video controls class="mobile:h-40vh pc:h-50vh">
                    <source :src="playVideoInfo.videoUrl" type="video/mp4">
                  </video>
                </div>
                <div class="mt-4 flex justify-end">
                  <button
                    type="button"
                    class="inline-flex justify-center border border-transparent rounded-md bg-orange-100 px-4 py-2 text-sm text-orange-900 font-medium hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500"
                    @click="closeModal"
                  >
                    Close
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- /弹窗 -->
  </PageLayout>
</template>
