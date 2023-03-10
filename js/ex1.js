/*
   Exercise 1 JavaScript code
*/

// List of questions (statement + answer)
const questions = [
  {
    statement: "2+2?",
    answer: "2+2 = 4"
  },
  {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492"
  },
  {
    statement:
      "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter"
  }
];

const displayQuestions = () => {
  let div = document.getElementById("content");
  for (const question of questions) {
    let ques = document.createElement("div");
    ques.id = `question${questions.indexOf(question) + 1}`;
    ques.innerHTML = `<p>Question ${questions.indexOf(question) + 1}: ${question.statement}</p>
    <button onclick="displayAnswer(${questions.indexOf(question)})">Show the answer</button>`;
    div.appendChild(ques);
  }
}

const displayAnswer = (index) => {
  let ques = document.getElementById("question" + (index + 1));
  ques.innerHTML = `<p>Question ${index + 1}: ${questions[index].statement}</p>`;
  let ans = document.createElement("div");
  ans.innerHTML = `<p>Answer: ${questions[index].answer}</p>`;
  ques.appendChild(ans);
}

window.onload = () => {
  displayQuestions();
}