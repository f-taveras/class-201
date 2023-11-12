`use strict`

alert(`Answer yes or no`)
let response = prompt("Do you enjoy CodeFellows?");
if (response.toLowerCase().trim() === "yes") {
  // console.log("Correct!");  
  alert("Correct!");
} else {
    alert("Incorrect. The correct answer is: yes");
}

response = prompt("Do you find education interesting?");
if (response.toLowerCase().trim() === "yes") {
  // console.log("Correct!");    
  alert("Correct!");

} else {
    alert("Incorrect. The correct answer is: yes");
}

response = prompt("Am I done with this project?");
if (response.toLowerCase().trim() === "yes") {
  // console.log("Correct!");  
    alert("Correct!");
} else {
    alert("Incorrect. The correct answer is: yes");
}

response = prompt("Have you gotten any worng answre?");
if (response.toLowerCase().trim() === "yes") {
  // console.log("Correct!");  
    alert("Correct!");
} else {
    alert("Incorrect. The correct answer is: yes");
}

response = prompt("Are you sure?");
if (response.toLowerCase().trim() === "yes") {
  // console.log("Correct!");  
    alert("Correct!");
} else {
    alert("Incorrect. The correct answer is: yes");
}

 let userName = prompt("Welcome to my page! Identify yourself!")
 alert(`Welcome ${userName}, I am glad you are here!`)
 
 document.getElementById("userName").textContent = userName.toLocaleUpperCase();
const favNumber = 21;

let i = 0;
function numberGuessingGame(){

let userGuess;
  
  while (i < 4) {
    i++;

    let userGuess = prompt("Guess my favorite number!");
  
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
  console.log(userGuess);
}

numberGuessingGame();


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

alert("Let's make this interesting")

function top10Movies() {
  var movies = [];
  var maxInputs = 5;

  for (var i = 0; i < maxInputs; i++) {
    var userInput = prompt("Enter a movie name (or cancel to stop):");
    
    
    if (userInput === null) {
      break; 
    } else {
      movies.push(userInput);
    }
  }
  
  return movies;
}

var movieList = top10Movies();
console.log(movieList[3]);

document.getElementById("movie1").textContent = movieList[0];
document.getElementById("movie2").textContent = movieList[1];
document.getElementById("movie3").textContent = movieList[2];
document.getElementById("movie4").textContent = movieList[3];
document.getElementById("movie5").textContent = movieList[4];

  
  