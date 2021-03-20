/*
在有向图中，从某个节点和每个转向处开始出发，沿着图的有向边走。如果到达的节点是终点（即它没有连出的有向边），则停止。

如果从起始节点出发，最后必然能走到终点，就认为起始节点是 最终安全 的。更具体地说，对于最终安全的起始节点而言，存在一个自然数 k ，无论选择沿哪条有向边行走 ，走了不到 k 步后必能停止在一个终点上。

返回一个由图中所有最终安全的起始节点组成的数组作为答案。答案数组中的元素应当按 升序 排列。

该有向图有 n 个节点，按 0 到 n - 1 编号，其中 n 是`graph`的节点数。图以下述形式给出：graph[i] 是编号 j 节点的一个列表，满足 (i, j) 是图的一条有向边。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-eventual-safe-states
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} graph
 * @return {number[]}
 */
const eventualSafeNodes = function (graph) {
  const result = []
  const color = []

  for (let i = 0; i < graph.length; i++) {
    if (isSafeNode(graph, color, i)) {
      result.push(i)
    }
  }

  return result
}

// colors: WHITE 0, GRAY 1, BLACK 2;
function isSafeNode (graph, color, node) {
  if (color[node] > 0) {
    return color[node] === 2
  }
  color[node] = 1

  for (let edge of graph[node]) {
    if (color[edge] === 2) {
      continue
    }
    if (color[edge] === 1 || !isSafeNode(graph, color, edge)) {
      return false
    }
  }

  color[node] = 2
  return true
}

module.exports = {
  eventualSafeNodes
}
