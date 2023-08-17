const form = document.querySelector('form')
const feedback = document.querySelector('.feedback')
const username = form.userName //can grab user name by using the dot notation like form."name=userName"
const pattern = /^[a-z]{6,}$/


username.addEventListener('keyup', e => {
  const result = pattern.test(e.target.value)
  if (result) {
    username.setAttribute('class','success')
  } else {
    username.setAttribute('class','error')
  }
})

// console log the username that is input by user, the user name must contain atleast 6 characters, lower case with no special character
form.addEventListener('submit', e =>{
  e.preventDefault()

  // validation:
  const username = e.target.value
  const result = pattern.test(username)

  if (result){
    feedback.textContent='That username is valid'
  } else {
    feedback.textContent='The user name must be at least 6 characters long, lower case with no special character '
  }
})

// live validation: useing keyup event, as soon as the user starts to to type, start regex testing, if failed, apply a class error to change the username border to red and vice versa if success, apply class success to change the username border to green using form.userName.settAttribute('class','error/success')



// // Testing the RegEx:  at least 6 letters, lower case, no special character

// const username = 'poppysexton'

// // create a patern
// const pattern = /^[a-z]{6,}$/

// // METHOD 1 USING PATERN.TEST() to test if the username matches the patern requirement. this function will return a boolean value 
// const result = pattern.test(username)

// if (result){
//   console.log('RegEx test passed :)')
// } else {
//   console.log('RegEx test failed :(')
// }

// // METHOD 2: SEARCH THE REGEX PATTERN IN THE STRING USERNAME, IF IT DOESNT MATCH, IT WILL RETURN -1, IF IT DOES IT WILL RETURN 0, 1, 2, OR 3 DEPENDS ON WHERE THE PATERN STARTS IN THE STRING
// const username1 = 'pricesspeach$9445'
// const pattern1 = /^[a-z]{6,}$/
// const result1 = username1.search(pattern1)
// console.log(result1)
// if (result1<0){
//   console.log('Regex test failed :(')}
//   else {
//     console.log('Regex test passed')
//   }



