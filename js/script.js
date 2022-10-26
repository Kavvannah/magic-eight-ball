const question = document.getElementById("question");
const ask = document.getElementById("ask");
const ball = document.getElementById("ball");
const answer = document.getElementById("answer")


const answers = Array ("It is decidedly so",
                        "Cannot predict now",
                        "My sources say no",
                        "Yes definitely",
                        "Concentrate and ask again",
                        "Outlook not so good","As I see it, Yes!");
let index = 0;

ask.onclick = (e) => {
    e.preventDefault();

    if (question.value == "" || question.value.length < 4) {
    alert('You must ask me a question');
    return;
    }
        index = Math.floor(Math.random(1) *
        answers.length);
        shake(answers[index]);
};
function shake($answer) {
    answer.classList.remove("answered");
    ball.classList.remove("shake");
  setTimeout(function () {
    ball.classList.add("shake");
    answer.innerText = $answer;
  }, 10);
  setTimeout(function () {
    answer.classList.add("answered");
  }, 1010);
}
