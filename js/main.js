console.log("main.js is running");

// Welcome message (only exists on index.html)
const welcome = document.getElementById("welcomeMsg");
if (welcome) {
  welcome.innerHTML = "Welcome to <strong>JNEC Events Hub</strong>!";
}

// Dark mode toggle (only runs if the button exists)
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }
});

// Confirm before clearing the form (only on register.html)
const resetBtn = document.querySelector("#regForm button[type='reset']");
if (resetBtn) {
  resetBtn.addEventListener("click", function (e) {
    if (!confirm("Clear the whole form?")) {
      e.preventDefault();
    }
  });
}