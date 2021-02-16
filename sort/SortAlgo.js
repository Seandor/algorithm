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

  static mergeSort (nums) {
    function mergeSortInternal (nums, start, end) {
      if (start >= end) {
        return
      }

      const middle = start + parseInt((end - start) / 2)
      mergeSortInternal(nums, start, middle)
      mergeSortInternal(nums, middle + 1, end)

      mergeBySentinel(nums, start, middle, end)
    }

    function merge (nums, start, middle, end) {
      let i = start
      let j = middle + 1
      let k = 0
      const temp = []
      while (i <= middle && j <= end) {
        if (nums[i] <= nums[j]) {
          temp[k] = nums[i]
          i++
        } else {
          temp[k] = nums[j]
          j++
        }
        k++
      }

      // 判断哪个子数组中有剩余数据
      let _start = i
      let _end = middle
      if (j <= end) {
        _start = j
        _end = end
      }

      while (_start <= _end) {
        temp[k] = nums[_start]
        _start++
        k++
      }

      for (let i = 0; i <= end - start; i++) {
        nums[start + i] = temp[i]
      }
    }

    function mergeBySentinel (nums, start, middle, end) {
      const leftArr = nums.slice(start, middle + 1)
      const rightArr = nums.slice(middle + 1, end + 1)

      leftArr.push(Number.MAX_SAFE_INTEGER)
      rightArr.push(Number.MAX_SAFE_INTEGER)

      let i = 0
      let j = 0
      let k = start
      while (k <= end) {
        if (leftArr[i] <= rightArr[j]) {
          nums[k] = leftArr[i]
          i++
        } else {
          nums[k] = rightArr[j]
          j++
        }
        k++
      }
    }

    const len = nums.length
    mergeSortInternal(nums, 0, len - 1)
  }

  static quickSort (nums) {
    function quickSortInternal (nums, start, end) {
      if (start >= end) {
        return
      }

      const middle = partitionSimple(nums, start, end)
      quickSortInternal(nums, start, middle - 1)
      quickSortInternal(nums, middle + 1, end)
    }

    // 原地排序的分区函数，详见 quickSort1.jpg
    function partition (nums, start, end) {
      const pivot = nums[end]
      let i = start
      let j = start

      while (j < end) {
        if (nums[j] < pivot) {
          if (i === j) {
            i++
          } else {
            const temp = nums[i]
            nums[i++] = nums[j]
            nums[j] = temp
          }
        }
        j++
      }

      const temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp

      return i
    }

    // 自己写的效率较低但是思路简单的分区函数
    function partitionSimple (nums, start, end) {
      const pivot = nums[end]
      const left = []
      const right = []

      for (let i = start; i < end; i++) {
        if (nums[i] < pivot) {
          left.push(nums[i])
        } else {
          right.push(nums[i])
        }
      }

      left.push(pivot)
      const temp = left.concat(right)

      let i = start
      for (const num of temp) {
        nums[i] = num
        i++
      }

      return start + left.length - 1
    }

    const len = nums.length
    quickSortInternal(nums, 0, len - 1)
  }
}

module.exports = {
  SortAlgo
}
