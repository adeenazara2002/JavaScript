// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

let num1 = parseInt(prompt("Enter first number"))
let num2 = parseInt(prompt("Enter second number"))

if(num1 > num2){
    document.write("Num1 is greater")
}

else if(num1 < num2){
    document.write("Num2 is greater")
}
else{
    document.write("Num1 and Num2 are equal")


}