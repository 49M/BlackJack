let firstCard;
let secondCard;
let cardSet;
let numAces;
let hasBlackJack;
let stillPlaying;
let message = document.getElementById("message-el")
let start = document.getElementById("start-btn")
let gameButtons = document.getElementById("game-control")
let cards = document.getElementById("cards-el")
let sum = document.getElementById('sum-el')
let playAgain = document.getElementById('again-btn')

gameButtons.style.display = "none"
playAgain.style.display = "none"

function startGame() {
    cardSet = ["2", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", 
        "5", "5", "5", "5", "6", "6", "6", "6", "7", "7", "7", "7", 
        "8", "8", "8", "8", "9", "9", "9", "9", "10", "10", "10", "10", 
        "J", "J", "J", "J", "Q", "Q", "Q", "Q", "K", "K", "K", "K", 
        "A", "A", "A", "A"]
    start.style.display = "none"
    playAgain.style.display = "none"
    gameButtons.style.display = "block"
    hasBlackJack = false
    stillPlaying = true
    numAces = 0
    sum.textContent = "Sum: 0"
    cards.textContent = "Cards:"
}

function newCard() {
    let i = Math.floor(Math.random() * cardSet.length)
    let drawnCard = cardSet.splice(i, 1)
    cards.textContent += "  "+drawnCard
    sumContent = sum.textContent.split(": ")
    currSum = parseInt(sumContent[1], 10)
    sumTxt = sumContent[0]+": "
    if (drawnCard=="J" || drawnCard=="Q" || drawnCard=="K") {
        sum.textContent = sumTxt+(currSum+10)
    }
    else if (drawnCard=="A") {
        if (currSum <= 10) {
            sum.textContent = sumTxt+(currSum+11)
            numAces += 1 
        } else {
            sum.textContent = sumTxt+(currSum+1)
        }
    } else {
        sum.textContent = sumTxt+(currSum+parseInt(drawnCard))
    }
    newSum = parseInt(sum.textContent.split(": ")[1])
    if (newSum < 21) {
        message.textContent = "Would you like to draw another card?"
    } else if (newSum === 21) {
        message.textContent = "Woohoo! You win."
        hasBlackJack = true
        stillPlaying = false
        endTurn()
    } else {
        if (numAces > 0) {
            numAces -= 1
            sum.textContent = sumTxt+(newSum-10)
        } else {
            message.textContent = "You're out of the game."
            stillPlaying = false
            endTurn()
        }
    }
}

function endTurn() {
    gameButtons.style.display = "none"
    playAgain.style.display = "block"
}