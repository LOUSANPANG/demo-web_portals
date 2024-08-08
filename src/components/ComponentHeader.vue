<script setup lang="ts" generic="T extends any, O extends any">
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, ChatBubbleLeftIcon, ChevronDownIcon, GlobeEuropeAfricaIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const { y: windowY } = useWindowScroll()

const router = useRouter()
const currentRoute = ref('/')
watch(
  () => router.currentRoute.value,
  (newValue: { path: string }) => {
    currentRoute.value = newValue.path
  },
  { immediate: true },
)

const logo = ref('/logo.png')
const navigation = [
  { name: 'Equipment', to: '/equipment', children: null },
  { name: 'Service', to: '/service', children: null },
  { name: 'Train', to: '/train', children: [{ name: 'Video', to: '/train/video' }, { name: 'Material', to: '/train/material' }] },
  { name: 'Information', to: '/information', children: null },
]

const language = ref(['简体中文', 'English'])
</script>

<template>
  <Disclosure v-slot="{ open }" as="header" class="fixed left-0 top-0 z-50 w-full bg-gray-800" :class="windowY > 0 ? 'bg-gray-800/90' : 'bg-gray-800'">
    <nav flex items-center justify-between py-4 mobile:px-6 pc:px-8>
      <!-- left -->
      <div class="mobile:w-52%">
        <!-- pc -->
        <div class="items-center mobile:hidden pc:flex">
          <!-- logo -->
          <div class="flex items-center mobile:mr-4">
            <RouterLink to="/">
              <img class="block h-8 w-32 hover:opacity-80" :src="logo" alt="logo" title="Back Home">
            </RouterLink>
          </div>

          <!-- 导航 -->
          <div class="items-baseline mobile:hidden pc:flex space-x-4">
            <div v-for="item in navigation" :key="item.name">
              <Menu v-if="item.children" as="div" class="relative">
                <MenuButton class="relative flex items-center rounded-md px-3 py-2 text-base text-gray-300 font-medium hover:bg-gray-700 hover:text-white">
                  {{ item.name }}
                  <ChevronDownIcon class="ml-0.5 h-4.5 w-4.5" aria-hidden="true" />
                </MenuButton>
                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                  <MenuItems class="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem v-for="navChild in item.children" :key="navChild.name" v-slot="{ active }">
                      <button
                        class="box-border block w-full px-4 py-2 text-left text-base text-gray-700"
                        :class="[active ? 'bg-gray-100' : '']"
                        @click="router.push(navChild.to)"
                      >
                        {{ navChild.name }}
                      </button>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
              <RouterLink
                v-else
                :to="item.to"
                class="rounded-md px-3 py-2 text-base font-medium"
                :class="[item.to === currentRoute ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"
              >
                {{ item.name }}
              </RouterLink>
            </div>
          </div>
        </div>

        <!-- mobile -->
        <div class="w-full mobile:block pc:hidden">
          <div class="w-full flex items-center justify-between">
            <!-- menu icon -->
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset">
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>

            <!-- logo -->
            <div class="flex items-center">
              <RouterLink to="/">
                <img class="block h-8 w-32 hover:opacity-80" :src="logo" alt="logo">
              </RouterLink>
            </div>
          </div>
        </div>
      </div>

      <!-- right -->
      <div class="flex items-center">
        <!-- 联系我们 -->
        <RouterLink to="/contact" title="Contact Us" class="relative mr-6 flex items-center rounded-full bg-gray-800 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-gray-800">
          <ChatBubbleLeftIcon class="h-6 w-6" aria-hidden="true" />
        </RouterLink>

        <!-- 翻译 -->
        <Menu as="div" class="relative">
          <div>
            <MenuButton title="Translate" class="relative flex items-center rounded-full bg-gray-800 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-gray-800">
              <GlobeEuropeAfricaIcon class="h-6 w-6" aria-hidden="true" />
            </MenuButton>
          </div>
          <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <MenuItem v-for="item in language" v-slot="{ active }" :key="item">
                <div class="block px-4 py-2 text-base text-gray-700" :class="[active ? 'bg-gray-100' : '']">
                  {{ item }}
                </div>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </nav>

    <!-- mobile nav -->
    <DisclosurePanel class="pc:hidden">
      <div class="px-2 pb-3 pt-2 space-y-1">
        <div v-for="item in navigation" :key="item.name">
          <!-- 下拉的导航 -->
          <Disclosure v-if="item.children" v-slot="{ open }" as="div">
            <DisclosureButton as="div" class="block flex items-center justify-between rounded-md px-3 py-2 text-base text-gray-300 font-medium hover:bg-gray-700 hover:text-white">
              {{ item.name }}
              <ChevronDownIcon class="h-5 w-5 flex-none" :class="[open ? 'rotate-180' : '']" aria-hidden="true" />
            </DisclosureButton>
            <DisclosurePanel>
              <DisclosureButton
                v-for="navChild in item.children"
                :key="navChild.name"
                as="div"
                class="block rounded-md px-3 py-2 pl-6 text-base font-medium"
                :class="[navChild.to === currentRoute ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"
                @click="router.push(navChild.to)"
              >
                {{ navChild.name }}
              </DisclosureButton>
            </DisclosurePanel>
          </Disclosure>

          <!-- 导航 -->
          <DisclosureButton
            v-else
            as="div"
            class="block rounded-md px-3 py-2 text-base font-medium"
            :class="[item.to === currentRoute ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"
            @click="router.push(item.to)"
          >
            {{ item.name }}
          </DisclosureButton>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
