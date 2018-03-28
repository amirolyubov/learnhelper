export const saveBook = book => new Promise((resolve, reject) => {
  let xhr = new XMLHttpRequest()
  xhr.open('POST', '/api/books', true)
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8")
  xhr.onreadystatechange = () => {
    if (xhr.status == 200) {
      resolve(xhr.responseText)
    }
  }
  xhr.send(JSON.stringify(book))
})

export const getBooks = params => new Promise((resolve, reject) => {
  let xhr = new XMLHttpRequest()

  if (params) {
    xhr.open('GET', `/api/books?type=${params.type}&date=${params.date.getTime()}`, true)
  } else {
    xhr.open('GET', '/api/books', true)
  }

  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8")
  xhr.onreadystatechange = () => {
    xhr.status == 200 && resolve(JSON.parse(xhr.responseText))
  }
  xhr.send()
})
