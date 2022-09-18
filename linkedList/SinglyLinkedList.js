/**
 * 1）单链表的插入、删除、查找操作；
 * 2）链表中存储的是int类型的数据；
 */

export class ListNode {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

export class LinkedList {
  constructor () {
    // 无头链表，头指针指向第一个节点
    this.head = null
  }

  findByValue (item) {
    let curr = this.head
    while (curr !== null && curr.value !== item) {
      curr = curr.next
    }

    return curr === null ? -1 : curr
  }

  findByIndex (index) {
    let curr = this.head
    let position = 0
    while (curr !== null && position !== index) {
      curr = curr.next
      position++
    }

    return curr === null ? -1 : curr
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
      let curr = this.head
      while (curr.next !== null) {
        curr = curr.next
      }

      // newNode.next = curr.next
      curr.next = newNode
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
    let curr = this.head
    while (curr !== null && curr.next !== anchor) {
      curr = curr.next
    }

    newNode.next = curr.next
    curr.next = newNode
  }

  deleteByNode (node) {
    if (!(node instanceof ListNode) || this.head === null) {
      return -1
    }

    if (node === this.head) {
      this.head = this.head.next
      return
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

  * [Symbol.iterator] () {
    let curr = this.head
    while (curr !== null) {
      yield curr
      curr = curr.next
    }
  }
}

