# 链表

JS 中 primitive 类型是按值传递，而 Object 则是按引用传递。JS 中变量像是一个标签贴在一个内存地址上，下面这段代码用来实现从链表的头插入新节点，如果 `head.next` 是一个类似 C 语言的指针那么这样写完全没问题。但 JS 没有指针，这样写的意思是创建一个新变量贴在 `head.next` 变量贴在的内存地址上，执行 `firstNode = newNode` 则是将 firstNode 这个标签撕下来再贴在 newNode 的内存地址上。并不能起到连接两个链表节点的作用。

 ```javascript
insertToHead (item) {
   let newNode = item instanceof ListNode ? item : new ListNode(item)
   let firstNode = this.head.next
   if (firstNode === null) {
     firstNode = newNode
   } else {
     newNode.next = firstNode
     firstNode = newNode
   }
 }
```

JS 中只能像下面这样直接使用原变量 `this.head.next`，而不是使用任何中间变量来传递引用。

```javascript
insertToHead (item) {
  let newNode = item instanceof ListNode ? item : new ListNode(item)
  if (this.head.next === null) {
    this.head.next = newNode
  } else {
    newNode.next = this.head.next
    this.head.next = newNode
  }
}
```

写链表代码的时候需要留意边界条件的处理，经常需要考虑下面几种情况。

- 如果链表为空时
- 如果链表只包含一个节点
- 如果链表只包含两个节点
- 代码逻辑在处理头结点和尾结点的时候

## 常见算法

### 反转链表

反转链表非常适合画图去理解，原理就是从头开始一个一个反转节点间的指向。在一次循环中主要做两件事，一是将箭头反转，二是移动指针。而反转之前需要暂存一个指针，不然就会丢失下一个节点。所以一共需要3个指针。

时间复杂度为O(n)。

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
  let prev = null
  let curr = head
  
  while (curr !== null) {
    let temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }

  return prev
};
```

### 链表环路检测

最直接的思路就是遍历链表，并且把每一个遍历过的节点保存下来，每次遍历的时候检测是否是之前走过的节点，如果是则说明有环；如果一直遍历到链表的最后一个元素，都没有相同的，则说明无环。这样的算法时间复杂度为O(n^2)。

另一种比较有技巧的算法是使用两个指针，慢指针每次往前走一步，快指针每次往前走两步，如果有环，它们最终必定相遇。因为假设链表有 N 个节点，环上有 M 个节点，快指针每遍历一次都会比慢指针多走一步，由于这是个无限循环，快指针比慢指针可以多走任意步数，而快慢指针相遇的时刻，快指针必然比慢指针多走 X 步。这个 X 是终究能够取到的数字。

相遇之后，假设头节点距离环路入口节点为 `a` 个节点，快慢指针交汇点距离环路入口为 `b` 个节点，这时快指针已经走了 `2(a + b)` 个节点，画图可知让慢指针再走 `a` 个节点就可以到达环路入口，所以这时另快指针指向头节点，两个指针每次都走一步，直到相遇。

里外加一起差不多一共循环了 N 次，所以时间复杂度为O(n)。

### 合并两个有序链表

又一个经典的链表练习题。这里引入一个哨兵（用的 X 战警里的那个哨兵）的节点从头开始由小到大将两个链表串起来。复杂度为O(n)。

代码如下：

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
  const sentinel = new ListNode('sentinel')
  let currentNode = sentinel

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      currentNode.next = l1
      l1 = l1.next
    } else {
      currentNode.next = l2
      l2 = l2.next
    }

    currentNode = currentNode.next
  }

  if (l1 !== null) {
    currentNode.next = l1
  }

  if (l2 !== null) {
    currentNode.next = l2
  }
  return sentinel.next
};
```

### 寻找链表的中间节点

又一次使用快慢指针，fast 走的刚好是 slow 的 2 倍。这里如果是偶数个节点，那么会有两个中间节点，这里返回第二个。

时间复杂度为O(n)。

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let slow = head
  let fast = head

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
};
```

### 删除链表的倒数第 N 个结点

先把代码放这里，这题不好理解。

```javascript
var removeNthFromEnd = function(head, n) {
  let fast = head
  let i = 1
  while (fast !== null && i < n) {
    fast = fast.next
    i++
  }

  // 假设一共有 x 个节点，fast === null 需要执行上面的循环 x 次
  // 那么 n 至少为 x + 1
  if (fast === null) {
    return head
  }

  let slow = head
  let prev = null
  while (fast.next !== null) {
    fast = fast.next
    prev = slow
    slow = slow.next
  }

  if (prev === null) {
    // fast.next === null, 上面的循环一次没执行。
    // 设 fast 走了 y 步，所以链表的长度为 y + 1
    // 而 n 也为 y + 1，所以移除第一个元素即可
    head = head.next
  } else {
    prev.next = prev.next.next
  }

  return head
};
```
