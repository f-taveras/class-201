// let Q1 = prompt(
//   "Identify yourself! You will have to solve a number of puzzles to get through"
// );
// alert(Q1 + "... I guess that will do");

// let Q2 = prompt("What's your favorite color");
// if (Q2 === "blue") {
//   alert("Oh wow! That's my favorite color");
// } else alert(Q2 + " is ok, I like blue");
// // document.body.innerHTML += `<p style="color: ${Q2.toLowerCase()}">Thank you ${Q1}, is ${Q2} your color?</p>`;
// document.body.innerHTML += `<li style ="color: ${Q2.toLowerCase()}">${Q1}</li>`;
// let userAnswer = prompt("Would you like to know more about me?");
// while (userAnswer !== "yes") {
//   alert("You should try that again");
//   userAnswer = prompt("Would you like to know more about me?");
// }

// let myName = prompt ("You can come in, guess my name")


let userName = prompt("Welcome to my page! Identify yourself!")
alert(`Welcome ${userName}, I amglad you are here!`)

const favNumber = 21;
let i = 0;

while (i < 4) {
  i++;
  const userGuess = prompt("Guess my favorite number!");

  if (userGuess === null) {
    alert("You are not supposed to do that!");
    break;
  }

  const guess = parseInt(userGuess);

  if (isNaN(guess)) {
    alert("Please enter a valid number.");
  } else if (guess < favNumber) {
    alert("Too low. Try again.");
  } else if (guess > favNumber) {
    if (i === 4) {
      alert("That is it for you buddy, the number was 23");
    } else {
      alert("Too high, try again.");
    }
  } else {
    alert(`Congratulations! You guessed the number ${favNumber} in ${i} attempts.`);
    break;
  }
}

if (i === 4) {
  alert("You have exceeded the number of tries. The answer was 23.");
}

alert("ok, I won't pester you anymmore...!")

const planetArray = ["earth", "saturn", "jupiter", "mars", "venus", "neptune"];
const maxAttempts = 6;

alert("But first! Can you guess my favorite planet?");


for (let i = 1; i <= maxAttempts; i++) {
  const userGuess = prompt(`Lifes ${i}/6: Guess the the planet:`).toLowerCase();

  if (planetArray.includes(userGuess)) {
    alert(`Congratulations! "${userGuess}" is correct.`);
    break;
  } else {
    alert("Not quite");
  }
}
alert("You could've typed:" + planetArray.join(", "));


