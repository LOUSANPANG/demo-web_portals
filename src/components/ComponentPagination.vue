<script setup lang="ts">
const props = defineProps<{
  pageSize: number
}>()

const emit = defineEmits(['emitChangePage'])

const currentPage = ref(1)

function handleChangePage(page: number) {
  if (page < 1 || page > props.pageSize)
    return
  currentPage.value = page
  emit('emitChangePage', page)
}
</script>

<template>
  <div class="flex items-center justify-end">
    <nav v-if="props.pageSize > 0" class="isolate inline-flex rounded-md shadow-sm -space-x-px">
      <div
        v-if="props.pageSize > 1"
        class="relative inline-flex cursor-pointer items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-orange-400 hover:text-white"
        @click="handleChangePage(currentPage - 1)"
      >
        <div class="i-carbon-chevron-left h-5 w-5" />
      </div>
      <div
        v-for="item in props.pageSize"
        :key="item"
        :class="item === currentPage ? 'bg-orange-600 text-white' : 'text-gray-900'"
        class="relative inline-flex cursor-pointer items-center px-4 py-2 text-sm font-semibold ring-1 ring-gray-300 ring-inset hover:bg-orange-600 hover:text-white"
        @click="handleChangePage(item)"
      >
        {{ item }}
      </div>
      <div
        v-if="props.pageSize > 1"
        class="relative inline-flex cursor-pointer items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-orange-400 hover:text-white"
        @click="handleChangePage(currentPage + 1)"
      >
        <div class="i-carbon-chevron-right h-5 w-5" />
      </div>
    </nav>
  </div>
</template>
