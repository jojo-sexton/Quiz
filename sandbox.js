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

// Get all the children of the div content, this will return a HTML collection

const content = document.querySelector('.content')
const children = content.children
console.log(children)

// convert HTMLcollection into an array
const array = Array.from(children)
console.log(array)

// get the parents of ul 
const parents = ul.parentElement
console.log(parents)

// chaining: get grandparents of ul
const grandparents = ul.parentElement.parentElement
console.log(grandparents)

// get the sibling next to ul
const nextSib = ul.nextElementSibling
console.log(nextSib)


