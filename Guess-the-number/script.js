let randomNumber = ( parseInt(Math.random() *100 + 1) );
const submit =document.querySelector('#subt');
const userInput =document.querySelector('#guessField');
const guessSlot =document.querySelector('.guesses');
const remaining =document.querySelector('.lastResult');
const lowOrHigh =document.querySelector('.lowOrHigh');
const startOver =document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number.')
    }else if(guess < 1){
        alert('Please enter a number more than 1.')
    }else if(guess>100){
        alert("Please enter a number less than 100.")
    }else{
        prevGuess.push(guess);
        if(numGuess ===5){
            displayGuess(guess);
            displayMessage(`game over and random number was :  ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Yup, you guessed it right`);
        endGame();
    }else if(guess< randomNumber){
        displayMessage(`number is too low`);
    }else if (guess > randomNumber){
        displayMessage(`number is too high.`);
    }
}

function displayGuess(guess){
    userInput.value = "";
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${5 - numGuess}`;

}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = "";
    userInput.setAttribute('disabled', '');
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame" >Start new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
   const newGameButton =  document.querySelector('#newGame');
   newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt( Math.random() * 100 + 1 );
    prevGuess = [];
    numGuess = 1;
    remaining.innerHTML = `${5 - numGuess}`
    userInput.removeAttribute('disabled','');
    startOver.removeChild(p);
    playGame = true;
   })
}




