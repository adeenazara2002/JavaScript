// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

 var num = 35.56
 document.write("Number: " + num + ", Type: " + typeof num+"<br>");
 var numToStr = num.toString().replace('.','')
 document.write("Number to string: " + numToStr + ", Type: " + typeof numToStr+"<br>");

 
