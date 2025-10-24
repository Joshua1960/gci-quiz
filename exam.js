// Question Bank
// ====== Subject Question Bank ======
const questionBanks = {
  English: [
    {
      q: "Which of the following words contains a long vowel sound?",
      opts: ["Hat", "Bit", "Cake", "Cup"],
      ans: 2,
    },
    {
      q: "What is the past tense of 'go'?",
      opts: ["Goes", "Going", "Gone", "Went"],
      ans: 3,
    },
    {
      q: "Choose the correct synonym for 'Happy'.",
      opts: ["Sad", "Joyful", "Angry", "Tired"],
      ans: 1,
    },
    {
      q: "Which part of speech is 'quickly'?",
      opts: ["Adjective", "Verb", "Adverb", "Noun"],
      ans: 2,
    },
    {
      q: "Which sentence is correct?",
      opts: [
        "He go to school.",
        "He goes to school.",
        "He gone to school.",
        "He going to school.",
      ],
      ans: 1,
    },
    {
      q: "Choose the antonym of 'Brave'.",
      opts: ["Fearless", "Cowardly", "Strong", "Bold"],
      ans: 1,
    },
    {
      q: "Identify the noun in this sentence: 'The cat ran fast.'",
      opts: ["cat", "ran", "fast", "the"],
      ans: 0,
    },
    {
      q: "Which sentence is in the future tense?",
      opts: [
        "I am reading a book.",
        "I read a book.",
        "I will read a book.",
        "I have read a book.",
      ],
      ans: 2,
    },
    {
      q: "What is the plural form of 'child'?",
      opts: ["childs", "childes", "children", "childrens"],
      ans: 2,
    },
    {
      q: "Which of these is a conjunction?",
      opts: ["Quickly", "And", "Table", "Under"],
      ans: 1,
    },
  ],

  Mathematics: [
    { q: "What is 12 × 8?", opts: ["96", "88", "108", "100"], ans: 0 },
    { q: "Simplify: 15 - (6 ÷ 2)", opts: ["6", "12", "9", "10"], ans: 2 },
    { q: "Find the value of x if 3x = 21", opts: ["6", "7", "8", "9"], ans: 1 },
    { q: "What is the square root of 49?", opts: ["5", "6", "7", "8"], ans: 2 },
    { q: "Solve: 2(5 + 3)", opts: ["8", "10", "15", "16"], ans: 3 },
    { q: "What is 25% of 200?", opts: ["25", "50", "75", "100"], ans: 1 },
    { q: "Simplify: (9 + 3) ÷ 3", opts: ["3", "4", "5", "6"], ans: 1 },
    {
      q: "If a triangle has sides 3cm, 4cm, and 5cm, what type is it?",
      opts: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
      ans: 3,
    },
    {
      q: "What is the perimeter of a square with side 8cm?",
      opts: ["16cm", "24cm", "32cm", "40cm"],
      ans: 2,
    },
    {
      q: "Convert 0.75 to a fraction.",
      opts: ["1/2", "2/3", "3/4", "4/5"],
      ans: 2,
    },
  ],

  Biology: [
    {
      q: "Which part of the plant is responsible for photosynthesis?",
      opts: ["Root", "Stem", "Leaf", "Flower"],
      ans: 2,
    },
    {
      q: "What gas do plants give off during photosynthesis?",
      opts: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
      ans: 2,
    },
    {
      q: "Which organ pumps blood in the human body?",
      opts: ["Lungs", "Heart", "Liver", "Kidney"],
      ans: 1,
    },
    {
      q: "Which disease is caused by Plasmodium?",
      opts: ["Typhoid", "Tuberculosis", "Malaria", "Cholera"],
      ans: 2,
    },
    {
      q: "Which element’s isotopes include Protium, Deuterium, and Tritium?",
      opts: ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"],
      ans: 1,
    },
    {
      q: "Which part of the human brain controls balance?",
      opts: ["Cerebrum", "Cerebellum", "Medulla", "Thalamus"],
      ans: 1,
    },
    {
      q: "What is the basic unit of life?",
      opts: ["Tissue", "Cell", "Organ", "Nucleus"],
      ans: 1,
    },
    {
      q: "Which blood cells help fight diseases?",
      opts: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
      ans: 1,
    },
    {
      q: "What is the function of chlorophyll?",
      opts: [
        "Absorbs water",
        "Gives color to flowers",
        "Absorbs sunlight",
        "Stores food",
      ],
      ans: 2,
    },
    {
      q: "What type of reproduction involves one parent?",
      opts: ["Sexual", "Asexual", "Binary fusion", "Double fertilization"],
      ans: 1,
    },
  ],

  "Computer Studies": [
    {
      q: "What does CPU stand for?",
      opts: [
        "Central Processing Unit",
        "Central Programming Unit",
        "Control Process Unit",
        "Central Print Unit",
      ],
      ans: 0,
    },
    {
      q: "Which device is used for output?",
      opts: ["Mouse", "Keyboard", "Monitor", "Scanner"],
      ans: 2,
    },
    {
      q: "Binary numbers are made up of:",
      opts: ["0 and 1", "1 and 2", "2 and 3", "3 and 4"],
      ans: 0,
    },
    {
      q: "What is software?",
      opts: [
        "Physical part of a computer",
        "Instructions for the computer",
        "Data storage",
        "Electric signal",
      ],
      ans: 1,
    },
    {
      q: "What type of computer is a smartphone?",
      opts: ["Mainframe", "Mini", "Micro", "Supercomputer"],
      ans: 2,
    },
    {
      q: "What does RAM stand for?",
      opts: [
        "Read Access Memory",
        "Random Access Memory",
        "Rapid Action Memory",
        "Run All Memory",
      ],
      ans: 1,
    },
    {
      q: "Which of the following is NOT an input device?",
      opts: ["Scanner", "Keyboard", "Printer", "Mouse"],
      ans: 2,
    },
    {
      q: "Which key combination is used to copy text?",
      opts: ["Ctrl + V", "Ctrl + X", "Ctrl + C", "Ctrl + Z"],
      ans: 2,
    },
    {
      q: "Which of these is a type of computer memory?",
      opts: ["Monitor", "ROM", "CPU", "Mouse"],
      ans: 1,
    },
    {
      q: "The brain of the computer is the:",
      opts: ["Keyboard", "CPU", "Monitor", "Mouse"],
      ans: 1,
    },
  ],
};

// ====== Load selected subject ======
const subject = localStorage.getItem("subject") || "Science";
const questions = questionBanks[subject] || [];

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
