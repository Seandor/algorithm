import { it, describe } from 'mocha'
import expect from 'expect'

import Graph from './Graph.js'

describe('Graph', () => {
  describe('bfs', () => {
    it('should traverse the graph using breadth-first-search', () => {
      const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'G', 'H', 'I']
      const graph = new Graph(myVertices)
      graph.addEdge('A', 'B')
      graph.addEdge('A', 'C')
      graph.addEdge('A', 'D')
      graph.addEdge('C', 'D')
      graph.addEdge('C', 'G')
      graph.addEdge('D', 'G')
      graph.addEdge('D', 'H')
      graph.addEdge('B', 'E')
      graph.addEdge('B', 'F')
      graph.addEdge('E', 'I')

      let result = ''
      graph.bfs('A', function (v) {
        result += v + ' '
      })

      expect(result).toBe('A B C D E F G H I ')
    })

  })
  describe('dfs', () => {
    it('should traverse the graph using depth-first-search', () => {
      const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'G', 'H', 'I']
      const graph = new Graph(myVertices)
      graph.addEdge('A', 'B')
      graph.addEdge('A', 'C')
      graph.addEdge('A', 'D')
      graph.addEdge('C', 'D')
      graph.addEdge('C', 'G')
      graph.addEdge('D', 'G')
      graph.addEdge('D', 'H')
      graph.addEdge('B', 'E')
      graph.addEdge('B', 'F')
      graph.addEdge('E', 'I')

      let result = ''
      graph.dfs('A', function (v) {
        result += v + ' '
      })

      expect(result).toBe('A B E I F C D G H ')
    })
    
  })
  
})
