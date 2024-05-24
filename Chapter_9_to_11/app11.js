// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

let num1 = parseInt(prompt("Enter first number"))
alert(num1)
let num2 = parseInt(prompt("Enter second number"))
alert(num2)
let choice = prompt("Which operation do you like to perform?'+' or '-' or '*' or '/' or '^' or '%'")
alert(choice)

if(choice == '+'){
    document.write("Addition: "+(+num1 + +num2))
}

else if(choice == '-'){
    document.write("Subtraction: "+(num1 - num2 ))
}

else if(choice == '*'){
    document.write("Multiplication: "+(num1 * num2 ))
}

else if(choice == '/'){
    document.write("Division: "+(num1 / num2 ))
}

else if(choice == '%'){
    document.write("Modulus: "+(num1 % num2 ))
}

else if(choice == '^'){
    document.write("Exponent: "+(num1 ^ num2 ))
}

else{
    document.write("Invalid input!!")
}