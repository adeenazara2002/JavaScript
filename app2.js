alert("Marksheet");

let maths = prompt("Enter Mathematics marks out of 100");
let comp = prompt("Enter Computer Science marks out of 100");
let eng = prompt("Enter English marks out of 100");
let phy = prompt("Enter Physics marks out of 100");
let che = prompt("Enter Chemistry marks out of 100");

if(maths < 0 || comp < 0 || eng  < 0 || phy < 0 || che < 0 && maths > 100 || comp > 100 || eng > 100 || phy > 100 || che > 100)
    {
    alert("Invalid input");
    
}

let obtMarks = +maths+ + +comp+ + +eng+ + +phy+ + +che;
let totalMarks = 500;
let percentage = (obtMarks / totalMarks) * 100;
alert("Your Percentage is: " +percentage+ "%");

if(percentage >= 80 && percentage < 100){
    alert("Your grade is A1");
}

else if(percentage >= 70 && percentage < 80){
    alert("Your grade is A");

}

else if(percentage >= 60 && percentage < 70){
    alert("Your grade is B");

}

else if(percentage >= 50 && percentage < 60){
    alert("Your grade is C");

}

else if(percentage >= 40 && percentage < 50){
    alert("Your grade is D");

}

else if(percentage < 40){
    alert("Oops! you failed");

}

else {
    alert("Invalid Input");
}