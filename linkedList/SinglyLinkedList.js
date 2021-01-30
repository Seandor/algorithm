/**
 * 1）单链表的插入、删除、查找操作；
 * 2）链表中存储的是int类型的数据；
 */

class ListNode {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor () {
    // 无头链表，头指针指向第一个节点
    this.head = null
  }

  findByValue (item) {
    let currentNode = this.head
    while (currentNode !== null && currentNode.value !== item) {
      currentNode = currentNode.next
    }

    return currentNode === null ? -1 : currentNode
  }

  findByIndex (index) {
    let currentNode = this.head
    let position = 0
    while (currentNode !== null && position !== index) {
      currentNode = currentNode.next
      position++
    }

    return currentNode === null ? -1 : currentNode
  }

  insertToHead (item) {
    const newNode = item instanceof ListNode ? item : new ListNode(item)
    if (this.head === null) {
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
  }

  insertTail (value) {
    const newNode = new ListNode(value)

    if (this.head === null) {
      this.head = newNode
    } else {
      let currentNode = this.head
      while (currentNode.next !== null) {
        currentNode = currentNode.next
      }

      // newNode.next = currentNode.next
      currentNode.next = newNode
    }
  }

  insertAfter (anchor, item) {
    if (!(anchor instanceof ListNode)) {
      return -1
    }

    const newNode = item instanceof ListNode ? item : new ListNode(item)
    newNode.next = anchor.next
    anchor.next = newNode
  }

  insertBefore (anchor, item) {
    if (!(anchor instanceof ListNode)) {
      return -1
    }

    if (anchor === this.head) {
      this.insertToHead(item)
      return
    }

    const newNode = item instanceof ListNode ? item : new ListNode(item)
    let currentNode = this.head
    while (currentNode !== null && currentNode.next !== anchor) {
      currentNode = currentNode.next
    }

    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  deleteByNode (node) {
    if (!(node instanceof ListNode) || this.head === null) {
      return -1
    }

    if (node === this.head) {
      this.head = this.head.next
      return
    }

    let currentNode = this.head
    while (currentNode !== null && currentNode.next !== node) {
      currentNode = currentNode.next
    }

    if (currentNode === null) {
      // 没找着
      return -1
    }

    currentNode.next = currentNode.next.next
  }

  *[Symbol.iterator] () {
    let currentNode = this.head
    while (currentNode !== null) {
      yield currentNode
      currentNode = currentNode.next
    }
  }

}

module.exports = {
  LinkedList,
  ListNode
}
