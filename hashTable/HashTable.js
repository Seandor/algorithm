class HashTable {
  static LOAD_FACTOR = 0.75

  constructor () {
    this.table = []
    this.use = 0
    // 限制数组长度 
    this.capacity = 7
  }

  // 哈希函数主要有两部分
  // 1. 将字符串转成一个较大的数字：hashCode
  // 2. 将大的数字压缩的数组大小范围内
  static hash (key, size) {
    function hashCode (str='') {
      let hash = 0
      if (str.length === 0) {
        return hash
      }

      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i)
        hash = ((hash << 5) - hash) + char
        hash = hash & hash // covert to 32bit integer
      }
      return hash
    }
    return hashCode(key) % size
  }

  // 插入和修改
  put (key, value) {
    // 1. 根据 key 获取索引值
    // 2. 根据索引值取出 bucket
    //    1）如果桶不存在，创建桶并放在该索引位置
    // 3. 遍历桶内元素，如果 key 已经存在则修改 value；否则插入数据
    const index = HashTable.hash(key, this.capacity)

    let bucket = this.table[index]

    if (bucket === undefined) {
      bucket = []
      this.table[index] = bucket
    }

    for (const item of bucket) {
      if (item[0] === key) {
        item[1] = value
        return
      }
    }

    bucket.push([key, value])
    this.use += 1

    if (this.use > this.capacity * HashTable.LOAD_FACTOR) {
      this.resize(this.capacity * 2)
    }
  }

  get (key) {
    const index = HashTable.hash(key, this.capacity)

    const bucket = this.table[index]

    if (bucket === undefined) {
      return -1
    }

    for (const item of bucket) {
      if (item[0] === key) {
        return item[1]
      }
    }
    return -1
  }

  remove (key) {
    const index = HashTable.hash(key, this.capacity)

    const bucket = this.table[index]

    if (bucket === undefined) {
      return -1
    }

    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        bucket.splice(i, 1)
        this.use -= 1
        return tuple[1]
      }
    }
  }

  isEmpty () {
    return this.use === 0
  }

  size () {
    return this.use
  }

  resize (newCapacity) {
    let oldTable = this.table

    this.table = []
    this.use = 0
    this.capacity = newCapacity

    for (let i = 0; i < oldTable.length; i++) {
      const bucket = oldTable[i]
      if (bucket === undefined) {
        continue
      }

      for (const tuple of bucket) {
        this.put(tuple[0], tuple[1])
      }
    }
  }

}

module.exports = {
  HashTable
}