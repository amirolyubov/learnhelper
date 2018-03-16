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

export const spliceString = (str, length, sym) => str.substring(0, length - 1) + sym

export const timestamps2percents = (start, end, now, max) => {
  let current, total,
      _temp = {
        current: Math.round((now * (end - start)) / end),
        end: end - start
      }
  current = (max * _temp.current) / _temp.end
  return Number(current.toString().substring(0,3)) >= 100 ? 100 : Number(current.toString().substring(4,6))
}
