// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var university = 'University of Karachi'
document.write('String: '+university+'<br>')
let stringToArr = university.split('')
document.write('Array: '+stringToArr.join(', '))
