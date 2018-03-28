export const signUp = user => new Promise((resolve, reject) => {
  let xhr = new XMLHttpRequest()
  xhr.open('POST', '/api/signup', true)
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8")
  xhr.onreadystatechange = () => {
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
      resolve(JSON.parse(xhr.responseText))
    }
  }
  xhr.send(JSON.stringify(user))
})

export const signIn = user => new Promise((resolve, reject) => {
  let xhr = new XMLHttpRequest()
  xhr.open('POST', '/api/signin', true)
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8")
  xhr.onreadystatechange = () => {
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
      resolve(JSON.parse(xhr.responseText))
    }
  }
  xhr.send(JSON.stringify(user))
})

export const signOut = user => new Promise((resolve, reject) => {
  let xhr = new XMLHttpRequest()
  xhr.open('POST', '/api/signout', true)
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8")
  xhr.onreadystatechange = () => {
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
      resolve(xhr.responseText)
    }
  }
  xhr.send(JSON.stringify(user))
})

export const checkSession = () => new Promise((resolve, reject) => {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', '/api/session', true)
  xhr.onreadystatechange = () => {
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
      resolve(JSON.parse(xhr.responseText))
    }
    if (xhr.status == 401) {
      reject(401)
    }
  }
  xhr.send()
})
