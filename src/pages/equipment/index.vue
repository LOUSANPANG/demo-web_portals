<script setup lang="ts">
const currentPage = ref(1) // 当前页
const pageSize = ref(0) // 分页数
const currentEquipments = ref<Array<{ id: number, [propName: string]: any }>>([]) // 当前页的视频数
watchEffect(async () => {
  pageSize.value = 5
  currentEquipments.value = [
    { id: 1, title: 'BT44RT(一键原地阔腿)', powerSource: '1', workHeight: '44.44m', workWith: '25.60m', workLoad: '300kg/454kg', imgUrl: 'https://www.cndingli.com/upload/images/2022/08/16/l/fb739c298101405987d46e773c47ad03.png' },
    { id: 1, title: 'BT44RT(一键原地阔腿)', powerSource: '2', workHeight: '44.44m', workWith: '25.60m', workLoad: '300kg/454kg', imgUrl: 'https://www.cndingli.com/upload/images/2022/09/30/l/e9662d428f1c4a2195f84ff6f8aa6a97.png' },
    { id: 1, title: 'BT44RT(一键原地阔腿)', powerSource: '3', workHeight: '44.44m', workWith: '25.60m', workLoad: '300kg/454kg', imgUrl: 'https://www.cndingli.com/upload/images/2022/10/06/l/ae12f55264d74ce5badce67c7206230b.png' },
    { id: 1, title: 'BT44RT(一键原地阔腿)', powerSource: '2', workHeight: '44.44m', workWith: '25.60m', workLoad: '300kg/454kg', imgUrl: 'https://www.cndingli.com/upload/images/2022/09/30/l/e9662d428f1c4a2195f84ff6f8aa6a97.png' },
  ]
})

const filterSelectData = ref({ title: 'Classify', labelList: [{ label: 'AAAA', checked: true, value: '' }, { label: 'BBB', checked: false, value: '' }] })

// 手机筛选打开弹窗
const filterModal = ref(false)
</script>

<template>
  <PageLayout>
    <div class="h-72vh w-full flex flex-col justify-between mobile:px-0 pc:px-8">
      <!-- 搜索、筛选 -->
      <!-- PC -->
      <div class="w-full items-center justify-end mobile:hidden pc:flex">
        <UiDropdownCheckbox :data="filterSelectData" />
        <UiInputSearch />
      </div>
      <!-- mobile -->
      <div class="relative w-full items-center justify-end pc:hidden mobile:flex">
        <div class="i-carbon-filter h-5 w-5 text-orange-400" @click="filterModal = true" />
        <div v-if="filterModal" class="fixed right-0 top-0 z-100 h-vh w-vw bg-black/10" @click="filterModal = false">
          <div class="relative h-full w-full">
            <div class="absolute right-0 top-0 z-1 box-border h-full w-80% rounded-l-lg bg-white px-4 py-4 shadow" @click.stop="() => {}">
              <div class="i-carbon-close-large absolute right-4 top-4 z-5 h-6 w-6 text-orange-400" @click="filterModal = false" />
              <div class="h-full w-full overflow-y-auto">
                <UiCheckbox :data="filterSelectData" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 内容 -->
      <div class="w-full grow overflow-y-auto py-6">
        <div class="grid mobile:grid-cols-1 pc:grid-cols-3 mobile:gap-2 pc:gap-4">
          <RouterLink
            v-for="item in currentEquipments"
            :key="item.id"
            :to="`/equipment/detail?id=${item.id}`"
            class="group rounded-lg p-4 shadow transition-all hover:shadow-lg"
            :class="[item.powerSource === '1' ? 'shadow-orange-100' : item.powerSource === '2' ? 'shadow-green-100' : 'shadow-blue-100']"
          >
            <div class="mb-2 h-56 w-full overflow-hidden rounded-md">
              <img
                :src="item.imgUrl"
                class="h-full w-full rounded-md object-cover transition-all group-hover:scale-105"
              >
            </div>
            <div class="mb-4 truncate font-medium">
              {{ item.title }}
            </div>
            <div class="flex items-center gap-4">
              <div class="gap-2 mobile:block pc:flex pc:items-center">
                <div class="i-carbon-fit-to-height h-4 w-4 text-blue-700 mobile:mb-1.5 pc:mb-0" />
                <div>
                  <div class="text-xs text-gray-500">
                    最大工作高度
                  </div>
                  <div class="text-xs text-gray-900 font-700">
                    {{ item.workHeight }}
                  </div>
                </div>
              </div>
              <div class="gap-2 mobile:block pc:flex pc:items-center">
                <div class="i-carbon-fit-to-width h-4 w-4 text-blue-700 mobile:mb-1.5 pc:mb-0" />
                <div>
                  <div class="text-xs text-gray-500">
                    最大作业幅度
                  </div>
                  <div class="text-xs text-gray-900 font-700">
                    {{ item.workWith }}
                  </div>
                </div>
              </div>
              <div class="gap-2 mobile:block pc:flex pc:items-center">
                <div class="i-carbon-bare-metal-server-02 h-4 w-4 text-blue-700 mobile:mb-1.5 pc:mb-0" />
                <div>
                  <div class="text-xs text-gray-500">
                    安全工作载荷
                  </div>
                  <div class="text-xs text-gray-900 font-700">
                    {{ item.workLoad }}
                  </div>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>

      <!-- 分页 -->
      <ComponentPagination :page-size="pageSize" @emit-change-page="page => currentPage = page" />
    </div>
  </PageLayout>
</template>
