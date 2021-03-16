const { it, describe } = require('mocha')
const { Solution } = require('./Solution')
const expect = require('expect')

describe('Solution', () => {

  describe('isEvaluableSheet', () => {
    it('should return true if the sheet is evaluable', () => {
      const test = [
        {
          key: 'AA00',
          value: '10'
        },
        {
          key: 'AA01',
          value: 'BB00 + BD01'
        },
        {
          key: 'BB00',
          value: '120'
        },
        {
          key: 'BD01',
          value: '20'
        }
      ]
      const result = Solution.isEvaluableSheet(test)
      expect(result).toBe(true)
    })

    it('should return false if the sheet is not evaluable', () => {
      const test = [
        {
          key: 'AA00',
          value: '10'
        },
        {
          key: 'BD02',
          value: 'BD03 + AA00'
        },
        {
          key: 'BD03',
          value: 'BD02'
        }
      ]
      const result = Solution.isEvaluableSheet(test)
      expect(result).toBe(false)
    })
    
  })
  
  describe('getCellReferences', () => {
    it('should extract cell id from a string', () => {
      const test = 'AA00 + BB09 - CC09'
      const result = Solution.getCellReferences(test)
      expect(result.length).toBe(3)
    })
    
  })
  
})
