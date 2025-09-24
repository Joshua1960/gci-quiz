// Question Bank
const questions = [
  {
    q: "Which of the following quantities is a vector?",
    opts: ["Speed", "Distance", "Mass", "Velocity"],
    ans: 4,
  },
  {
    q: "A car accelerates from rest at a constant rate of 4 m/s². What is its speed after 5 seconds?",
    opts: ["10 m/s", "15 m/s", "20 m/s", "25 m/s"],
    ans: 2,
  },
  {
    q: "Newton’s First Law of Motion states that an object will remain at rest or in uniform motion unless:",
    opts: [
      "Gravity acts on it",
      "A force acts upon it",
      "It changes shape",
      "It loses energy",
    ],
    ans: 1,
  },
  {
    q: "Which part of the plant is responsible for photosynthesis?",
    opts: ["Root", "Stem", "Leaf", "Flower"],
    ans: 2,
  },
  {
    q: "Which disease in humans is caused by the Plasmodium parasite?",
    opts: ["Typhoid", "Tuberculosis", "Malaria", "Cholera"],
    ans: 2,
  },
  {
    q: "Which element has isotopes named Protium, Deuterium, and Tritium?",
    opts: ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"],
    ans: 1,
  },
  {
    q: "What is the purpose of an indicator in a titration?",
    opts: [
      "To react with acid",
      "To act as a catalyst",
      "To show the end point",
      "To neutralize the base",
    ],
    ans: 2,
  },
  {
    q: "Which of the following words contains a long vowel sound?",
    opts: ["Hat", "Bit", "Cake", "Cup"],
    ans: 2,
  },
  {
    q: "In the word “book,” what type of vowel sound is present?",
    opts: ["Long vowel", "Short vowel", "Diphthong", "Silent vowel"],
    ans: 1,
  },
  {
    q: "What is the past tense of the verb “go”?",
    opts: ["Goes", "Going", "Gone", "Went"],
    ans: 3,
  },
];

let current = 0;
let answers = Array(questions.length).fill(null);

// Render question
function render() {
  const { q, opts } = questions[current];

  document.getElementById("question-number").textContent = `Question ${
    current + 1
  }`;
  document.getElementById("question-text").textContent = q;

  document.getElementById("options").innerHTML = opts
    .map(
      (opt, i) => `
        <label>
          <input 
            type="radio" 
            name="opt" 
            ${answers[current] === i ? "checked" : ""} 
            onchange="answers[current]=${i}"
          />
          ${opt}
        </label><br>`
    )
    .join("");

  document.getElementById("prevBtn").disabled = !current;
  document.getElementById("nextBtn").style.display =
    current < questions.length - 1 ? "inline" : "none";
  document.getElementById("finishBtn").style.display =
    current === questions.length - 1 ? "inline" : "none";
}

// Navigation
function nextQ() {
  if (current < questions.length - 1) {
    current++;
    render();
  }
}

function prevQ() {
  if (current > 0) {
    current--;
    render();
  }
}

// Finish quiz
function finish() {
  const score = questions.reduce(
    (s, { ans }, i) => s + (answers[i] === ans),
    0
  );
  localStorage.setItem("score", score);
  window.location.href = "result.html";
}

// Initialize quiz
window.onload = render;

// Generate result and remark (runs only if result.html has #score and #remark)
const score = localStorage.getItem("score");
if (document.getElementById("score")) {
  document.getElementById("score").textContent += `${(score / 10) * 100}%`;

  const remark = document.getElementById("remark");
  if (score > 7) {
    remark.textContent = "This is an excellent result, keep it up.";
  } else {
    remark.textContent = "You can work harder to get better.";
  }
}
