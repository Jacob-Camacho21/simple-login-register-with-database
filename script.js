/* Toggle Show Password */
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

/* Validate Password */
function validatePassword() {
  var pass = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirm_password").value;
  var error = document.getElementById("error");

  if (pass !== confirmPass) {
    error.textContent = "Passwords do not match!";
    return false; // stops form submit
  }

  return true; // allow submit
}

/* Toggle between Login and Register Forms */
function showForm(formId) {
    document.querySelectorAll('.form-box').forEach(form => form.classList.remove('active'));
    document.getElementById(formId).classList.add('active');
}