let userInputCount = prompt('Enter count of tickets')
let ticketsArr = []
let ticketCount = parseInt(userInputCount)
for(let i =0 ; i<ticketCount; i++){
    let userTicketNumber = prompt('Enter number of tickets');
    ticketsArr.push(userTicketNumber) 
}
document.write(ticketsArr);
let winners = Math.round(Math.random() * ticketsArr.length);
let win = ticketsArr[winners]
alert(win)


