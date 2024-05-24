// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

let char = prompt("Enter any character");

if (char == "") {
    alert("Invalid input, please enter a single character.");
} else {
    let charCode = char.charCodeAt(0);

    if (charCode >= 48 && charCode <= 57) {
        alert("It's a number");
    } else if (charCode >= 65 && charCode <= 90) {
        alert("It's a capital letter");
    } else if (charCode >= 97 && charCode <= 122) {
        alert("It's a small letter");
    } else {
        alert("Invalid input");
    }
}
