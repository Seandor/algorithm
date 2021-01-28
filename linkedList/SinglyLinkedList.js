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
      return
    }

    const newNode = item instanceof ListNode ? item : new ListNode(item)
    newNode.next = anchor.next
    anchor.next = newNode
  }

  insertBefore (anchor, item) {
    if (!(anchor instanceof ListNode)) {
      return
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
      return
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
      return
    }

    currentNode.next = currentNode.next.next
  }

  // 链表反转
  inverse () {
    // 空链表，或者只有一个节点，直接返回
    if (this.head === null || this.head.next === null) {
      return
    }

    let currentNode = null
    let nextNode = this.head

    // 这里最好自己画图，不然不好理解
    while (nextNode !== null) {
      const temp = nextNode.next
      nextNode.next = currentNode
      currentNode = nextNode
      nextNode = temp
    }

    this.head = currentNode
  }

  checkCircle () {
    let fast = this.head
    let slow = this.head

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next
      slow = slow.next

      if (slow === fast) {
        fast = this.head
        while (slow !== fast) {
          slow = slow.next
          fast = fast.next
        }

        return slow
      }
    }

    return null
  }

  printAll () {
    let currentNode = this.head
    while (currentNode !== null) {
      console.log(`${currentNode.value}`)
      currentNode = currentNode.next
    }
  }
}

// Test
const LList = new LinkedList()
const data = [1, 2]

for (let i = 0; i < data.length; i++) {
  // LList.insertToHead(data[i])
  LList.insertTail(data[i])
}

LList.printAll()

const firstNode = LList.findByIndex(0)

LList.deleteByNode(firstNode)

// LList.printAll()

// LList.inverse()

// LList.printAll()

/*
Test circle
*/
// const data = [1, 2]

// for (let i = 0; i < data.length; i++) {
//   LList.insertTail(data[i])
// }

// const secondNode = LList.findByIndex(1)
// const firstNode = LList.findByIndex(0)
// secondNode.next = firstNode

// const startNode = LList.checkCircle()
// console.log(startNode.value)

/** ************************************ */

module.exports = {
  LinkedList
}
