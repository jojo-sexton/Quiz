// FETCH API WITH ASYNC AWAIT
// put async before the function to turn it into an async function which is non-blocking. This will return a promise. In order to get the data, we need to do .then outside of this function 
const getquizzes = async () => {
  const response = await fetch('./quizzes.json')
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
    <div class='my-5'>
        <!-- Question  -->
          <p class="lead font-weight-normal">${q.question}</p> 

          <!-- Option A -->
          <div class="A form-check my-2 text-white-50">
            <input type="radio" name="${q.id}" value="A" checked/>
            <label class="form-check-label">${q.A}</label>
          </div>


          <!-- Option B -->
          <div class="B form-check my-2 text-white-50">
            <input type="radio" name="${q.id}" value="B"/>
            <label class="form-check-label">${q.B}</label>
          </div>

          <!-- Option  C-->
          <div class="C form-check my-2 text-white-50">
            <input type="radio" name="${q.id}" value="C"/>
            <label class="form-check-label">${q.C}</label>
          </div>

          <!-- Option  D-->
          <div class="D form-check my-2 text-white-50">
            <input type="radio" name="${q.id}" value="D"/>
            <label class="form-check-label">${q.D}</label>
          </div>

          <!--show fact after choosing  -->
          <div class="fact lead font-weight-normal"></div>

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
    // when user hit submit, if the selection of each question does not match the answer in data, then score is 0, else the score will be 25 adding on to the total score


form.addEventListener('submit', e => {
  e.preventDefault()

  let score = 0;
  const selections = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value]

  selections.forEach((selection, index) => {
    if (selection === data[index].answer) {
      score += 20
    } 

  })
console.log(score)
})


})


