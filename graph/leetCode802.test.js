import { it, describe } from 'mocha'
import expect from 'expect'

import { eventualSafeNodes } from './leetCode802.js'

describe('leetCode802', () => {
  it('should return eventual safe node', () => {
    const input = [[1, 2], [2, 3], [5], [0], [5], [], []]
    const result = eventualSafeNodes(input)
    expect(result).toEqual([2, 4, 5, 6])

    const input2 = [[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []]
    const result2 = eventualSafeNodes(input2)
    expect(result2).toEqual([4])
  })
  
})
