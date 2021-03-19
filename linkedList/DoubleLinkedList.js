class DoubleListNode {
  constructor (data) {
    this.data = data
    this.prev = null
    this.next = null
  }
}

class DoubleLinkedList {
  constructor () {
    this.head = new DoubleListNode(0)
    this.tail = new DoubleListNode(0)
    this.head.next = this.tail
    this.tail.prev = this.head
    this.length = 0
  }

  insertTail (node) {
    node.prev = this.tail.prev
    node.next = this.tail
    this.tail.prev.next = node
    this.tail.prev = node
    this.length += 1
  }

  remove (node) {
    node.prev.next = node.next
    node.next.prev = node.prev
    this.length -= 1
  }

  removeFirst () {
    if (this.head.next === this.tail) {
      return null
    }
    const first = this.head.next
    this.remove(first)
    return first
  }

  size () {
    return this.length
  }
}

module.exports = {
  DoubleListNode,
  DoubleLinkedList
}
