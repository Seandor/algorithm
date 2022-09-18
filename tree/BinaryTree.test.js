import { it, describe } from 'mocha'
import expect from 'expect'

import { BinaryTree } from './BinaryTree.js'

describe('BinaryTree', function () {
  describe('serialize & preOrderCreate', function () {
    it('should serialize a binary tree', function () {
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

  describe('level order traverse', function () {
    it('should traverse the tree by level order', () => {
      const tree = new BinaryTree()
      const data = [3, 9, '#', '#', 20, 15, '#', '#', 7, '#', '#']
      tree.root = BinaryTree.preOrderCreate(data)
      const expected = [[3], [9, 20], [15, 7]]

      expect(BinaryTree.levelOrderTraverse(tree.root)).toEqual(expected)
    })
  })
})
