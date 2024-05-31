// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

let input = parseInt(prompt("Enter a number to show its multiplication table"))

for(let i = 1; i<=10; i++){
    console.log(input+" x"+i+" = "+(input * i))
}