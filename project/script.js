let Q1 = prompt(
  "Identify yourself! You will have to solve a number of puzzles to get through"
);
alert(Q1 + "... I guess that will do");

let Q2 = prompt("What's your favorite color");
if (Q2 === "blue") {
  alert("Oh wow! That's my favorite color");
} else alert(Q2 + " is ok, I like blue");
document.body.innerHTML += `<p style="color: ${Q2.toLowerCase()}">Thank you ${Q1}, is ${Q2} your color?</p>`;

let userAnswer = prompt("Would you like to know more about me?");
while (userAnswer !== "yes") {
  alert("You should try that again");
  userAnswer = prompt("Would you like to know more about me?");
}

let myName = prompt ("You can come in, guess my name")