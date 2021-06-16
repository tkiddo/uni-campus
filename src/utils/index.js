//防抖
export function debounce(fn, wait = 1000, isImmediate = true) {
  let timerId = null
  let flag = true
  if (isImmediate) {
    return function () {
      clearTimeout(timerId)
      if (flag) {
        fn.apply(this, arguments)
        flag = false
      }
      timerId = setTimeout(() => {
        flag = true
      }, wait)
    }
  }
  return function () {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}
