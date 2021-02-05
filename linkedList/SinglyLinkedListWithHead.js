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
    // 哨兵节点，带头链表。头节点不存储数据，始终指向链表第一个节点
    this.head = new ListNode('head')
  }

  findByValue (item) {
    let curr = this.head.next
    while (curr !== null && curr.value !== item) {
      curr = curr.next
    }

    return curr === null ? -1 : curr
  }

  findByIndex (index) {
    let curr = this.head.next
    let position = 0
    while (curr !== null && position !== index) {
      curr = curr.next
      position++
    }

    return curr === null ? -1 : curr
  }

  insertToHead (item) {
    const newNode = item instanceof ListNode ? item : new ListNode(item)
    newNode.next = this.head.next
    this.head.next = newNode
  }

  insertTail (value) {
    const newNode = new ListNode(value)

    let curr = this.head
    while (curr.next !== null) {
      curr = curr.next
    }

    newNode.next = curr.next
    curr.next = newNode
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

    const newNode = item instanceof ListNode ? item : new ListNode(item)
    let curr = this.head
    while (curr !== null && curr.next !== anchor) {
      curr = curr.next
    }

    newNode.next = curr.next
    curr.next = newNode
  }

  deleteByNode (node) {
    if (!(node instanceof ListNode) || this.head.next === null) {
      return -1
    }

    let curr = this.head
    while (curr !== null && curr.next !== node) {
      curr = curr.next
    }

    if (curr === null) {
      // 没找着
      return -1
    }

    curr.next = curr.next.next
  }

  *[Symbol.iterator]() {
    let curr = this.head.next
    while (curr !== null) {
      yield curr
      curr = curr.next
    }
  }
}

module.exports = {
  LinkedList,
  ListNode
}
