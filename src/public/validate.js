const nameInput = document.getElementById("name__input");
const emailInput = document.getElementById("email__input");

const btnSubmit = document.querySelector("button.btn-submit");
const errorName = document.querySelector("h6.error-name");
const errorEmail = document.querySelector("h6.error-email");
const errorGender = document.querySelector("h6.error-gender");
const errorStatus = document.querySelector("h6.error-status");
const regexEmail = /\S+@\S+\.\S+/;

btnSubmit.onclick = function (e) {
  const nameVal = nameInput.value;
  const emailVal = emailInput.value;
  const checkboxGender = document.querySelectorAll(
    "div.required-checkbox-gender > .form-check > input:checked"
  );
  const checkboxStatus = document.querySelectorAll(
    "div.required-checkbox-status > .form-check > input:checked"
  );
  errorEmail.textContent = "";
  errorGender.textContent = "";
  errorName.textContent = "";
  errorStatus.textContent = "";
  if (!nameVal || nameVal === null) {
    e.preventDefault();
    errorName.textContent = "Name is required";
  }

  if (!emailVal || emailVal === null) {
    e.preventDefault();
    errorEmail.textContent = "Email is required";
  }

  if ((nameVal.length < 3 || emailVal.length > 30) && nameVal) {
    e.preventDefault();
    errorName.textContent =
      "Name must be at least 3 characters and max length is 30 characters";
  }

  if (!regexEmail.test(emailVal)) {
    e.preventDefault();
    errorEmail.textContent = "Must be a valid email";
  }

  if (checkboxGender.length === 0) {
    e.preventDefault();
    errorGender.textContent = "Gender is required";
  }

  if (checkboxStatus.length === 0) {
    e.preventDefault();
    errorStatus.textContent = "Status is required";
  }
};
