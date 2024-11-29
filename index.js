let firstCard = 6
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let stillPlaying = true
let message = ""

console.log(sum)
if (sum < 21) {
    message = "Would you like to draw another card?"
} else if (sum === 21) {
    message = "Woohoo! You win."
    hasBlackJack = true
} else if (sum > 21) {
    message = "You're out of the game 😭"
    stillPlaying = false
}

console.log(message)