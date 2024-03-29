import Queue from '../queue/Queue.js'

/**
 * 1）二叉树的创建，遍历，常见算法
 * 2）二叉树节点中存储的是int类型的数据；
 */

export const TreeNode = class {
  constructor (val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

export const BinaryTree = class {
  constructor () {
    this.root = null
  }

  static nullSymbol = '#'

  static preOrderCreate (data = []) {
    if (data.length === 0) {
      return null
    }

    const rootVal = data.shift()
    if (rootVal === this.nullSymbol) {
      return null
    }
    const root = new TreeNode(rootVal)

    root.left = this.preOrderCreate(data)
    root.right = this.preOrderCreate(data)

    return root
  }

  serialize () {
    const result = []
    BinaryTree.preOrderSerialize(this.root, result)
    return result.toString()
  }

  static preOrderSerialize (root, result = []) {
    if (root === null) {
      return result.push(BinaryTree.nullSymbol)
    }

    result.push(root.val)

    this.preOrderSerialize(root.left, result)
    this.preOrderSerialize(root.right, result)
  }

  static maxDepth (root) {
    if (root === null) {
      return 0
    }
    return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right))
  }

  /**
   * @param {TreeNode} root
   * @return {number[][]}
   */
  static levelOrderTraverse (root) {
    const allLevels = []
    if (root === null) {
      return allLevels
    }

    const queue = new Queue()
    queue.enqueue(root)

    while (!queue.isEmpty()) {
      const currentLevelNodeCount = queue.size()
      let currentLevel = []
      for (let i = 0; i < currentLevelNodeCount; i++) {
        const node = queue.dequeue()
        currentLevel.push(node.val)

        if (node.left) {
          queue.enqueue(node.left)
        }

        if (node.right) {
          queue.enqueue(node.right)
        }
      }
      allLevels.push(currentLevel)
    }

    return allLevels
  }

}
