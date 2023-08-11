const pathetics = ["The miserable", "The lonely", "The depressed" ]

const ul = document.querySelector('.content > ul')

// // producing html li by arraymap
// const pathHTML = pathetics.map(p => `<li>${p}</li>`)
// // inject li to ul
// ul.innerHTML = pathHTML.join("")


// create and append li to html
pathetics.forEach (p => {
  ul.innerHTML += `<li>${p}</li>`
})