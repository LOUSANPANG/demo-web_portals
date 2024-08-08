<script setup lang="ts">
const currentPage = ref(1) // 当前页
const pageSize = ref(0) // 分页数
const currentBlogs = ref<Array<{ id: number, [propName: string]: any }>>([]) // 当前页的博客数
watchEffect(async () => {
  pageSize.value = 5
  currentBlogs.value = [
    { date: 'July 19, 2021', title: 'New trends in Tech', imgUrl: '/images/blog/demo1.jpg', id: 1 },
    { date: 'July 19, 2021', title: 'New trends in Tech', imgUrl: '/images/blog/demo2.jpg', id: 2 },
    { date: 'July 19, 2021', title: 'New trends in Tech', imgUrl: '/images/blog/demo3.jpg', id: 3 },
  ]
})
</script>

<template>
  <PageLayout>
    <div class="h-73vh w-full flex flex-col justify-between mobile:px-0 pc:px-8">
      <!-- 搜索、筛选 -->
      <div class="w-full flex items-center justify-end">
        <UiInputSearch />
      </div>

      <!-- 内容 -->
      <div class="scrollbar my-6 w-full grow overflow-y-auto">
        <div class="grid mobile:grid-cols-2 pc:grid-cols-4 mobile:gap-4 pc:gap-8">
          <RouterLink
            v-for="item in currentBlogs"
            :key="item.title"
            :to="`/information/detail?id=${item.id}`"
            class="group relative flex flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg mobile:h-48 pc:h-96"
          >
            <img :src="item.imgUrl" loading="lazy" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110">
            <div class="pointer-events-none absolute inset-0 from-gray-800 to-transparent bg-gradient-to-t pc:via-transparent" />
            <div class="relative mt-auto p-4">
              <span class="block text-sm text-gray-200">{{ item.date }}</span>
              <h2 class="mb-2 truncate text-xl text-white font-semibold transition duration-100">
                {{ item.title }}
              </h2>
              <span class="text-orange-300 font-semibold">Read more</span>
            </div>
          </RouterLink>
        </div>
      </div>

      <!-- 分页 -->
      <ComponentPagination :page-size="pageSize" @emit-change-page="page => currentPage = page" />
      <!-- /end 分页 -->
    </div>
  </PageLayout>
</template>
