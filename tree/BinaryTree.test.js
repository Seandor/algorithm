const { it, describe } = require('mocha')
const { BinaryTree } = require('./BinaryTree')
const expect = require('expect')

describe('BinaryTree', function () {
  describe('serialize & preOrderCreate', function () {
    it('should serilize a binary tree', function () {
      const tree = new BinaryTree()
      const data = [1, 2, '#', '#', 3, 4, '#', '#', 5, '#', '#']
      tree.root = BinaryTree.preOrderCreate(data)

      expect(tree.serialize()).toBe('1,2,#,#,3,4,#,#,5,#,#')
    })

    it('should return null if data is an empty array', function () {
      const tree = new BinaryTree()
      const data = []
      tree.root = BinaryTree.preOrderCreate(data)

      expect(tree.root).toBe(null)
    })
  })

  describe('maxDepth', function () {
    it('should return the max depth of a binary tree', function () {
      const tree = new BinaryTree()
      const data = [1, 2, '#', '#', 3, 4, '#', '#', 5, '#', '#']
      tree.root = BinaryTree.preOrderCreate(data)

      expect(BinaryTree.maxDepth(tree.root)).toBe(3)
    })
  })
})
