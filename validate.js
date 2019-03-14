const scriptURL = "https://script.google.com/macros/s/AKfycbwSUOi5ivrv9ZFCSivnOLPt2CNtIGS5TxEyOr24SP0zhmNIVZWb/exec"
const form = document.forms["database"];

function popup(){
    document.write("<center>Details Submitted!</center>");
}

console.log("js file connected!");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
});