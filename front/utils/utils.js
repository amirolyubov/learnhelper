import matrix from 'calendar-matrix'

export const renderDate = (fromMonday, year, month) => {
  let current = matrix(year || new Date().getFullYear(), month || new Date().getMonth())
  current = current.map(row => row = row.map(day => day = day > 0 ? day : null))
  if (fromMonday) {
    let monCurrent = []
    current.map((row, key, arr) => {
      row.shift()
      row.push(arr[key + 1] ? arr[key + 1][0] : null)
      monCurrent.push(row)
    })
    return monCurrent
  }
  return current
}
