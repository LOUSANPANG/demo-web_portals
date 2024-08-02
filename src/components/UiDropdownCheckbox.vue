<script setup lang="ts">
const props = defineProps<{
  data: { [propName: string]: any }
}>()

// const emit = defineEmits(['updateData'])
// watchEffect(() => {
//   emit('updateData', '')
// })
</script>

<template>
  <div class="relative mr-6">
    <details class="group [&_summary::-webkit-details-marker]:hidden">
      <summary
        class="flex cursor-pointer items-center gap-1 text-gray-900 transition"
      >
        <span class="text-base font-medium"> {{ props.data.title }} </span>

        <span class="transition group-open:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </summary>

      <div class="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
        <div class="w-80 border border-gray-200 rounded bg-white">
          <ul class="p-4 space-y-1">
            <li v-for="item in props.data.labelList" :key="item.label">
              <label
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
            </li>
          </ul>
        </div>
      </div>
    </details>
  </div>
</template>
