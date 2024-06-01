// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

let userInput = prompt("Enter your name")
let isValid = true
for(let i =0; i<userInput.length; i++){
    if(userInput.charAt(i) === '!' || userInput.charAt(i) === '@' || userInput.charAt(i) === '.' || userInput.charAt(i) === ','){
        alert("Enter a valid username")
        isValid = false
        break;
    }
}

if(isValid){
    alert("Username entered successfully")
}