import axios from 'axios'
import { saveAs } from 'file-saver'
import cache from './cache'

// get 请求参数转换
function tansParams(params) {
  let result = ''
  for (const propName of Object.keys(params)) {
    const value = params[propName]
    const part = `${encodeURIComponent(propName)}=`
    if (value !== null && value !== '' && typeof (value) !== 'undefined') {
      if (typeof value === 'object') {
        for (const key of Object.keys(value)) {
          if (value[key] !== null && value[key] !== '' && typeof (value[key]) !== 'undefined') {
            const params = `${propName}[${key}]`
            const subPart = `${encodeURIComponent(params)}=`
            result += `${subPart + encodeURIComponent(value[key])}&`
          }
        }
      }
      else {
        result += `${part + encodeURIComponent(value)}&`
      }
    }
  }
  return result
}

// axios基础配置
axios.defaults.headers['Content-Type'] = 'application/jsoncharset=utf-8'
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 10000,
})

// 请求拦截器
service.interceptors.request.use((config) => {
  const isRepeatSubmit = (config.headers || {}).repeatSubmit === false
  if (config.method === 'get' && config.params) {
    let url = `${config.url}?${tansParams(config.params)}`
    url = url.slice(0, -1)
    config.params = {}
    config.url = url
  }
  if (!isRepeatSubmit && (config.method === 'post' || config.method === 'put')) {
    const requestObj = {
      url: config.url,
      data: typeof config.data === 'object' ? JSON.stringify(config.data) : config.data,
      time: new Date().getTime(),
    }
    const requestSize = Object.keys(JSON.stringify(requestObj)).length // 请求数据大小
    const limitSize = 5 * 1024 * 1024 // 限制存放数据5M
    if (requestSize >= limitSize) {
      console.warn(`[${config.url}]: ` + '请求数据大小超出允许的5M限制，无法进行防重复提交验证。')
      return config
    }
    const sessionObj = cache.session.getJSON('sessionObj')
    if (sessionObj === undefined || sessionObj === null || sessionObj === '') {
      cache.session.setJSON('sessionObj', requestObj)
    }
    else {
      const s_url = sessionObj.url // 请求地址
      const s_data = sessionObj.data // 请求数据
      const s_time = sessionObj.time // 请求时间
      const interval = 1000 // 间隔时间(ms)，小于此时间视为重复提交
      if (s_data === requestObj.data && requestObj.time - s_time < interval && s_url === requestObj.url) {
        const message = '数据正在处理，请勿重复提交'
        return Promise.reject(new Error(message))
      }
      else {
        cache.session.setJSON('sessionObj', requestObj)
      }
    }
  }
  return config
}, (error) => {
  console.error(error)
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((res) => {
  const code = res.data.code || 200
  if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer')
    return res.data
  if (code === 200)
    return Promise.resolve(res.data)
  else
    return Promise.reject(res)
}, (error) => {
  console.error(error)
  let { message } = error
  if (message === 'Network Error')
    message = '后端接口连接异常'
  else if (message.includes('timeout'))
    message = '系统接口请求超时'
  else if (message.includes('Request failed with status code'))
    message = `系统接口${message.substr(message.length - 3)}异常`
  return Promise.reject(error)
})

// 通用下载方法
let downloadLoadingInstance
export function download(url, params, filename, config) {
  return service.post(url, params, {
    transformRequest: [(params) => { return tansParams(params) }],
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    responseType: 'blob',
    ...config,
  }).then(async (data) => {
    const isBlob = data.type !== 'application/json'
    if (isBlob) {
      const blob = new Blob([data])
      saveAs(blob, filename)
    }
    else {
      const resText = await data.text()
      const rspObj = JSON.parse(resText)
      console.error(rspObj)
    }
    downloadLoadingInstance.close()
  }).catch((r) => {
    console.error(r)
    downloadLoadingInstance.close()
  })
}

export default service
