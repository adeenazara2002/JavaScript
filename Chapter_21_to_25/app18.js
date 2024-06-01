// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

let para = 'The quick brown fox jumps over the lazy dog.';
document.write('Text: ' +para+'<br>');
let paraLowerCase = para.toLowerCase();

let segments = paraLowerCase.split('the');
let count = segments.length - 1; 
document.write('Number of occurrences of the word "the" in the text is: ' + count);