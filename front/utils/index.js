import matrix from 'calendar-matrix'

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

export const date2beauty = date => `${['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'][date.getDay()]}, ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`

export const generateMonthTimeStampsMatrix = (fromMonday, month = new Date().getMonth(), year = new Date().getFullYear()) => {
  let matrix = [],
      today = new Date(),
      nextDay = new Date(new Date(new Date(today).setDate(1)).setMonth(month)).setYear(year)

  const generateWeek = () => {
    let row = Array.apply(null, { length: 7 })
    for (let i = new Date(nextDay).getDay(); i < 7; i++) {
      row[i] = new Date(nextDay).getMonth() == month ? new Date(nextDay) : null
      nextDay = new Date(nextDay).getDay() != 6
      ? new Date(new Date(nextDay).setDate(new Date(nextDay).getDate() + 1))
      : nextDay
    }
    return row
  }
  for (; new Date(nextDay).getMonth() == month; ) {
    matrix.push(generateWeek())
    nextDay = new Date(new Date(nextDay).setDate(new Date(nextDay).getDate() + 1))
  }
  if (fromMonday) {
    let monMatrix = []
    matrix.map((row, key, arr) => {
      row.shift()
      row.push(arr[key + 1] ? arr[key + 1][0] : undefined)
      monMatrix.push(row)
    })
    return monMatrix
  }
  return matrix
}

export const generateYearTimestampsMatrix = (year = new Date().getFullYear(), month = 0) => {
  let yearMatrix = [],
      currentDate = new Date(`${year}-${month < 10 ? '0' + (month + 1).toString() : (month + 1)}-01T00:00:00`),
      monthCounter = month
  for (let i = 0; i < 6; i++) {
    let monthRow = []
    while (monthCounter === currentDate.getMonth()) {

      // monthRow.push(currentDate)
      monthRow.push(new Date(currentDate))
      currentDate.setDate(currentDate.getDate() + 1)
    }
    monthCounter = monthCounter != 11 ? monthCounter + 1 : 0
    yearMatrix.push(monthRow)
  }
  return yearMatrix
}

export const getMonths = () => ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
