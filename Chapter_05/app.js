// Math expressions: Familiar operators

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

var num_1 = 3
var num_2 = 8

var sum = (num_1 + num_2)
alert(sum)

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

var sub = (num_1 - num_2)
alert(sub)

var mul = (num_1 * num_2)
alert(mul)

var div = (num_1 / num_2)
alert(div)

var rem = (num_1 % num_2)
alert(rem)

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

let val;
document.write("The value after declaring a variable is "+val+"<br>")
val = 5
document.write("Initial value is  "+val+"<br>")
val = ++val
document.write("Value of the variable after an increment is  "+val+"<br>")
val = val + 7
document.write("Value of the variable after addition is  "+val+"<br>")
val = --val
document.write("Value of the variable after decrement is  "+val+"<br>")
val = val % 3
document.write("The remainder is  "+val+"<br>")
document.write("<br>")
document.write("<br>")



// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

let cost = 600
let totalCost = 600 * 5
document.write("Total cost to buy 5 tickets to a movie is "+totalCost+"PKR <br>")
document.write("<br>")
document.write("<br>")


// 5. Write a script to display multiplication table of any
// number in your browser. E.g

document.write("<b>Table of 4</b> <br>")
let num = 0;

for (let i = 1; i <= 10; i++) {
    num = i;
    document.write("4 x " + num + " = " + (4 * num) + "<br>");
}
document.write("<br>")
document.write("<br>")


// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

let celcius = 25
let celciusToFaren = (celcius * (9/5) + 32)
document.write(celcius+" <sup>0</sup>C "+ " is "+celciusToFaren+"<sup>0</sup>F <br> ")
let faren = 70
let farenToCelcius = ((faren - 32) * (5/9))
document.write(faren+" <sup>0</sup>F "+ " is "+farenToCelcius+"<sup>0</sup>C ")
document.write("<br>")
document.write("<br>")


// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

let price1 = 500
let price2 = 1000

let quan1 = 2
let quan2 = 3

let shippingCharges = 100
let costTotal  = ((price1 * quan1) + (price2 * quan2) + shippingCharges)

document.write("<h1>Shopping Cart</h1>")
document.write("Price of item 1 is "+price1+"<br>")
document.write("Price of item 2 is "+price2+"<br>")
document.write("Quantity of item 1 is "+quan1+"<br>")
document.write("Quantity of item 1 is "+quan2+"<br>")
document.write("Shipping Charges"+shippingCharges+"<br></br>")
document.write("Total cost of your order is "+costTotal+"<br>")
document.write("<br>")
document.write("<br>")


// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser


let math = 98
let computer = 78
let obtMarks = (math + computer)
let totalMarks = 200

let percentage = ((obtMarks / totalMarks) * 100)
document.write("<h1>MARKSHEET</h1> <br>")
document.write("Math's marks: "+math+"<br>")
document.write("Computer's marks: "+computer+"<br>")
document.write("Obtained marks: "+obtMarks+"<br>")
document.write("Total Marks: "+totalMarks+"<br>")
document.write("Percentage "+percentage+"<br>")
document.write("<br>")
document.write("<br>")


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write("<h1>Currency in PKR</h1> <br>")

let dollar = 25
let riyal = 25
let dollarToPKR = 104.80
let riyalToPKR = 28
let currencyInPKR = (dollar * dollarToPKR) + (riyal * riyalToPKR)

document.write("Total Currency in PKR: "+currencyInPKR+ "<br>")
document.write("<br>")
document.write("<br>")


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

let digit = 10
let calculations = (((digit + 5) * 10) / 2) 

document.write("Result: "+calculations+ "<br>")
document.write("<br>")
document.write("<br>")


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.

document.write("<h1>Age Calculator</h1> <br>")
let currYear = 2024
let birthYear = 2002

let age = currYear - birthYear
document.write("They are "+age+ " years old "+"<br>")
document.write("<br>")
document.write("<br>")



// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write("<h1>The Geometrizer</h1> <br>")

let radius = 3
let circumference = 2*3.142*radius
let area = 3.142*radius*radius

document.write("The circumference of the circle is : "+circumference+"<br>")
document.write("The area of the circle is : "+area+"<br>")
document.write("<br>")
document.write("<br>")

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

document.write("<h1>The lifetime supply calculator</h1> <br>")

let snack = "lays"
let agee = 22
let maxAge = 82
let amount = 2

let remainingYears = maxAge - agee
let totalSnacks = remainingYears * 365 * amount

document.write("Favourite Snack: "+snack+"<br>")
document.write("Current Age: "+agee+"<br>")
document.write("Estimated maximum age: "+maxAge+"<br>")
document.write("Amount of snacks per day: "+amount+"<br>")
document.write("You will need : "+totalSnacks+"to last you until the ripe old age of "+maxAge+"<br>")
document.write("<br>")





























