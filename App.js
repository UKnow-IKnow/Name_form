const scriptURL = 'https://script.google.com/macros/s/AKfycbySgmUea1F4MIoMKl7bbe6viJZhSol9K8vMF6L9zIf4z2rPjMYGqy-qldwy4JObwmzEPQ/exec'
const form = document.forms['googleSheetdb']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Your Name Saved Successfully"))
    .catch(error => console.error('Error!', error.message))
})