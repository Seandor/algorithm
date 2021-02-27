const { it, describe } = require('mocha')
const expect = require('expect')
const { DoubleListNode, DoubleLinkedList } = require('./DoubleLinkedList')

describe('DoubleLinkedList', () => {
  describe('insertTail', () => {
    it('should insert to an empty double linked list', () => {
      const list = new DoubleLinkedList()
      const node = new DoubleListNode(1)
      list.insertTail(node)
      expect(list.size()).toBe(1)
    })

    it('should insert tail', () => {
      const list = new DoubleLinkedList()
      const node1 = new DoubleListNode(1)
      const node2 = new DoubleListNode(2)
      const node3 = new DoubleListNode(3)
      const node4 = new DoubleListNode(4)
      list.insertTail(node1)
      list.insertTail(node2)
      list.insertTail(node3)
      list.insertTail(node4)
      expect(list.size()).toBe(4)
    })
    
  })

  describe('remove', () => {
    it('should delete first node', () => {
      const list = new DoubleLinkedList()
      const node1 = new DoubleListNode(1)
      const node2 = new DoubleListNode(2)
      const node3 = new DoubleListNode(3)
      const node4 = new DoubleListNode(4)
      list.insertTail(node1)
      list.insertTail(node2)
      list.insertTail(node3)
      list.insertTail(node4)
      list.remove(node1)
      expect(list.size()).toBe(3)
    })
    
  })

})
