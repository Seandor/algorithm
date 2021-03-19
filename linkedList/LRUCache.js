const { DoubleLinkedList, DoubleListNode } = require('./DoubleLinkedList')
class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor (capacity) {
    if (capacity <= 0) {
      throw new Error('Capacity must be greater than 0')
    }
    this.map = new Map()
    this.cache = new DoubleLinkedList()
    this.capacity = capacity
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get (key) {
    if (!this.map.has(key)) {
      return -1
    }

    this.makeRecent(key)
    return this.map.get(key).data.val
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put (key, value) {
    if (this.map.has(key)) {
      this.deleteKey(key)
      this.addRecent(key, value)
      return
    }

    if (this.capacity === this.cache.size()) {
      this.removeLeastRecentlyUsed()
    }

    this.addRecent(key, value)
  }

  // 将某个key 提升为最近使用的
  makeRecent (key) {
    const node = this.map.get(key)
    this.cache.remove(node)
    this.cache.insertTail(node)
  }

  // 添加最近使用的元素
  addRecent (key, val) {
    const node = new DoubleListNode({ key, val })
    this.cache.insertTail(node)
    this.map.set(key, node)
  }

  // 删除某个 key
  deleteKey (key) {
    const node = this.map.get(key)
    this.cache.remove(node)
    this.map.delete(key)
  }

  // 删除最久未使用的元素
  removeLeastRecentlyUsed () {
    const node = this.cache.removeFirst()
    const key = node.data.key
    this.map.delete(key)
  }
}

module.exports = {
  LRUCache
}
