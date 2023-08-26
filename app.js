// ADDING NEW TODO
// when we type something in the box and hit enter, it add a new todo 

// grab the add form
const addform = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')



//function create a template for li to be injected into ul with todo is an argument
const creatingtemplate = (todo) => {

  const html =  `<li class="list-group-item d-flex justify-content-between align-items-center text-light"> <span>${todo}</span>
      <i class="fa-solid fa-trash-can delete"></i>
    </li>
        `
  list.innerHTML += html 

}

//add submit eventlistener
addform.addEventListener('submit', e => {

  //stop the page from refreshing
  e.preventDefault()
  
  //grab what user input:
  const todo = addform.add.value.trim() //use trim() to remove all the white space made by users when they enter a new todo. 

  //todo is a string, if the string is left blank and hit enter, it wont add a new todo. 
  if (todo.length > 0) {
    //call functin creating template made above
    creatingtemplate(todo)
  }

  //clear the form after user hits enter
  addform.reset()
  
})

//DELETE TODOS
//when user click on the trash icon, the todo is removed using event delegation, we will attach the event listener to the ul and check if user click on the trashcan, then do something with it. this will boost the performance more than if we were to attach the event lister to each trash can

list.addEventListener('click', e => {
  if (e.target.classList.contains('delete')){
    e.target.parentElement.remove()
  }
})

// FILTER

//function filtered filtered out the todos that DOES NOT match the term and give them the class display none to filter them out; if they match, REMOVE THE CLASS FILTERED
const filtered = (term) => {
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach (todo => todo.classList.add('filtered'))

    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach (todo => todo.classList.remove('filtered'))

}



// grab the inner text of search
search.addEventListener ('keyup', e => {
  e.preventDefault()
  const term = search.value.toLowerCase().trim()
  filtered(term)
})

