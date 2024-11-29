let firstCard = 6
let secondCard = 4
let sum = firstCard + secondCard
console.log(sum)
if (sum < 21) {
    console.log("Would you like to draw another card?")
} else if (sum === 21) {
    console.log("Woohoo! You win.")
} else if (sum > 21) {
    console.log("You're out of the game 😭")
}