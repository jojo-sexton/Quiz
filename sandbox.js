const pathetics = ["The miserable", "The lonely", "The depressed" ]

const ul = document.querySelector('.unfortunate > ul')

// // producing html li by arraymap
// const pathHTML = pathetics.map(p => `<li>${p}</li>`)
// // inject li to ul
// ul.innerHTML = pathHTML.join("")


// create and append li to html
pathetics.forEach (p => {
  ul.innerHTML += `<li>${p}</li>`
})

// replace the whole div class unfortunate  with class fortunate, h1 from poor unfortunate soulds with  roar, ul class pathetic with fortunate , a href with ariel link, link text to "you're gonna hear me roar"
const excellent = ["joyfull", "excellent", "strong", "powerful", "control", "smile", "peace"]


// Grab the whole unfortunate div
const unfortunateDiv = document.querySelector('.unfortunate')

// change class to excellent
unfortunateDiv.setAttribute ('class', 'excellent')


// change h1 to roar
const h1 = document.querySelector('.excellent > h1')
h1.innerHTML = "Roar!"

// change pathetic to excellent
const newUL = excellent.map(e => `<li>${e}</li>`).join('')

console.log(newUL)

ul.innerHTML = newUL;

const link = document.querySelector ('a')

const newLink = "https://en.wikipedia.org/wiki/Ariel_(The_Little_Mermaid)"

link.setAttribute ('href', newLink)
link.innerText = "You're gonna hear me roar!"