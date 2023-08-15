// // when click on a task, it strike off that task
// const tasks = document.querySelectorAll('li')

// tasks.forEach(t => {
//   t.addEventListener ('click', e => {
//     e.target.style.textDecoration = 'line-through'

//   })
// })


// when click on "add new todo" button, "something new" is added to the top of the list

// grab the botton

const ul = document.querySelector('ul')

const button = document.querySelector('button')
button.addEventListener('click', e => {
const newLi = document.createElement ('li')
newLi.textContent = 'something new'
ul.prepend(newLi)
})

// // click on the todo to delete it (this does not work on "something new")
// const todos = document.querySelectorAll ('li')
// todos.forEach(todo => {
//   todo.addEventListener ('click', e => {
//     e.target.remove()
//   })
// })

// Click on todo to delete it (works on "something new")
ul.addEventListener('click', e => {
  console.log('event in ul')
  if(e.target.nodeName === "LI") {
    e.target.remove()
  }
  e.stopPropagation()

})


// e.stopPropagation to stop the bubbling of execution of click event bubbling up from ul to its parents content
const content = document.querySelector('.content')
content.addEventListener('click', e => console.log ('event in content'))

// more DoM event
//  COPY EVENT: do something when user try to copy the text "Do not copy me"
const notCopy = document.querySelector ('.copy')
notCopy.addEventListener ('copy', () => {console.log('OI! i am copyright')})

// MOUSE MOVE EVENT
const box = document.querySelector ('.box')
box.addEventListener('mousemove', e => {
  box.textContent = `X pos is ${e.offsetX} pixels from the left and Y position is ${e.offsetY} pixels from the top`
 
})
