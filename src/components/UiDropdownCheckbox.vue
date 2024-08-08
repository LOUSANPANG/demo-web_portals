<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const props = defineProps<{
  data: { [propName: string]: any }
}>()

// const emit = defineEmits(['updateData'])
// watchEffect(() => {
//   emit('updateData', '')
// })
</script>

<template>
  <Menu as="div" class="relative mr-6 inline-block text-left">
    <div>
      <MenuButton
        class="w-full inline-flex justify-center rounded-md bg-white/70 px-4 py-2 text-sm text-gray-600 font-medium hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        {{ props.data.title }}
        <ChevronDownIcon
          class="ml-2 h-5 w-5 text-gray-800 -mr-1 hover:text-gray-700"
          aria-hidden="true"
        />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 z-100 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 divide-y divide-gray-100 focus:outline-none"
      >
        <div class="px-1 py-1">
          <MenuItem v-for="item in props.data.labelList" :key="item.label" v-slot="{ active }">
            <button
              class="group w-full flex items-center rounded-md px-2 py-2 text-sm" :class="[
                active ? 'bg-orange-500 text-white' : 'text-gray-900',
              ]"
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
                        :stroke="active ? '#ffffff' : '#f97316'"
                        strokeWidth="0.4"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {{ item.label }}
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
