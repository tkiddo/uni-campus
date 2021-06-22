const debounce = {
  install: function (Vue, options) {
    let targetId = null
    let timerId = null
    let flag = true
    Vue.prototype.debounce = function (event, fn, wait = 1000, isImmediate = true) {
      if (targetId !== event.currentTarget.id) {
        clearTimeout(timerId)
        flag = true
      }
      targetId = event.currentTarget.id
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
