<script setup lang="ts">
// 筛选
const filterSelectData = ref([
  {
    title: '产品系列',
    labelList: [{ label: '臂式高空作业平台', checked: true, value: '1' }, { label: '剪叉式高空作业平台', checked: false, value: '2' }, { label: '桅柱式高空作业平台', checked: false, value: '3' }, { label: '差异化高空作业平台', checked: false, value: '4' }],
  },
  {
    title: '动力源',
    labelList: [{ label: '电动', checked: true, value: '1' }, { label: '柴动', checked: false, value: '2' }, { label: '混动', checked: false, value: '3' }],
  },
  {
    title: '工作高度',
    labelList: [{ label: '0-100m', checked: true, value: '1' }, { label: '100-200m', checked: false, value: '2' }, { label: '200m以上', checked: false, value: '3' }],
  },
],
)
// mobile filter
const filterModal = ref(false)

// const currentPage = ref(1) // 当前页
// const pageSize = ref(0) // 分页数
const currentEquipments = ref<Array<{ id: number, [propName: string]: any }>>([]) // 当前页的设备数
watchEffect(async () => {
  // pageSize.value = 5
  currentEquipments.value = [
    { id: 1, title: '铝合金单柱式升降机', powerSource: '1', workHeight: '44.44m', workWidth: '25.60m', workLoad: '300kg/454kg', imgUrl: '/images/equipment/lvhejindanzhushi.png' },
    { id: 2, title: '履带式剪叉升降机', powerSource: '2', workHeight: '44.44m', workWidth: '25.60m', workLoad: '300kg/454kg', imgUrl: '/images/equipment/fudaishijiancha.png' },
    { id: 3, title: '双柱铝合金升降机', powerSource: '3', workHeight: '44.44m', workWidth: '25.60m', workLoad: '300kg/454kg', imgUrl: '/images/equipment/shuangzhulvhejin.png' },
    { id: 4, title: '套筒式升降机', powerSource: '1', workHeight: '44.44m', workWidth: '25.60m', workLoad: '300kg/454kg', imgUrl: '/images/equipment/taotongshi.png' },
    { id: 5, title: '拖车曲臂式升降机', powerSource: '2', workHeight: '44.44m', workWidth: '25.60m', workLoad: '300kg/454kg', imgUrl: '/images/equipment/tuochequbishi.png' },
    { id: 6, title: '登车桥', powerSource: '3', workHeight: '44.44m', workWidth: '25.60m', workLoad: '300kg/454kg', imgUrl: '/images/equipment/dengcheqiao.png' },
    { id: 7, title: '卸货平台', powerSource: '1', workHeight: '44.44m', workWidth: '25.60m', workLoad: '300kg/454kg', imgUrl: '/images/equipment/xiehuopingtai.png' },
    { id: 8, title: '移动式剪叉升降机', powerSource: '2', workHeight: '44.44m', workWidth: '25.60m', workLoad: '300kg/454kg', imgUrl: '/images/equipment/yidongshijiancha.png' },
    { id: 9, title: '自行剪叉式升降机', powerSource: '3', workHeight: '44.44m', workWidth: '25.60m', workLoad: '300kg/454kg', imgUrl: '/images/equipment/zixingjianchashi.png' },
    { id: 10, title: '自行曲臂式升降机', powerSource: '2', workHeight: '44.44m', workWidth: '25.60m', workLoad: '300kg/454kg', imgUrl: '/images/equipment/zixingqubishi.png' },
    { id: 11, title: '自行桅杆式升降机', powerSource: '1', workHeight: '44.44m', workWidth: '25.60m', workLoad: '300kg/454kg', imgUrl: '/images/equipment/zixingguiganshi.png' },
  ]
})
// 判断能源类型
function equipmentPowerSource(powerSource: string) {
  switch (powerSource) {
    case '1':
      return {
        shadow: 'shadow-orange-100',
        background: 'bg-orange-500',
        name: '柴油',
      }
      break
    case '2':
      return {
        shadow: 'shadow-green-100',
        background: 'bg-green-500',
        name: '能源',
      }
      break
    default:
      return {
        shadow: 'shadow-blue-100',
        background: 'bg-blue-500',
        name: '混动',
      }
      break
  }
}
</script>

