function validateForm(event) {
  let errors;
  validateLengh(event.target);
  if (event.target.type === "email") {
    validateEmail(event.target);
  }
  errors = document.querySelectorAll(".error");
  if (errors.length === 0) {
    document.querySelector(".send-button").disabled = false;
  }
}

function validateLengh(field) {
  if (field.value.length > 0) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red"
    field.classList.add("error");
  }
}

function validateEmail(field) {
  let emailText = field.value;
  if (emailText.indexOf("@") !== -1) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}


export default validateForm;