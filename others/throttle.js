function throttle (fn, interval = 200) {
  let flag = false
  return function (...args) {
    if (!flag) {
      flag = true
      setTimeout(() => {
        flag = false
        fn.call(this, ...args)
      }, interval)
    }
  }
}

module.exports = {
  throttle
}
