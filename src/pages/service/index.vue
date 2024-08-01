<script setup lang="ts">
const serviceInfo = ref([
  {
    title: `Stayin' Alive`,
    description: `No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?`,
    footer: 'Michael Scott',
  },
  {
    title: `Stayin' Alive`,
    description: `No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?`,
    footer: 'Michael Scott',
  },
  {
    title: `Stayin' Alive`,
    description: `No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?`,
    footer: 'Michael Scott',
  },
  {
    title: `Stayin' Alive`,
    description: `No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?`,
    footer: 'Michael Scott',
  },
  {
    title: `Stayin' Alive`,
    description: `No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?`,
    footer: 'Michael Scott',
  },
])
</script>

<template>
  <PageLayout>
    <div class="grid gap-4 mobile:grid-cols-1 pc:grid-cols-3 mobile:px-0 pc:px-8">
      <blockquote v-for="item in serviceInfo" :key="item.title" class="h-full flex flex-col justify-between rounded-md bg-white shadow-md shadow-orange-50 shadow-sm transition-all mobile:p-8 pc:p-6 hover:shadow-xl hover:-translate-y-0.5">
        <div class="mb-4 flex gap-0.5">
          <div v-for="star in 5" :key="star" class="i-carbon-star-filled mr-0.5 h-5 w-5 text-yellow-400" />
        </div>
        <p class="mb-4 text-orange-600 font-bold mobile:text-2xl pc:text-3xl">
          {{ item.title }}
        </p>
        <p class="mb-4 min-h-45 text-gray-700 leading-relaxed">
          {{ item.description }}
        </p>
        <footer class="text-sm text-gray-700 font-medium">
          &mdash; {{ item.footer }}
        </footer>
      </blockquote>
    </div>
  </PageLayout>
</template>
