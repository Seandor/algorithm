const { TreeNode } = require('./BinaryTree')

class BinarySearchTree {
  constructor () {
    this.root = null
  }

  // 错误的代码，根据 BST 的定义，root 的整个左子树都要小于 root.val, 整个右子树都要大于 root.val
  static isValidBST_v0 (root) {
    if (root === null) {
      return true
    }
    if (root.left !== null && root.left.val >= root.val) {
      return false
    }
    if (root.right !== null && root.right.val <= root.val) {
      return false
    }
    return this.isValidBST_v0(root.left) && this.isValidBST_v0(root.right)
  }

  /*
   * 对于某一个节点root，他只能管得了自己的左右子节点，怎么把root的约束传递给左右子树呢？
   * 我们通过使用辅助函数，增加函数参数列表，在参数中携带额外信息，将这种约束传递给子树的所有节点。
   */
  static isValidBST (root) {
    function _isValidBST (root, min, max) {
      if (root === null) {
        return true
      }
      if (min !== null && root.val <= min.val) {
        return false
      }
      if (max !== null && root.val >= max.val) {
        return false
      }
      return this._isValidBST(root.left, min, root) &&
        this._isValidBST(root.right, root, max)
    }
    return _isValidBST(root, null, null)
  }

  static insertToBST (root, val) {
    if (root === null) {
      return new TreeNode(val)
    }

    // 这里先右后左的赋值顺序应该是必要的，待测试
    if (val > root.val) {
      root.right = this.insert(root.right, val)
    }
    if (val < root.val) {
      root.left = this.insert(root.left, val)
    }
    return root
  }

  static isInBST (root, target) {
    if (root == null) {
      return false
    }

    if (root.val === target) {
      return true
    }
    if (target < root.val) {
      return this.isInBST(root.left, target)
    }
    if (target > root.val) {
      return this.isInBST(root.right, target)
    }
  }

  insert (val) {
    BinarySearchTree.insertToBST(this.root, val)
  }

  find (target) {
    let curr = this.root
    while (curr !== null) {
      if (target < curr.val) {
        curr = curr.left
      } else if (target > curr.val) {
        curr = curr.right
      } else {
        return curr
      }
    }
    return null
  }
}

module.exports = {
  BinarySearchTree
}
