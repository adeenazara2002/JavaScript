// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

let signalColor = prompt("Enter traffic signal color")
if(signalColor == "Red" || signalColor == "red" || signalColor == "RED"){
    alert("Must Stop")
}
else if(signalColor == "Yellow" || signalColor == "yellow" || signalColor == "YELLOW"){
    alert("Ready to move")
}
else if(signalColor == "Green" || signalColor == "green" || signalColor == "GREEN"){
    alert("Move Now")
}
else{
    alert("Invalid Input")

}