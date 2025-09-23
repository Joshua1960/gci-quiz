function login(event) {
  event.preventDefault(); // Prevent form refresh

  const username = document.getElementById("username")?.value.trim();
  const password = document.getElementById("password")?.value.trim();

  if (username && password) {
    localStorage.setItem("user", username);
    window.location.href = "./onboarding.html"; // Redirect
  } else {
    alert("Please enter both username and password.");
  }
}

function welcomeToLogin() {
  window.location.href = "./login.html";
}

function toExamPage() {
  window.location.href = "./exam.html";
}

function toWelcomePage() {
  window.location.href = "./index.html";
}
