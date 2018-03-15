export const getDay = data => new Promise((resolve, reject) => {
  setTimeout(() => {
    return Math.random() > 0.2
    ? resolve({
      day: 'test'
    })
    : reject(new Error())
  }, 700)
})
