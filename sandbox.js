const numbers = [10, 20, 30, 50, 70, 90]
console.log(`Numbers array [${numbers}]`)

//<---------------------------------->

// FILTER returns a new array that matches criteria
const under50 = numbers.filter((n) => n < 50)
console.log(`These are the numbers that under 50: ${under50}`)

const users = [
  { name: 'mario', premium: true },
  { name: 'luigi', premium: false },
  { name: 'toad', premium: true },
  { name: 'princess peach', premium: false },
]

const premiums = users.filter((user) => {
  return user.premium //return the value if "user.premium is true"
})
console.log(`People that have premium memberships:`,  premiums)



//<---------------------------------->

//REDUCE: return a single accumulated value. it iterates thru each item in the array and start accumulating/adding/counting if that item meet certain criteria

//Example 1: look at the numbers array at the top, count how many numbers in that array that is higher than 50.
const over50 = numbers.reduce((accumulated, current) => {
  if (current > 50) {
    accumulated++
  }
  return accumulated++ //return outside if
}, 0)
console.log(`There are ${over50} numbers over 50 in the numbers array`)

//Example 2: find total score of Mario 
//acc is the total score starting at 0
const scores = [
  { name: 'mario', score: 30 },
  { name: 'luigi', score: 40 },
  { name: 'mario', score: 50 },
  { name: 'princess peach', score: 60 },
]

const marioscores = scores.reduce((acc, score)=>{
  if (score.name === "mario") {
    acc += score.score
  }
  return acc //MAKE SURE RETURN OUTSIDE IF
}, 0)

console.log(`total scores of Mario is ${marioscores}`)


//<---------------------------------->

//FIND: ITTERATE THE ARRAY AN RETURN THE FIRST VALUE THAT MEET CRITERIA
//example 1: find the first number that is over 50
const firstover50 = numbers.find( number => number > 50 )
console.log (`the first number in the array that is over 50 is ${firstover50}`)

//SORT METHOD
//sort the number using syntax numbers.sort((a, b) =>  a -b ) to sort from low to high and numbers.sort((a, b) =>  b - a  ) to sort from low to high
numbers.sort((a,b) => a - b)
console.log(`sort the numbers from small to big ${numbers}`)

// //sort method explain: the sort itterates 2 elements next to each other in the array then compare them,  if you want a before b, then return -1, if you want a after b, return 1, if no change, return 0
// numbers.sort((a,b) => {
//   if (a > b){
//     return 1
//   } else if (a < b){
//     return -1
//   } else return 0
// })

//CHAINING ARRAY METHODS: AS LONG AS THE METHOD RETURNS AN ARRAY, WE CAN CHAIN ON THEM
//from the scores array, filter out those that have the scores over 50 then output it to the html
const highscores = scores.filter(s => s.score > 50).map(s => `${s.name} has a score of ${s.score}`)
console.log(highscores)