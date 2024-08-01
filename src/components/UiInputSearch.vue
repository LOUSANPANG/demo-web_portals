<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: 'default', // small default
  },
})

const emit = defineEmits(['updateData'])

const inputWH = ref(['mobile:w-40 pc:w-80'])
watchEffect(() => {
  if (props.size === 'default')
    inputWH.value = ['mobile:w-40 pc:w-80']
  else if (props.size === 'small')
    inputWH.value = ['mobile:w-40 pc:w-50']
})

const value = ref('')
function handleSearch() {
  emit('updateData', value)
}
</script>

<template>
  <div
    class="relative h-10 rounded-md bg-white px-2 py-2.5 shadow-sm mobile:text-sm pc:text-base"
    :class="[...inputWH]"
  >
    <input
      v-model="value"
      type="text"
      placeholder="Search for..."
      class="w-full border-none outline-none"
    >
    <div class="absolute bottom-0 right-2 h-full flex items-center">
      <div class="i-carbon-search h-5 w-5 cursor-pointer text-gray-700 hover:text-gray-900" @click="handleSearch" />
    </div>
  </div>
</template>
