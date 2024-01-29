let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let message = "";

let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let player = {
    name : "Guest",
    chips : 100
}

let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
    isAlive = true;
    let firstCard = randomCard();
    let secondCard = randomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    runGame();
}

function runGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + cards.join(" ");
    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Woohoo!, YOU'VE WON!";
        hasBlackJack = true;        
    } else {
        message = "Sorry!, You're out of the game...";
        isAlive = false;
    }
    messageEl.textContent = message;    
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = randomCard();
        cards.push(card);
        sum += card;
        runGame();
    } 
}

function randomCard() {
    let ranNum = Math.floor(Math.random() * 13) + 1;
    if (ranNum === 1) {
        return 11;
    } else if (ranNum > 10) {
        return 10;
    } else {
        return ranNum;
    }
}