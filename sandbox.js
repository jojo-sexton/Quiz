const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
const close = document.querySelector('.close')



// When click the button, change display of the div popup-wrapper from none to something
button.addEventListener('click', () => {

popup.style.display = 'block'

})

// When click on close, change display of the dive popup-wrapper from block to none
close.addEventListener('click', () => {
  popup.style.display = 'none'
})

// when click any where in the grey area, it closes the popup as well
popup.addEventListener('click', () => {
  popup.style.display = 'none'
})