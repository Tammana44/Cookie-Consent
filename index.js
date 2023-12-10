const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceBtns = document.getElementById('modal-choice-btns')
setTimeout (function(){
  modal.style.display = 'inline'
},1500)

modalCloseBtn.addEventListener('click', function(){
  modal.style.display = 'none'
})

declineBtn.addEventListener('mouseenter' , function(){
  modalChoiceBtns.classList.toggle('modal-choice-btns-reverse')
})

consentForm.addEventListener('submit', function(e){
e.preventDefault()

const consentFormData = new FormData(consentForm)
const fullName = consentFormData.get('fullname')



modalText.innerHTML = `
<div class = "modal-inner-loading">
<img src = "img/hj.gif" class="loading">
<p id ="upload-text">
uploading your data to the dark web...
</P>
</div> `
setTimeout(function(){
  document.getElementById('upload-text').innerText = 'Making the sale....'
}, 1500)

setTimeout(function(){
  document.getElementById('modal-inner').innerHTML = `<h2> Thank <span class = "modal-display-name"> ${fullName} </span> , you sucker! <h2>
  <p>we just sold right to your eternal SourceBufferList.<p>
  <div class= "idiot-gif">
  <img src="img/lol.jpeg">
  </div>
   `

   modalCloseBtn.disabled = false
}, 3000)

})
