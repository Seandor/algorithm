import { it, describe } from 'mocha'
import expect from 'expect'

import { ListNode, LinkedList } from './SinglyLinkedList.js'

describe('LinkedList', function () {
  describe('findByValue', function () {
    it('should return -1 if list is empty', function () {
      const list = new LinkedList()
      expect(list.findByValue('ember')).toBe(-1)
    })

    it('should find list node by value', function () {
      const list = new LinkedList()
      list.insertTail(1)
      expect(list.findByValue(1).value).toBe(1)
      list.insertTail(2)
      expect(list.findByValue(2).value).toBe(2)
    })
  })

  describe('findByIndex', function () {
    it('should find list node by index', function () {
      const list = new LinkedList()
      list.insertTail(1)
      list.insertTail(2)
      list.insertTail(4)
      list.insertTail(3)

      expect(list.findByIndex(0).value).toBe(1)
      expect(list.findByIndex(1).value).toBe(2)
      expect(list.findByIndex(2).value).toBe(4)
      expect(list.findByIndex(3).value).toBe(3)
    })

    it('should return -1 if list is empty', function () {
      const list = new LinkedList()
      expect(list.findByIndex(2)).toBe(-1)
    })

    it('should return -1 if index is out of bounds', function () {
      const list = new LinkedList()
      list.insertTail(1)
      expect(list.findByIndex(2)).toBe(-1)
    })
  })

  describe('insertToHead', function () {
    it('should insert list node to head', function () {
      const list = new LinkedList()
      list.insertToHead(1)
      expect(list.findByIndex(0).value).toBe(1)
      list.insertToHead(2)
      expect(list.findByIndex(0).value).toBe(2)
      expect(list.findByIndex(1).value).toBe(1)

      const testNode = new ListNode(5)
      list.insertToHead(testNode)
      expect(list.findByIndex(0).value).toBe(5)
    })
  })

  describe('insertToTail', function () {
    it('should insert list node to tail', function () {
      const list = new LinkedList()
      list.insertTail(1)
      list.insertTail(2)
      list.insertTail(3)
      expect(list.findByIndex(0).value).toBe(1)
      expect(list.findByIndex(1).value).toBe(2)
      expect(list.findByIndex(2).value).toBe(3)
    })
  })

  describe('insertAfter', function () {
    it('should insert after a given node', function () {
      const list = new LinkedList()
      list.insertTail(1)
      list.insertTail(2)
      list.insertTail(3)

      const secondNode = list.findByIndex(1)

      list.insertAfter(secondNode, 4)

      expect(list.findByIndex(2).value).toBe(4)

      const testNode = new ListNode(5)

      list.insertAfter(secondNode, testNode)
      expect(list.findByIndex(2).value).toBe(5)
      expect(list.findByIndex(3).value).toBe(4)
    })

    it('should return -1 if anchor node is not a ListNode', function () {
      const list = new LinkedList()
      list.insertTail(1)
      expect(list.insertAfter(1, 3)).toBe(-1)
    })
  })

  describe('insertBefore', function () {
    it('should insert before a given node', function () {
      const list = new LinkedList()
      list.insertTail(1)
      list.insertTail(2)
      list.insertTail(3)

      const secondNode = list.findByIndex(1)

      list.insertBefore(secondNode, 4)

      expect(list.findByIndex(1).value).toBe(4)

      const testNode = new ListNode(5)

      list.insertBefore(secondNode, testNode)
      expect(list.findByIndex(2).value).toBe(5)
      expect(list.findByIndex(1).value).toBe(4)
    })

    it('should insert before if anchor is the head node', function () {
      const list = new LinkedList()
      list.insertTail(1)

      const firstNode = list.findByIndex(0)

      list.insertBefore(firstNode, 2)

      expect(list.findByIndex(0).value).toBe(2)
    })

    it('should return -1 if anchor is not a ListNode', function () {
      const list = new LinkedList()

      expect(list.insertBefore(0, 1)).toBe(-1)
    })
  })

  describe('deleteByNode', function () {
    it('should return -1 if argument is not a ListNode or it is an empty link list or cannot find the node', function () {
      const list = new LinkedList()

      expect(list.deleteByNode(1)).toBe(-1)

      const testNode = new ListNode(1)

      expect(list.deleteByNode(testNode)).toBe(-1)

      list.insertTail(1)

      expect(list.deleteByNode(testNode)).toBe(-1)
    })
  })

  it('should delete head node', function () {
    const list = new LinkedList()
    list.insertTail(1)

    const headNode = list.findByIndex(0)

    list.deleteByNode(headNode)

    expect(list.findByIndex(0)).toBe(-1)
  })

  it('should delete tail node', function () {
    const list = new LinkedList()
    list.insertTail(1)
    list.insertTail(2)

    const tailNode = list.findByIndex(1)

    list.deleteByNode(tailNode)

    expect(list.findByIndex(0).value).toBe(1)
    expect(list.findByIndex(1)).toBe(-1)
  })

  it('should delete non-head node', function () {
    const list = new LinkedList()
    list.insertTail(1)
    list.insertTail(2)
    list.insertTail(3)

    const secondNode = list.findByIndex(1)

    list.deleteByNode(secondNode)
    expect(list.findByIndex(1).value).toBe(3)
    expect(list.findByIndex(2)).toBe(-1)
  })

  describe('*[Symbol.iterator]', function () {
    it('should be able to iterator a LinkList object', function () {
      const list = new LinkedList()
      const data = [1, 2, 3, 4]
      for (const number of data) {
        list.insertTail(number)
      }

      let i = 1
      for (const node of list) {
        expect(node.value).toBe(i)
        i++
      }
    })
  })
})
