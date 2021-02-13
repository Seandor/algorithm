class SortAlgo {
  constructor () {
  }

  static bubbleSort (nums) {
    const len = nums.length
    if (len <= 1) {
      return
    }

    for (let i = 0; i < len; i++) {
      let isDataExchange = false
      for (let j = 0; j < len - i - 1; j++) {
        if (nums[j] > nums[j + 1]) {
          const temp = nums[j]
          nums[j] = nums[j + 1]
          nums[j + 1] = temp
          isDataExchange = true
        }
      }
      if (!isDataExchange) {
        break
      }
    }
  }

  static insertionSort (nums) {
    const len = nums.length
    if (len <= 1) {
      return
    }

    for (let i = 1; i < len; i++) {
      const value = nums[i]
      let j = i - 1
      for (; j >= 0; j--) {
        // 搬移数据
        if (nums[j] > value) {
          nums[j + 1] = nums[j]
        } else {
          break
        }
      }

      // 插入数据
      nums[j + 1] = value
    }
  }

  static selectionSort (nums) {
    const len = nums.length
    if (len <= 1) {
      return
    }

    for (let i = 0; i < len - 1; i++) {
      let minIndex = i
      let j = i + 1
      while (j < len) {
        if (nums[j] < nums[minIndex]) {
          minIndex = j
        }
        j++
      }

      const temp = nums[i]
      nums[i] = nums[minIndex]
      nums[minIndex] = temp
    }
  }
}

module.exports = {
  SortAlgo
}
