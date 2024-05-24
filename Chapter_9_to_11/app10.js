// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

let temp = parseInt(prompt("Enter temperature in degree celcius 'C'"))
document.write(temp+" C"+"<br>")
if(temp >= 40){
    document.write("It is too hot outside")
}

else if(temp >= 30 && temp < 40){
    document.write("Normal weather")
}

else if(temp >= 20 && temp < 30){
    document.write("Cool weather")
}

else if(temp >= 10 && temp < 20){
    document.write("OMG! Today's weather is so cool")
}

else{
    document.write("Freezing weather")
    
}