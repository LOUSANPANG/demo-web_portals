<script lang="ts" setup>
const mapInfo = ref({
  locationUrl: '/images/contact/location.png',
  locationMobileUrl: '/images/contact/location_mobile.png',
  address: '140 meters east of Beiwai Ring Road and Jing Er Road, Jinan District, Jinan City, Shandong Province',
  email: 'HR@CNDINGLI.COM',
  phone: '18660191511',
})
const submitInfo = ref({
  title: 'Online Message',
  subTitle: 'You can leave your opinions and suggestions here, and we will reply in time.',
  formBtnText: 'Submit',
  form: [
    { label: 'Name', value: '' },
    { label: 'Email', value: '' },
    { label: 'Phone', value: '' },
    { label: 'Message', value: '' },
  ],
})
</script>

<template>
  <div class="min-h-100% w-full flex flex-wrap items-center justify-between shadow-orange-50 shadow-xl">
    <!-- map -->
    <div class="relative box-border overflow-hidden rounded-lg bg-white px-2 py-4 mobile:h-50vh mobile:w-full pc:h-75vh pc:w-2/3 mobile:pr-2 pc:pr-4">
      <img class="h-full w-full pc:block mobile:hidden" :src="mapInfo.locationUrl">
      <img class="h-full w-full mobile:block pc:hidden" :src="mapInfo.locationMobileUrl">
      <div class="absolute bottom-6 left-4 z-10 w-90% flex flex-wrap rounded-lg bg-white shadow shadow-gray-50 mobile:py-2 pc:py-4">
        <div class="mobile:mb-4 mobile:w-full pc:w-1/2 mobile:px-3 pc:px-6">
          <div class="mb-1 text-gray-900 font-semibold tracking-widest mobile:text-xs pc:text-sm">
            ADDRESS
          </div>
          <div class="text-gray-900 mobile:text-sm pc:text-base">
            {{ mapInfo.address }}
          </div>
        </div>
        <div class="mobile:w-full pc:w-1/2 mobile:px-3 pc:px-6">
          <div class="mb-1 text-gray-900 font-semibold tracking-widest mobile:text-xs pc:text-sm">
            EMAIL
          </div>
          <div class="mb-4 text-orange-500 leading-relaxed mobile:text-sm pc:text-base">
            {{ mapInfo.email }}
          </div>
          <div class="mb-1 text-gray-900 font-semibold tracking-widest mobile:text-xs pc:text-sm">
            PHONE
          </div>
          <div class="text-orange-500 leading-relaxed mobile:text-sm pc:text-base">
            {{ mapInfo.phone }}
          </div>
        </div>
      </div>
    </div>

    <!-- form -->
    <div class="box-border flex flex-col overflow-y-auto bg-white py-4 mobile:w-full pc:h-75vh pc:w-1/3 mobile:px-2 pc:px-4">
      <h2 class="mb-1 text-gray-900 font-medium mobile:text-base pc:text-lg">
        {{ submitInfo.title }}
      </h2>
      <p class="text-gray-600 leading-relaxed mobile:mb-3 pc:mb-5 mobile:text-base pc:text-lg">
        {{ submitInfo.subTitle }}
      </p>
      <div class="relative mobile:mb-2 pc:mb-4">
        <label for="name" class="text-sm text-gray-600 leading-7">{{ submitInfo.form[0].label }}</label>
        <input id="name" type="text" name="name" class="w-full border border-gray-300 rounded bg-white px-3 py-1 text-base text-gray-700 leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-orange-500 focus:ring-2 focus:ring-orange-200">
      </div>
      <div class="relative mobile:mb-2 pc:mb-4">
        <label for="email" class="text-sm text-gray-600 leading-7">{{ submitInfo.form[1].label }}</label>
        <input id="email" type="email" name="email" class="w-full border border-gray-300 rounded bg-white px-3 py-1 text-base text-gray-700 leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-orange-500 focus:ring-2 focus:ring-orange-200">
      </div>
      <div class="relative mobile:mb-2 pc:mb-4">
        <label for="phone" class="text-sm text-gray-600 leading-7">{{ submitInfo.form[2].label }}</label>
        <input id="phone" type="text" name="phone" class="w-full border border-gray-300 rounded bg-white px-3 py-1 text-base text-gray-700 leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-orange-500 focus:ring-2 focus:ring-orange-200">
      </div>
      <div class="relative mobile:mb-2 pc:mb-4">
        <label for="message" class="text-sm text-gray-600 leading-7">{{ submitInfo.form[3].label }}</label>
        <textarea id="message" name="message" class="h-32 w-full resize-none border border-gray-300 rounded bg-white px-3 py-1 text-base text-gray-700 leading-6 outline-none transition-colors duration-200 ease-in-out focus:border-orange-500 focus:ring-2 focus:ring-orange-200" />
      </div>
      <button class="border-0 rounded bg-orange-500 px-6 py-2 text-lg text-white hover:bg-orange-600 focus:outline-none">
        {{ submitInfo.formBtnText }}
      </button>
    </div>
  </div>
</template>
