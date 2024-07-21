// let randomNum = Math.floor(Math.random() * 100 + 1);
// let count = parseInt(document.querySelector(".lastResult").textContent);
// let i = 0;

// let form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let guess = parseInt(document.querySelector("input").value);

//   if (i < 10) {
//     if (guess === randomNum) {
//       let n = document.createTextNode(`${guess} `);
//       let c = document.createTextNode(`${count - (i + 1)}`);

//       document
//         .querySelector(".lastResult")
//         .removeChild(document.querySelector(".lastResult").firstChild);
//       document.querySelector(".lastResult").appendChild(c);
//       document.querySelector(".guesses").appendChild(n);
//       document.getElementById("guess").style.fontSize = "22px";
//       document.getElementById("guess").style.fontWeight = "500";
//       document.querySelector(
//         "#guess"
//       ).textContent = `Congratulations You guessed right, it was ${randomNum}`;
//       document.querySelector(".lowOrHi").innerHTML = "Yup thats the one";

//       i = 10;
//     } else if (isNaN(guess) || guess < 1 || guess > 100) {
//       document.getElementById("guessField").value = "";
//       document.getElementById("guessField").placeholder =
//         "Invalid Entry, Try Again";
//     } else {
//       let n = document.createTextNode(`${guess} `);
//       let c = document.createTextNode(`${count - (i + 1)}`);

//       document
//         .querySelector(".lastResult")
//         .removeChild(document.querySelector(".lastResult").firstChild);
//       document.querySelector(".lastResult").appendChild(c);
//       document.querySelector(".guesses").appendChild(n);

//       if (guess < randomNum) {
//         document.querySelector(".lowOrHi").innerHTML = "Guess Higher";
//       } else {
//         document.querySelector(".lowOrHi").innerHTML = "Guess Lower";
//       }

//       i += 1;
//     }
//   } else {
    
//     document.getElementById("guess").style.fontSize = "16px";
//     document.getElementById("guess").style.fontWeight = "500";
//     document.querySelector(
//       "#guess"
//     ).textContent = `Sorry the number was ${randomNum}\n reload the page to try again`;
//   }
// });


let randomNum = Math.floor(Math.random() * 100 + 1);
let count = parseInt(document.querySelector(".lastResult").textContent);

function guessAndCounter(guess){
    let n = document.createTextNode(`${guess} `);
      let c = document.createTextNode(`${count - (i + 1)}`);

      document
        .querySelector(".lastResult")
        .removeChild(document.querySelector(".lastResult").firstChild);
      document.querySelector(".lastResult").appendChild(c);
      document.querySelector(".guesses").appendChild(n);
}

let i = 0;

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let guess = parseInt(document.querySelector("input").value);
  document.querySelector("input").value = ''

  if (i < 10) {
    if (guess === randomNum) {
      
        // insert function here
        guessAndCounter(guess)

      document.getElementById("guess").style.fontSize = "18px";
      document.getElementById("guess").style.fontWeight = "500";
      document.querySelector(
        "#guess"
      ).textContent = `🎉 Congratulations 🎉 it was ${randomNum}🏆`;
      document.querySelector(".lowOrHi").innerHTML = "Yup thats the one";

      i = 10;
    } else if (isNaN(guess) || guess < 1 || guess > 100) {
      document.getElementById("guessField").value = "";
      document.getElementById("guessField").placeholder =
        "Invalid Entry, Try Again";
    } else {
      
        // Enter function here
        guessAndCounter(guess)

      if (guess < randomNum) {
        document.querySelector(".lowOrHi").innerHTML = "Guess Higher";
      } else {
        document.querySelector(".lowOrHi").innerHTML = "Guess Lower";
      }

      i += 1;
    }
  } else {
    
    document.getElementById("guess").style.fontSize = "16px";
    document.getElementById("guess").style.fontWeight = "500";
    document.querySelector(
      "#guess"
    ).textContent = `Sorry the number was ${randomNum}\n reload the page to try again`;
  }
});
