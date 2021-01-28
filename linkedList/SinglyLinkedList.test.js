const { it, describe } = require('mocha')
const { LinkedList } = require('./SinglyLinkedList')
const expect = require('expect')

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
})
