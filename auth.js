function login(event) {
  event.preventDefault(); // Prevent form refresh

  const username = document.getElementById("username")?.value.trim();
  const studentId = document.getElementById("student-id")?.value.trim();

  if (username && studentId) {
    localStorage.setItem("user", username);
    localStorage.setItem("studentId", studentId);
    window.location.href = "./onboarding.html"; // Redirect
  } else {
    alert("Please enter both username and student ID.");
  }
}

function welcomeToLogin() {
  window.location.href = "./login.html";
}

// function toExamPage() {
//   window.location.href = "./exam.html";
// }
function toExamPage() {
  window.location.href = "./subject.html"; // CHANGED
}

function toWelcomePage() {
  window.location.href = "./index.html";
}
