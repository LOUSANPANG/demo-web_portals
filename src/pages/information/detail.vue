<script setup lang="ts">
// const query = useRoute('/information/detail').query
const blogDetails = ref({
  id: 1,
  date: 'July 19, 2021',
  title: 'New trends in Tech',
  description: 'Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.',
  imgUrl: '/images/blog/demo1.jpg',
})
</script>

<template>
  <PageLayout>
    <div v-if="blogDetails.id" class="w-full mobile:block pc:flex pc:justify-around">
      <img :src="blogDetails.imgUrl" class="rounded-lg shadow-lg shadow-orange-50 mobile:mb-6 pc:mb-0 mobile:h-40 mobile:w-full pc:h-120 pc:w-3/7">
      <div class="scrollbar overflow-y-auto mobile:h-50vh pc:h-70vh pc:w-3/7">
        <div class="mb-2 text-sm text-orange-400">
          {{ blogDetails.date }}
        </div>
        <div class="mb-4 text-gray-900 font-700 mobile:text-lg pc:text-xl">
          {{ blogDetails.title }}
        </div>
        <div class="mb-4 text-base text-gray-500">
          {{ blogDetails.description }}
        </div>
        <div class="mb-4 text-base text-gray-500">
          {{ blogDetails.description }}
        </div>
        <div class="mb-4 text-base text-gray-500">
          {{ blogDetails.description }}
        </div>
        <div class="mb-4 text-base text-gray-500">
          {{ blogDetails.description }}
        </div>
        <div class="mb-4 text-base text-gray-500">
          {{ blogDetails.description }}
        </div>
        <div class="mb-4 text-base text-gray-500">
          {{ blogDetails.description }}
        </div>
      </div>
    </div>
  </PageLayout>
</template>
