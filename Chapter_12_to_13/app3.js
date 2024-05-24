// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

let number = parseInt(prompt("Enter any number"))

if(number < 0){
    alert("The number is negative")
}

else if(number > 0){
    alert("The number is positive")
}

else if(number == 0){
    alert("The number is zero")
}

else{
    alert("Invalid input")
}