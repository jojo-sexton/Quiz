const form = document.querySelector('form')

// console log the username that is input by user
form.addEventListener('submit', e =>{
  e.preventDefault()
  console.log(form.userName.value)
})

// Testing the RegEx:  at least 6 letters, lower case, no special character

const username = 'poppysexton'

// create a patern
const pattern = /^[a-z]{6,}$/

// METHOD 1 USING PATERN.TEST() to test if the username matches the patern requirement. this function will return a boolean value 
const result = pattern.test(username)

if (result){
  console.log('RegEx test passed :)')
} else {
  console.log('RegEx test failed :(')
}

// METHOD 2: SEARCH THE REGEX PATTERN IN THE STRING USERNAME, IF IT DOESNT MATCH, IT WILL RETURN -1, IF IT DOES IT WILL RETURN 0, 1, 2, OR 3 DEPENDS ON WHERE THE PATERN STARTS IN THE STRING
const username1 = 'pricesspeach$9445'
const pattern1 = /^[a-z]{6,}$/
const result1 = username1.search(pattern1)
console.log(result1)
if (result1<0){
  console.log('Regex test failed :(')}
  else {
    console.log('Regex test passed')
  }



