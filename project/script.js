
let Q1 = prompt("Identify yourself! You will have to solve a number of puzzles to get through");
alert(Q1 + "... I guess that will do");

    let Q2 = prompt('Type a color');
    alert(Q2 + " is ok, I like charcoal");
    document.body.innerHTML += `<p class="q1" style="color: ${Q2.toLowerCase()}">Thank you ${Q1}, is ${Q2} your color?</p>`