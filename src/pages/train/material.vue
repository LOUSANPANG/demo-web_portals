<script setup lang="ts">
const currentPage = ref(1) // 当前页
const pageSize = ref(0) // 分页数
const currentFiles = ref<Array<{ id: number, [propName: string]: any }>>([]) // 当前页的资料数
watchEffect(async () => {
  pageSize.value = 5
  currentFiles.value = [
    { title: 'File1', describe: 'This is the XX device manual', id: 1 },
    { title: 'File2', describe: 'This is the XX device manual，This is the XX device manual', id: 2 },
    { title: 'File3', describe: 'This is the XX device manual，This is the XX device manual，This is the XX device manual', id: 3 },
  ]
})
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
        <div class="min-w-full bg-white text-sm">
          <div class="flex items-center border-b border-b-2 border-gray-200 px-4 py-2 text-gray-900 font-medium">
            <div class="mobile:w-25% pc:w-30%">
              Title
            </div>
            <div class="mobile:w-55% pc:w-50%">
              describe
            </div>
            <div class="w-20%" />
          </div>
          <!-- File list -->
          <div v-for="item in currentFiles" :key="item.id" class="w-full flex items-center border-b border-gray-200 px-4 py-2 text-gray-700">
            <div class="truncate mobile:w-25% pc:w-30%">
              {{ item.title }}
            </div>
            <div class="truncate mobile:w-55% pc:w-50%">
              {{ item.describe }}
            </div>
            <div class="w-20% flex items-center justify-end">
              <div class="h-6 w-15 flex cursor-pointer items-center justify-center rounded bg-orange-600 hover:bg-orange-700">
                <div class="i-carbon-cloud-download h-5 w-5 text-white font-medium" />
              </div>
            </div>
          </div>
          <!-- /end File list -->
        </div>
      </div>

      <!-- 分页 -->
      <ComponentPagination :page-size="pageSize" @emit-change-page="page => currentPage = page" />
    </div>
  </PageLayout>
</template>
