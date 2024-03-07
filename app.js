// FETCH API WITH ASYNC AWAIT
// put async before the function to turn it into an async function which is non-blocking. This will return a promise. In order to get the data, we need to do .then outside of this function 
const getquizzes = async () => {
  const response = await fetch('./quizzes2.json')
  const data = await response.json()
  return data
  // the data is a promise
}

// can only use the data inside this function here
getquizzes().then(data => {
  const form = document.querySelector('.quiz-form')  
  data.forEach(q => {

    // CREATE HTML TEMPLATES FOR THE QUIZZES FROM QUIZZES.JSON THEN INJECT TO FORM 
   
    form.innerHTML += `
    <div class='my-5 question' >
        <!-- Question  -->
          <p class="lead font-weight-normal">${q.question}</p> 

          <!-- Option A -->
          <div class="A form-check my-2 text-white-50">
            <input type="radio" name="${q.id}" value="A" checked/>
            <label class="form-check-label">A. ${q.A}</label>
          </div>


          <!-- Option B -->
          <div class="B form-check my-2 text-white-50">
            <input type="radio" name="${q.id}" value="B"/>
            <label class="form-check-label">B. ${q.B}</label>
          </div>

          <!-- Option  C-->
          <div class="C form-check my-2 text-white-50">
            <input type="radio" name="${q.id}" value="C"/>
            <label class="form-check-label">C. ${q.C}</label>
          </div>

          <!-- Option  D-->
          <div class="D form-check my-2 text-white-50">
            <input type="radio" name="${q.id}" value="D"/>
            <label class="form-check-label">D. ${q.D}</label>
          </div>

          <!-- Show the fact at the end-->
          <div class="fact d-none lead font-weight-normal ">Correct Answer: ${q.answer}</div>

      </div>

    `
  })

  // CREATE A SUBMIT BUTTON
  form.innerHTML += `
  <!-- create submit button at the end of the form -->

  <button class="text-center">
    <input type="submit" class="btn btn-light">
  </button>`
    
  // CHECKING ANSWER
  // when user hit submit, scroll to the top, if the selection of each question does not match the answer in data, then score is 0, else the score will be 25 adding on to the total score
form.addEventListener('submit', e => {
  e.preventDefault()
  //Scroll to the top
scrollTo(0,0)

  let score = 0;
  const selections = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value]

  selections.forEach((selection, index) => {
    if (selection === data[index].answer) {
      score += 20
    } 

  })
console.log(score)

//  SHOW THE SCORE: 


//grab the span, inject score into the span
const result = document.querySelector('.result')
const span = result.querySelector('span')



//change the display class of the result div by removing the d-none class
const classList =result.classList.remove('d-none')

//ANIMATING THE SCORE: the score starts from 0 then increasing 1 every 10 milisecond and stop until it hits the score
//do something every 10 miliseconds
let i = 0 

const timer = setInterval(()=>{
  
  i++ //every 10 seconds, increase i by 1 until it reaches the score then stop the interval
  span.innerText=`${i}%`
  if (i === score){
    i++
    clearInterval(timer)

    //show the final score
    span.innerText=`${score}%`
  }

  }
, 50)

//show the fact
const facts = form.querySelectorAll('.fact')
facts.forEach(f => f.classList.remove('d-none'))

})


})


