//anwsers arrays
let formula_one_teams = [
    "FERRARI",
    "MERCEDES",
    "RED BULL",
    "WILLIAMS",

]

let cities = [
    "LONDON",
    "NEW YORK",
    "BERLIN",
    "TOKYO",
    "SYDNEY"
]

let football_teams = [
    "LIVERPOOL FC",
    "MAN CITY",
    "REAL MADRID",
    "MAN UNITED",
    "LEEDS UNITED"
]

// the anwser are complied into one varible using the concat function
let categories = formula_one_teams.concat(cities,football_teams );

// the answer varible is set at empty to make sure that there is nothing when we start the game
let answer = '';
// the maxWrong is based on the number of hangman images that can be displayed, in this case 9
let maxWrong = 9; // change image and this will change as well 
// the mistakes are set at zero so that the games is starts at zero
let mistakes = 0;
// guessed is an empty array
let guessed = [];
// wordStatus is set at null
let wordStatus = null;

// this function will choose a random answer based from the catogories varible by using the Math.floor and Math.random function.
function randomWord() {
    answer = categories[Math.floor(Math.random() * categories.length)];
}


// this function will generate button from the list of buttons below and create a keyboard
function generateButtons() {
    let buttonsHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '.split('').map(letter =>
        `
        <button
            class="btn btn-success"
            id= '` + letter + `'
            onclick="handleGuess('` + letter + `')"
        >
            ` +  letter + `
        </button>

        `).join('');
    document.getElementById('keyboard').innerHTML=buttonsHTML;
}

// the will disable a button on the keyboard when activiated
function handleGuess(chosenLetter){
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);

    if (answer.indexOf(chosenLetter) >= 0) {
        guessedWord();
        checkIfGameWon();
    } else if (answer.indexOf(chosenLetter) === -1) {
        mistakes++;
        updateMistakes();
        checkIfGameLost();
        updateHangmanPicture();
    }
    
}

// this updates the hangman pic, it goes through the hangman pics from the images folder 
function updateHangmanPicture() {
    document.getElementById('hangmanPic').src = './Images/' + mistakes + '.png';
}// change image 


// this checks if the game is won
function checkIfGameWon() {
    if (wordStatus === answer) {
        document.getElementById('keyboard').innerHTML = 'You Win!'
    }
}
// this checks if the game is lost
function checkIfGameLost() {
    if (mistakes === maxWrong) {
        document.getElementById('words').innerHTML = 'The answer was ' + answer;
        document.getElementById('keyboard').innerHTML = 'You Lose!'
    }
}
// this creates the area where the words are guessed 
function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById('words').innerHTML = wordStatus;
}
// This function updates the mistakes made
function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
}
// this activates the answer button in the HTML
document.getElementById("answer").addEventListener("click", function() {
	alert(answer)
	
	});
/*
// this is an if , else if , else block which goes through all the answers and their hints
document.getElementById("hint").addEventListener("click", function() {
    if (answer == "FERRARI") {
        alert("Tifosi")
    } else if (answer == "RED BULL"){ 
        alert("energy drink company")
    } else if (answer == "WILLIAMS") {
        alert("Old Champions")
    } else if (answer == "LONDON"){
        alert("Capital of the UK")
    } else if (answer == "NEW YORK"){
        alert("Home of Donald Trump")
    } else if (answer == "BERLIN") {
        alert("Capital of Germany") 
    } else if (answer == "TOKYO") {
        alert("Capital of Japan")
    } else if (answer == "SYDNEY"){
        alert("City with a World Famous Opera House")
    } else if (answer == "LIVERPOOL FC"){
        alert("Home of the Kop") 
    } else if (answer == "MAN CITY") {
        alert("The Citizens")
    } else if (answer == "REAL MADRID") {
        alert("Madrid's Best")
    } else if (answer == "MAN UNITED") {
        alert("Red Devils")
    } else if (answer == "LEEDS UNITED") {
        alert("ELLAND ROAD")
    } else {
        alert("Silver Arrows")
    }
});

*/
let hints = [
    "Tifosi",
    "Silver Arrows",
    "energy drink company",
    "Old Champions",
    "Capital of the UK",
    "Home of Donald Trump",
    "Capital of Germany",
    "Capital of Japan",
    "City with a World Famous Opera House",
    "Home of the Kop",
    "The Citizens",
    "Madrid's Best",
    "Red Devils",
    "ELLAND ROAD"
]

let num =  randomWord()

document.getElementById("hint").addEventListener("click", function() {
    //for (let i = 0; i < hints.length; i++) {
        //for(let p = 0; p<answer.length; p++) {
            alert(hints[categories.indexOf(answer)])
            //document.getElementById("clue").innerHTML = hints[answer.length]
    //}
});
//document.getElementById("hint").addEventListener("click", function() {
//    var catagoryIndex = categories.indexOf(chosenCategory);
//    let hintIndex = chosenCategory.indexOf(answer);
//    showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];


    
    //
//


  //  alert(hints)[catagories][hintIndex];

// creating a timer
let timer;
function startTimer(duration, display) {
    timer = duration;
    var minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            alert(answer);
            setTimeout(reset, 1000);
        } if (wordStatus === answer) {
            timer = 0;
            ;
            setTimeout(reset, 1000)
        } if (mistakes === maxWrong) {
            timer = 0;
            setTimeout(reset, 1000);
            ;
        }
    }, 1000);
}

//function resetTimer() {
//  timer = 60 * 5;
//}

window.onload = function () {
    fiveMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};





function reset() {
    //mins = 0;
    //secs = 5;
    mistakes = 0;
    guessed = [];
    document.getElementById('hangmanPic').src = './images/0.png';
    timer = 60 * 1
    //document.getElementById('minutes').innerText = '0';
    //document.getElementById('seconds').innerText = '5'


//update image
    randomWord();
    guessedWord();
    updateMistakes();
    generateButtons();
}


document.getElementById('maxWrong').innerHTML = maxWrong;



randomWord();
generateButtons();
guessedWord();