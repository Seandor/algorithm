const { Queue } = require('../queue/Queue')

/*
 * 无向图，邻接表实现
 */
class Graph {
  constructor (vertices = []) {
    this.vertices = vertices
    this.edges = new Map()
    for (let i = 0; i < vertices.length; i++) {
      this.edges.set(vertices[i], [])
    }
  }

  addEdge = function (v1, v2) {
    this.edges.get(v1).push(v2)
    this.edges.get(v2).push(v1)
  }

  toString = function () {
    let result = ''

    for (let i = 0; i < this.vertices.length; i++) {
      result += `${this.vertices[i]} -> `
      const vEdges = this.edges.get(this.vertices[i])
      for (const edge of vEdges) {
        result += `${edge} `
      }
      result += '\n'
    }

    return result
  }

  // 广度优先搜索
  bfs (startV, callback) {
    const visited = new Map()
    const queue = new Queue()

    queue.enqueue(startV)
    visited.set(startV, true)

    while (!queue.isEmpty()) {
      const v = queue.dequeue()
      const vEdges = this.edges.get(v)

      for (const vEdge of vEdges) {
        if (!visited.get(vEdge)) {
          queue.enqueue(vEdge)
          visited.set(vEdge, true)
        }
      }

      callback(v)
    }
  }

  // 深度优先搜索
  dfs (startV, callback) {
    const visited = new Map()
    this.recurDfs(startV, visited, callback)
  }

  recurDfs (v, visited, callback) {
    visited.set(v, true)
    callback(v)

    const vEdges = this.edges.get(v)
    for (const vEdge of vEdges) {
      if (!visited.get(vEdge)) {
        this.recurDfs(vEdge, visited, callback)
      }
    }
  }

}

module.exports = {
  Graph
}
