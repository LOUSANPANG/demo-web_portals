<script setup lang="ts">
const currentPage = ref(1) // 当前页
const pageSize = ref(0) // 分页数
const currentFiles = ref<Array<{ id: number, [propName: string]: any }>>([]) // 当前页的资料数
watchEffect(async () => {
  pageSize.value = 5
  currentFiles.value = [
    { date: 'July 19, 2021', title: 'File1', id: 1 },
    { date: 'July 19, 2021', title: 'File2', id: 2 },
    { date: 'July 19, 2021', title: 'File3', id: 3 },
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
      <div class="my-6 w-full grow overflow-y-auto">
        <table class="min-w-full bg-white text-sm divide-y-2 divide-gray-200">
          <thead class="ltr:text-left rtl:text-right">
            <tr>
              <th class="whitespace-nowrap px-4 py-2 text-gray-900 font-medium">
                Title
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-gray-900 font-medium">
                Date
              </th>
              <th class="px-4 py-2" />
            </tr>
          </thead>
          <!-- File list -->
          <tbody class="divide-y divide-gray-200">
            <tr v-for="item in currentFiles" :key="item.id">
              <td class="whitespace-nowrap px-4 py-2 text-center text-gray-900 font-medium">
                {{ item.title }}
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                {{ item.date }}
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-center">
                <div class="inline-block cursor-pointer rounded bg-orange-600 px-4 py-2 text-xs text-white font-medium hover:bg-orange-700">
                  Download
                </div>
              </td>
            </tr>
          </tbody>
          <!-- /end File list -->
        </table>
      </div>

      <!-- 分页 -->
      <ComponentPagination :page-size="pageSize" @emit-change-page="page => currentPage = page" />
    </div>
  </PageLayout>
</template>
