// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

let firstName = prompt("Enter your first name")
document.write("Firstname: "+firstName+"<br>")
let lastName = prompt("Enter your last name")
document.write("Lastname: "+lastName+"<br>")

let fullName = firstName+lastName
document.write("Fullname: "+fullName)
