<script setup lang="ts">
defineOptions({ name: 'NotFindPage' })

const router = useRouter()
function handleBack() {
  router.push('/')
}
</script>

<template>
  <div h-full w-full flex items-center justify-center overflow-hidden bg-gray-900 text-gray-300>
    <div
      h-96 w-96 flex flex-col justify-around rounded-3xl bg-gray-800 p-6 text-center font-bold tracking-wide shadow backdrop-blur-sm
      border="~ white solid"
    >
      <h1 text-8xl>
        4 ▢ 4
      </h1>
      <div mb-6 text-2xl>
        Oops! page not found
      </div>
      <div
        class="btn"
        h-11 flex cursor-pointer items-center justify-center rounded-2xl font-semibold hover:bg-green-200
        border="2 gray-600 solid"
        text="base gray-300 hover:gray-700"
        @click="handleBack"
      >
        Back To Home
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes hue_rotate {
  0% {
    filter: hue-rotate(360deg);
  }
}
.btn {
  transition: 0.2s linear;
  animation: hue_rotate 60s linear both infinite;
}
</style>
