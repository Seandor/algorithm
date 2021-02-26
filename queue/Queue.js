/*
 * 基于数组实现的队列
 */

class Queue {
  constructor () {
    this.items = []
  }

  enqueue (item) {
    this.items.push(item)
  }

  dequeue () {
    const result = this.items.shift()
    return typeof result !== 'undefined' ? result : -1
  }

  // 返回队首元素
  front () {
    return this.items[0]
  }

  size () {
    return this.items.length
  }

  isEmpty () {
    return this.items.length === 0
  }

  clear () {
    this.items = []
  }
}

module.exports = {
  Queue
}
