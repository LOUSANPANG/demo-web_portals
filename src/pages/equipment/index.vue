<script setup lang="ts">
const currentPage = ref(1) // 当前页
const pageSize = ref(0) // 分页数
// 当前页的视频数
const currentEquipments = ref<Array<{ id: number, [propName: string]: any }>>([])
watchEffect(async () => {
  pageSize.value = 5
  currentEquipments.value = [
    { id: 1, title: 'Equipment1', imgUrl: '' },
  ]
})

const filterSelectData = ref({ title: 'Classify 2', labelList: [{ label: 'AAAA', checked: true, value: '' }, { label: 'BBB', checked: false, value: '' }] })

// 手机筛选打开弹窗
const filterModal = ref(false)
</script>

<template>
  <PageLayout>
    <div class="h-72vh w-full flex flex-col justify-between mobile:px-0 pc:px-8">
      <!-- 搜索、筛选 -->
      <!-- PC -->
      <div class="w-full items-center justify-end mobile:hidden pc:flex">
        <UiInputSearch size="small" />
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
      <div class="my-6 w-full grow overflow-y-auto" />

      <!-- 分页 -->
      <ComponentPagination :page-size="pageSize" @emit-change-page="page => currentPage = page" />
    </div>
  </PageLayout>
</template>
