import { it, describe } from 'mocha'
import expect from 'expect'

import HashTable from './HashTable.js'

describe('HashTable', () => {
  describe('put', () => {
    it('should add new data into the table', () => {
      const table = new HashTable()
      table.put('123', 'ember')
      expect(table.get('123')).toBe('ember')
    })
    
    it('should update the data if the key exists', () => {
      const table = new HashTable()
      table.put('123', 'ash')
      table.put('123', 'ember')
      expect(table.get('123')).toBe('ember')
    })
    
  })

  describe('get', () => {
    it('should return value based on key', () => {
      const table = new HashTable()
      table.put('123', 'ash')
      table.put('124', 'ember')
      table.put('125', 'ash')
      table.put('126', 'ash')
      table.put('127', 'ash')
      expect(table.get('124')).toBe('ember')
    })
    
    it('should return -1 if the key is not in the table', () => {
      const table = new HashTable()
      expect(table.get('111')).toBe(-1)
    })
    
  })
  

  describe('remove', () => {
    it('should remove item in the table', () => {
      const table = new HashTable()
      table.put('123', 'ember')
      table.remove('123')
      expect(table.get('123')).toBe(-1)
    })

    it('should not remove item if the key is not present in the table', () => {
      const table = new HashTable()
      table.put('123', 'ember')
      expect(table.remove('111')).toBe(-1)
      expect(table.get('123')).toBe('ember')
    })
  })
  
  describe('isEmpty', () => {
    it('should return true if the table is empty', () => {
      const table = new HashTable()
      expect(table.isEmpty()).toBe(true)
    })

    it('should return false if the table is not empty', () => {
      const table = new HashTable()
      table.put('123', 'ember')
      expect(table.isEmpty()).toBe(false)
    })
    
  })

  describe('size', () => {
    it('should return return the size of the table', () => {
      const table = new HashTable()
      table.put('123', 'ember')
      table.put('124', 'ember')
      table.put('125', 'ember')
      table.put('126', 'ember')
      table.put('127', 'ember')
      expect(table.size()).toBe(5)
    })
  })

  describe('resize', () => {
    it('should resize the table if the loadfactor is greater than 0.75', () => {
      const table = new HashTable()
      table.put('123', 'ember')
      table.put('124', 'ember')
      table.put('125', 'ember')
      table.put('126', 'ember')
      table.put('127', 'ember')

      expect(table.capacity).toBe(7)

      table.put('128', 'ember')
      expect(table.capacity).toBe(14)
    })
    
  })
  

})
