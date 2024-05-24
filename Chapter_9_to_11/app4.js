// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

let fuel = parseFloat(prompt("Enter amount of fuel in Litres'L'"))
fuel = fuel+'L'
document.write("Amount of fuel "+fuel)

if(fuel < 0.25+'L'){
    alert("Please refill the fuel in your car")
}

else{
    alert("Have a safe journey")
}