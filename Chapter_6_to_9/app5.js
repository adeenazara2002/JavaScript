// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

let sub1 = prompt("Enter first subject")
document.write(sub1+"<br>")

let marks1 = parseInt(prompt("Enter Marks"))
document.write(marks1+"<br>")

let sub2 = prompt("Enter second subject")
document.write(sub2+"<br>")

let marks2 = parseInt(prompt("Enter Marks"))
document.write(marks2+"<br>")

let sub3 = prompt("Enter third subject")
document.write(sub3+"<br>")

let marks3 = parseInt(prompt("Enter Marks"))
document.write(marks3+"<br>")

let totalMarks = 300
let obtainedMarks = marks1 + marks2 + marks3
let percentage = ((obtainedMarks / totalMarks) * 100)
document.write(percentage+" %")
