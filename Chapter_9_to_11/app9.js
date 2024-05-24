// 9. Write a program that checks whether the given input is an
// even number or an odd number.

let input = parseInt(prompt("Enter any number"))
if(input % 2 == 0){
    alert("Even number")
}
else if(input < 0){
    alert("Enter only positive number")
}
else{
    alert("Odd Number")
}