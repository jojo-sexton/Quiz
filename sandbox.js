// Task: if the paragraph has the word success, assign the class success to the paragraph. If error, assign class error. 

// first of all get the reference to all the p tags, this will return a node list so that we can cycle thru them
const paras = document.querySelectorAll ('.content > p')


// cycle thru the node list and check if the para has the word error or success in it
paras.forEach(p => {
  if (p.innerHTML.includes('success')){
    p.classList.add('success')
  } 
  else if (p.innerHTML.includes('error')){
    p.classList.add('eror')
  }

})

paras.forEach(p => console.log(p.classList))


// Toggle a class, if h1 has the class title, this code will remove it and vice versa
const title = document.querySelector('h1')
title.classList.toggle('title')