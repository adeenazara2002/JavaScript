// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

var message = 'Ali and Sami are best friends. They play cricket and football together.'
document.write(message+'<br>')
var messageReplace = message.replace(/ and /g , " & ") // global replacement
document.write(messageReplace+'<br>')
