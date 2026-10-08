
// validate.js — handles form checks

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("regForm");

  form.addEventListener("submit", (event) => {
    let valid = true;

    // Full name check
    const fullname = document.getElementById("fullname");
    const fullnameError = document.getElementById("fullnameError");
    if (fullname.value.trim() === "") {
      fullnameError.textContent = "Full name is required.";
      valid = false;
    } else {
      fullnameError.textContent = "";
    }

    // Email check
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
      emailError.textContent = "Enter a valid email address.";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    // Phone check
    const phone = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");
    if (phone.value.trim().length < 8) {
      phoneError.textContent = "Phone number must be at least 8 digits.";
      valid = false;
    } else {
      phoneError.textContent = "";
    }

    // Stop form submission if invalid
    if (!valid) {
      event.preventDefault();
    }
  });
});
