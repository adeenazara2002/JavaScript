// 11. Write a program that takes user input. Convert and
// show the input in title case.

// let input = prompt("Enter any string")
// document.write(input+"<br>")

let userInput = prompt("Enter any String")
document.write(userInput+"<br>");
let titleCase = userInput.split(" ").map((l) => l[0].toUpperCase() + l.substr(1)).join(" ");
document.write(titleCase);