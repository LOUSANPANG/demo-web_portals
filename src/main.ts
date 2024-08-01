import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import AOS from 'aos'
import VueRoughNotation from 'vue-rough-notation'
import VueVideoPlayer from '@videojs-player/vue'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import 'aos/dist/aos.css'
import 'video.js/dist/video-js.css'
import 'animate.css'
import './styles/main.css'

const app = createApp(App)

AOS.init({ duration: 800 })
app.use(VueRoughNotation, {
  tag: 'div',
  multiline: true,
  color: '#f97316',
  animationDuration: 3000,
})
app.use(VueVideoPlayer)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})
app.use(router)

app.mount('#app')
