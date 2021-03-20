function debounce (fn, delay = 200) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.call(this, ...args)
    }, delay)
  }
}

module.exports = {
  debounce
}
