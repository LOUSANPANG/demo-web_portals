// 字符串截断
interface typeLen {
  pcStrLen: number
  mobileStrLen: number
}
export function strSplice(targetStr: string, targetLen: typeLen) {
  const { width } = useWindowSize()
  if (width.value >= 1280)
    return `${targetStr.slice(0, targetLen.pcStrLen)}...`
  else
    return `${targetStr.slice(0, targetLen.mobileStrLen)}...`
}
