let form = document.getElementById("form");

let input = document.querySelectorAll("input");
let errorSignal = form.getElementsByClassName("error-signal");
let errorMsg = document.getElementsByClassName("error-msg");
console.log(errorSignal);
let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let emailError = document.getElementById("email-desc");

form.onsubmit = (e) => {
  e.preventDefault();
  for (let i = 0; i < input.length; i++) {
    if (input[i].value.length === 0 || input[i].value === null) {
      errorMsg[i].classList.add("error");
      errorSignal[i].classList.add("error");
    } else {
      errorMsg[i].classList.remove("error");
      errorSignal[i].classList.remove("error");
      if (!validateEmail(email.value)) {
        emailError.classList.add("error");
      } else {
        emailError.classList.remove("error");
      }
    }
  }
};
function validateEmail(input) {
  // console.log(input);
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validRegex)) {
    // alert("Valid mail id");
    email.focus();
    // if (errorSign.classList.co) email.focus();
    return true;
  } else {
    // alert("invalid email");
    email.focus();
    return false;
  }
}
