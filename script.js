// ------------------------- For Each Button of same class --------------------------------
// const buttons = document.querySelectorAll('.start_button')
// buttons.forEach(addEventListener("click", () => {
//   fetch("http://localhost:3000/checkout", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       packages: [
//         { id: 1, quantity: 1 },
//         { id: 2, quantity: 1 },
//         { id: 3, quantity: 1 },
//       ],
//     }),
//   })
//     .then(res => {
//       if (res.ok) return res.json()
//       return res.json().then(json => Promise.reject(json))
//     })
//     .then(({ url }) => {
//       console.log(url)
//       window.location = url
//     })
//     .catch(e => {
//       console.error(e.error)
//     })
// })
// )

// ------------------------- Seperate Buttons --------------------------------
const button1 = document.getElementById('start_button1')

button1.addEventListener("click", () => {
  fetch("http://localhost:3000/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      packages: [
        { id: 1, quantity: 1 },
      ],
    }),
  })
    .then(res => {
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
      console.log(url)
      window.location = url
    })
    .catch(e => {
      console.error(e.error)
    })
})

const button2 = document.getElementById('start_button2')

button2.addEventListener("click", () => {
  fetch("http://localhost:3000/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      packages: [
        { id: 2, quantity: 1 },
      ],
    }),
  })
    .then(res => {
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
      console.log(url)
      window.location = url
    })
    .catch(e => {
      console.error(e.error)
    })
})

const button3 = document.getElementById('start_button3')

button3.addEventListener("click", () => {
  fetch("http://localhost:3000/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      packages: [
        { id: 3, quantity: 1 },
      ],
    }),
  })
    .then(res => {
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
      console.log(url)
      window.location = url
    })
    .catch(e => {
      console.error(e.error)
    })
})