<template>
  <PageLayout>
    <div class="h-76vh w-full flex flex-col justify-between mobile:px-0 pc:px-8">
      <!-- 搜索、筛选 -->
      <!-- PC -->
      <div class="w-full items-center justify-end mobile:hidden pc:flex">
        <UiDropdownCheckbox v-for="item in filterSelectData" :key="item.title" :data="item" />
        <UiInputSearch />
      </div>
      <!-- mobile -->
      <div class="relative w-full items-center justify-end pc:hidden mobile:flex">
        <div class="i-carbon-filter h-5 w-5 text-orange-400" @click="filterModal = true" />
        <div v-if="filterModal" class="fixed right-0 top-0 z-100 h-vh w-vw bg-black/10" @click="filterModal = false">
          <div class="relative h-full w-full">
            <div class="absolute right-0 top-0 z-1 box-border h-full w-80% rounded-l-lg bg-white px-4 py-4 shadow" @click.stop="() => {}">
              <div class="i-carbon-close-large absolute right-4 top-4 z-5 h-6 w-6 text-orange-400" @click="filterModal = false" />
              <div class="h-full w-full overflow-y-auto">
                <UiCheckbox v-for="item in filterSelectData" :key="item.title" :data="item" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 内容 -->
      <div class="my-6 w-full grow overflow-y-auto">
        <div class="grid mobile:grid-cols-1 pc:grid-cols-3 pc:gap-4 mobile:gap-y-4">
          <RouterLink
            v-for="item in currentEquipments"
            :key="item.id"
            :to="`/equipment/detail?id=${item.id}`"
            class="group relative rounded-lg bg-gray-100/70 p-4 shadow transition-all hover:shadow-lg"
            :class="equipmentPowerSource(item.powerSource).shadow"
          >
            <span class="absolute rounded-bl-lg rounded-tr-lg px-3 py-0.5 text-xs text-white tracking-widest uppercase -right-px -top-px" :class="equipmentPowerSource(item.powerSource).background">
              {{ equipmentPowerSource(item.powerSource).name }}
            </span>
            <div class="relative mb-2 h-56 w-full overflow-hidden rounded-md">
              <img
                :src="item.imgUrl"
                class="h-full w-full rounded-md object-cover transition-all group-hover:scale-105"
              >
            </div>
            <div class="mb-4 truncate font-medium">
              {{ item.title }}
            </div>
            <div class="flex items-center gap-4">
              <div class="gap-2 mobile:block pc:flex pc:items-center">
                <img class="h-4 w-4 mobile:mb-1.5 pc:mb-0" src="/images/equipment/icon_height.png">
                <div>
                  <div class="text-xs text-gray-500">
                    最大工作高度
                  </div>
                  <div class="text-xs text-gray-900 font-700">
                    {{ item.workHeight }}
                  </div>
                </div>
              </div>
              <div class="gap-2 mobile:block pc:flex pc:items-center">
                <img class="h-4 w-4 mobile:mb-1.5 pc:mb-0" src="/images/equipment/icon_width.png">
                <div>
                  <div class="text-xs text-gray-500">
                    最大作业幅度
                  </div>
                  <div class="text-xs text-gray-900 font-700">
                    {{ item.workWidth }}
                  </div>
                </div>
              </div>
              <div class="gap-2 mobile:block pc:flex pc:items-center">
                <img class="h-4 w-4 mobile:mb-1.5 pc:mb-0" src="/images/equipment/icon_weight.png">
                <div>
                  <div class="text-xs text-gray-500">
                    安全工作载荷
                  </div>
                  <div class="text-xs text-gray-900 font-700">
                    {{ item.workLoad }}
                  </div>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>

      <!-- 分页 -->
      <!-- <ComponentPagination :page-size="pageSize" @emit-change-page="page => currentPage = page" /> -->
    </div>
  </PageLayout>
</template>
