<script setup lang="ts">
const props = defineProps<{
  data: { [propName: string]: any }
}>()
</script>

<template>
  <div class="relative mb-4 w-full">
    <!-- 标题 -->
    <div class="mb-2 text-lg text-gray-700 font-700">
      {{ props.data.title }}
    </div>

    <!-- box -->
    <label
      v-for="item in props.data.labelList"
      :key="item.label"
      class="flex cursor-pointer select-none items-center text-gray-500"
      @click="item.checked = !item.checked"
    >
      <div class="relative">
        <div class="mr-1 h-5 w-5 flex items-center justify-center border rounded">
          <span :class="[item.checked ? 'opacity-100' : 'opacity-0']">
            <svg
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                fill="#f97316"
                stroke="#f97316"
                strokeWidth="0.4"
              />
            </svg>
          </span>
        </div>
      </div>
      {{ item.label }}
    </label>
  </div>
</template>
