let input = prompt('Enter your city name');
let firstChar = input.charAt(0).toUpperCase();
let otherChar = input.slice(1).toLowerCase();
let concat = firstChar+otherChar;
alert(concat);