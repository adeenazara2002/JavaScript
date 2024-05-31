// 9. Initialize an array with color names. Display the array
// elements in your browser.


let color = ['black' , 'purple' , 'blue' , 'grey' , 'pink' , 'brown']
document.write("Colors: "+color+'<br>')
document.write("<br>")


// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

document.write("<h3>Adding element at the end of an array<br></h3>")
let userInput = prompt("Which color do you want ot add in list ")
let updatedArr = color.push(userInput)
document.write("Array after adding an element: "+color+"<br>")
document.write("<br>")


// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

document.write("<h3>Adding element at the beginning of an array<br></h3>")
let userInput2 = prompt("Which color do you want ot add in list ")
let updatedArrr = color.unshift(userInput2)
document.write("Array after adding an element in beginning: "+color+"<br>")
document.write("<br>")

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

document.write("<h3>Adding two or more elements at the beginning of an array<br></h3>")
let addItems = color.unshift('golden' , 'silver')
document.write("Array after adding an element in beginning: "+color+"<br>")
document.write("<br>")

// d. Delete the first color in the array. Display the updated
// array in your browser.

document.write("<h3>Deleting first element of an array<br></h3>")
let deleteItems = color.shift(color)
document.write("Updated array after deleting an element: "+color+"<br>")
document.write("<br>")

// e. Delete the last color in the array. Display the updated
// array in your browser.

document.write("<h3>Deleting last element of an array<br></h3>")
let deleteItemsatEnd = color.pop(color)
document.write("Updated array after deleting an element at end: "+color+"<br>")
document.write("<br>")

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired // position/index. . Display the updated array in your
// browser.

document.write("<h3>Adding an element at specific position<br></h3>")
let inputaddColorAtIndex = prompt("At which position do you want to add color")
let whichaddColorAtIndex = prompt("Which color do you want to add at given position")
let addColorAtIndex = color.splice(2,inputaddColorAtIndex,whichaddColorAtIndex)
document.write("Adding element at specific position in an array: "+color+"<br>")
document.write("<br>")

 // g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser

document.write("<h3>Deleting an element at specific position<br></h3>")
let inputDeleteIndex = prompt("At which index do you want to delete color ")
let deleteColorAtIndex = color.splice(inputDeleteIndex)
document.write("Deleting element at specific position in an array: "+color+"<br>")
document.write("<br>")


