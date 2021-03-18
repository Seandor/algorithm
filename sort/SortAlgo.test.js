const { it, describe, beforeEach } = require('mocha')
const { SortAlgo } = require('./SortAlgo')
const expect = require('expect')
let data1
let data2
let data3
let expected1
let expected2
let expected3

describe('SortAlgo', () => {
  beforeEach(() => {
    data1 = [2, 3, 1, 0, 9, 5, 4]
    expected1 = [0, 1, 2, 3, 4, 5, 9]

    data2 = [1]
    expected2 = [1]

    data3 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 10, 9]
    expected3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10]
  })

  describe('bubbleSort', () => {
    it('should sort', () => {
      SortAlgo.bubbleSort(data1)
      expect(data1).toEqual(expected1)
      SortAlgo.bubbleSort(data2)
      expect(data2).toEqual(expected2)
      SortAlgo.bubbleSort(data3)
      expect(data3).toEqual(expected3)
    })
  })

  describe('insertionSort', () => {
    it('should sort', () => {
      SortAlgo.insertionSort(data1)
      expect(data1).toEqual(expected1)
      SortAlgo.insertionSort(data2)
      expect(data2).toEqual(expected2)
      SortAlgo.insertionSort(data3)
      expect(data3).toEqual(expected3)
    })
  })

  describe('shellSort', () => {
    it('should sort', () => {
      SortAlgo.shellSort(data1)
      expect(data1).toEqual(expected1)
      SortAlgo.shellSort(data2)
      expect(data2).toEqual(expected2)
      SortAlgo.shellSort(data3)
      expect(data3).toEqual(expected3)
    })
  })

  describe('selectionSort', () => {
    it('should sort', () => {
      SortAlgo.selectionSort(data1)
      expect(data1).toEqual(expected1)
      SortAlgo.selectionSort(data2)
      expect(data2).toEqual(expected2)
      SortAlgo.selectionSort(data3)
      expect(data3).toEqual(expected3)
    })
  })

  describe('mergeSort', () => {
    it('should sort', () => {
      SortAlgo.mergeSort(data1)
      expect(data1).toEqual(expected1)
      SortAlgo.mergeSort(data2)
      expect(data2).toEqual(expected2)
      SortAlgo.mergeSort(data3)
      expect(data3).toEqual(expected3)
    })
  })

  describe('mergeSortEx', () => {
    it('should sort', () => {
      SortAlgo.mergeSortEx(data1)
      expect(data1).toEqual(expected1)
      SortAlgo.mergeSortEx(data2)
      expect(data2).toEqual(expected2)
      SortAlgo.mergeSortEx(data3)
      expect(data3).toEqual(expected3)
    })
  })

  describe('quickSort', () => {
    it('should sort', () => {
      SortAlgo.quickSort(data1)
      expect(data1).toEqual(expected1)
      SortAlgo.quickSort(data2)
      expect(data2).toEqual(expected2)
      SortAlgo.quickSort(data3)
      expect(data3).toEqual(expected3)
    })
  })

  describe('quickSortEx', () => {
    it('should sort', () => {
      SortAlgo.quickSortEx(data1)
      expect(data1).toEqual(expected1)
      SortAlgo.quickSortEx(data2)
      expect(data2).toEqual(expected2)
      SortAlgo.quickSortEx(data3)
      expect(data3).toEqual(expected3)
    })
  })

  describe('quickSortRandom', () => {
    it('should sort', () => {
      SortAlgo.quickSortRandom(data1)
      expect(data1).toEqual(expected1)
      SortAlgo.quickSortEx(data2)
      expect(data2).toEqual(expected2)
      SortAlgo.quickSortEx(data3)
      expect(data3).toEqual(expected3)
    })
  })
})
