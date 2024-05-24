// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

alert("Let's play game!!")
document.write("<h2>Guess Game</h2><br>")

// let numericArray = [1,2,3,4,5,6,7,8,9,10]
let secretNum = 8
let num = prompt("Enter any number")

if(num < 0 || num > 10){
    alert("Enter any positive number between 1 to 10") 
}  
        else if(num == secretNum){
            alert("Bingo! Correct answer")
    
        }
        else if(num == secretNum+1){
            alert("Close enough to the correct answer")
        }
    
        else{
            alert("Incorrect guess! Better luck next time")
        }



