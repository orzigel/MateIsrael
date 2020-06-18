console.log("order.js is running");

// Check jQuery
window.onload = function() {
  if (window.jQuery) {
    // jQuery is loaded
    console.log("jQuery is loaded.");
  } else {
    // jQuery is not loaded
    console.log("jQuery is not loaded.");
  }
}

document.getElementById("Selector").onchange = changeListener;

function changeListener(){
  var value = this.value
  console.log(value);

  if (value == 1) {
    document.getElementById("Sum").textContent = "סכום העברה הוא: 89";
  }
  if (value == 2) {
    document.getElementById("Sum").textContent = "סכום העברה הוא: 178";
  }
  if (value == 3) {
    document.getElementById("Sum").textContent = "סכום העברה הוא: 267";
  }
  if (value == 4) {
    document.getElementById("Sum").textContent = "סכום העברה הוא: 356";
  }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwCxjA8ZL8nZlMSYKTRtyhJgMvYHfqQNhDZr8L91oOwdshM7zg/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => console.log('Success!', response))
  .catch(error => console.error('Error!', error.message))
})

function success(){
  $("#f").hide();
  $("#s").show();
}
