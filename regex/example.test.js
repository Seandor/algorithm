import { it, describe } from 'mocha'
import expect from 'expect'

describe('Regular Expression examples', () => {
  describe('meta character', () => {
    describe('\b: word boundary', () => {
      it('should match a word', () => {
        const testStr = 'Hi, history, his, hi'
        const REGEX = /\bhi\b/g
        const result = testStr.match(REGEX)
        expect(result.length).toBe(1)
        expect(result[0]).toBe('hi')
      })
      
    })

    describe('/d: numbers', () => {
      it('should match test string', () => {
        const testStr = '0565-2627449'
        const testStr2 = '900565-2627449'
        const REGEX = /0\d{3}-\d{7}/
        expect(REGEX.test(testStr)).toBe(true)
        expect(REGEX.test(testStr2)).toBe(true)
      })

      it('should not match test string', () => {
        const testStr1 = '1565-2627449'
        const testStr2 = '056b-2627449'
        const REGEX = /0\d{3}-\d{7}/
        expect(REGEX.test(testStr1)).toBe(false)
        expect(REGEX.test(testStr2)).toBe(false)
      })
      
    })
  
    describe('^: start of a string', () => {
      it('should match if it is start with 0', () => {
        const testStr = '0565-2627449'
        const REGEX = /^0\d{3}-\d{7}$/
        expect(REGEX.test(testStr)).toBe(true)
      })

      it('should not match if it is not start with 0', () => {
        const testStr = '990565-2627449'
        const REGEX = /^0\d{3}-\d{7}$/
        expect(REGEX.test(testStr)).toBe(false)
      })
      
    })
  })
  
})
