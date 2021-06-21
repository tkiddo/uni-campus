const debounce = {
  install: function (Vue, options) {
    // let target = null
    let timerId = null
    let flag = true
    Vue.prototype.debounce = function (event, fn, wait = 1000, isImmediate = true) {
      // console.log(event)
      // if (target !== event.target) {
      //   clearTimeout(timerId)
      //   flag = true
      // }
      // target = event.target
      if (isImmediate) {
        clearTimeout(timerId)
        if (flag) {
          fn.apply(this, arguments)
          flag = false
        }
        timerId = setTimeout(() => {
          flag = true
        }, wait)
      } else {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
          fn.apply(this, arguments)
        }, wait)
      }
    }
  },
}

export default debounce
