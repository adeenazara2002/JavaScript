// 6. Repeat Q1 using string concat() method.

let firstName = prompt("Enter your first name")
document.write("Firstname: "+firstName+"<br>")
let lastName = prompt("Enter your last name")
document.write("Lastname: "+lastName+"<br>")

let fullName= firstName.concat(' ',lastName)
document.write("Fullname: "+fullName)