<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
  size: {
    type: String,
    default: 'default', // small default
  },
})

const emit = defineEmits(['updateData'])

const selectWH = ref(['mobile:w-40 pc:w-80'])
watchEffect(() => {
  if (props.size === 'default')
    selectWH.value = ['mobile:w-40 pc:w-80']
  else if (props.size === 'small')
    selectWH.value = ['mobile:w-40 pc:w-50']
})

const data = ref([
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
])
const value = ref(data.value[0])
watchEffect(() => {
  emit('updateData', value)
})
</script>

<template>
  <Listbox v-model="value">
    <div class="relative">
      <ListboxButton
        class="relative mr-5 box-border h-10 cursor-default border-gray-200 rounded-md bg-white px-2 py-2.5 shadow-sm mobile:text-sm"
        :class="[...selectWH]"
      >
        <div class="truncate text-left">
          {{ value.name }}
        </div>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <ChevronUpDownIcon
            class="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="scrollbar absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 mobile:text-sm focus:outline-none"
        >
          <ListboxOption
            v-for="item in data"
            v-slot="{ active, selected }"
            :key="item.name"
            :value="item"
            as="template"
          >
            <li
              class="relative cursor-default select-none py-2 pl-10 pr-4" :class="[
                active ? 'bg-orange-100 text-orange-900' : 'text-gray-900',
              ]"
            >
              <span
                class="block truncate" :class="[
                  selected ? 'font-medium' : 'font-normal',
                ]"
              >{{ item.name }}</span>
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-600"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
