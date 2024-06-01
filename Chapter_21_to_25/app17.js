// 17. Write a program to display the last character of a user
// input.

let userInput = prompt('Enter your nationality');
document.write('Input: ' + userInput + '<br>');
let lastCharacter = userInput.slice(-1);
document.write('Last Character of the input: ' + lastCharacter);
