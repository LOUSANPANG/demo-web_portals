<script lang="ts" setup>
const footer = ref({
  contact: [
    { icon: 'i-carbon-logo-wechat', name: '微信' },
    { icon: 'i-carbon-phone-voice', name: '电话' },
    { icon: 'i-carbon-logo-twitter', name: 'Mail' },
    { icon: 'i-carbon-email', name: 'Twitter' },
  ],
  copyright: '© 2024 - Present. All rights reserved.',
})
</script>

<template>
  <div class="relative isolate overflow-hidden bg-gray-900 py-8">
    <!-- bg -->
    <div class="xl:-top-6 absolute left-1/2 top-0 blur-3xl -z-10 -translate-x-1/2" aria-hidden="true">
      <div class="aspect-[1155/678] w-[72.1875rem] from-[#ff80b5] to-[#9089fc] bg-gradient-to-tr opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>

    <div class="mb-4 w-full flex items-center justify-center">
      <div
        v-for="item in footer.contact"
        :key="item.icon"
        :title="item.name"
        :class="[item.icon]"
        class="mr-2 cursor-pointer text-base text-gray-400 transition duration-100 active:text-gray-600 hover:text-gray-500"
      />
    </div>

    <div class="text-center text-sm text-gray-400">
      {{ footer.copyright }}
    </div>
  </div>
</template>
