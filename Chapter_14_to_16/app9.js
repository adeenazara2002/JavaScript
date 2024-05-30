// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

let color = ['black' , 'purple' , 'blue' , 'grey' , 'pink' , 'brown']
document.write("Colors: "+color+'<br>')

// a

let userInput = prompt("Which color do you want ot add in list ")
let updatedArr = color.push(userInput)
document.write("Array after adding an element: "+color+"<br>")

// b 

let userInput2 = prompt("Which color do you want ot add in list ")
let updatedArrr = color.unshift(userInput2)
document.write("Array after adding an element in beginning: "+color+"<br>")

// c

let addItems = color.unshift('golden' , 'silver')
document.write("Array after adding an element in beginning: "+color+"<br>")

// d

let deleteItems = color.shift(color)
document.write("Updated array after deleting an element: "+color+"<br>")


