class Solution {

  static isEvaluableSheet (cells) {
    const cellsMap = new Map()
    const colors = []

    for (const cell of cells) {
      cellsMap.set(cell.key, { ...cell })
    }

    for (const cell of cells) {
      if (!Solution.isEvaluableCell(cellsMap, colors, cell)) {
        return false
      }
    }
    return true
  }

  // 判断某个 cell 的值是否可计算
  // 1）如果可转成数值，说明可计算
  // 2）计算 cell 引用的 cell 是否可计算，如果有循环引用，则说明不可计算
  static isEvaluableCell (cells, colors, cell) {
    if (colors[cell.key] > 0) {
      return colors[cell.key] === 2
    }

    colors[cell.key] = 1
    const references = Solution.getCellReferences(cell.value)
    for (const ref of references) {
      if (colors[ref] === 2) {
        continue
      }
      if (colors[ref] === 1 || !Solution.isEvaluableCell(cells, colors, cells.get(ref))) {
        return false
      }
    }

    colors[cell.key] = 2
    return true
  }

  static getCellReferences (str) {
    const REGEX = /([A-Z]{2}[0-9]{2})/g
    const result = []
    let matches
    while ((matches = REGEX.exec(str)) !== null) {
      result.push(matches[1])
    }
    return result
  }
}

module.exports = {
  Solution
}
