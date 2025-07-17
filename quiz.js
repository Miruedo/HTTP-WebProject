// This code checks your answers
document.getElementById("quizForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let score = 0;
  let total = 5;
  let results = "";

  // Question 1
  let q1 = document.querySelector('input[name="q1"]:checked');
  if (q1 && q1.value === "a") score++;

  // Question 2
  let q2 = document.querySelector('input[name="q2"]:checked');
  if (q2 && q2.value === "b") score++;

  // Question 3
  let q3 = document.querySelector('input[name="q3"]:checked');
  if (q3 && q3.value === "c") score++;

  // Question 4
  let q4 = document.querySelector('input[name="q4"]').value.trim().toLowerCase();
  if (q4 === "hypertext transfer protocol secure") score++;

  // Question 5 (multi-select)
  let q5 = document.querySelectorAll('input[name="q5"]:checked');
  let values = Array.from(q5).map(cb => cb.value);
  if (values.includes("a") && values.includes("c") && values.length === 2) score++;

  results += `<h2>Your Score: ${score} / ${total}</h2>`;
  results += score >= 3 ? "<p>You passed!</p>" : "<p>You failed. Try again!</p>";

  document.getElementById("results").innerHTML = results;
});

function restartQuiz() {
  document.getElementById("quizForm").reset();
  document.getElementById("results").innerHTML = "";
}
