// Basic Quiz App

let score = 0;

alert("Start Quiz");
alert("INSTRUCTIONS: Type only 'a' or 'b' or 'c' or 'd' for correct answers");

let ques1 = prompt("Q1 - Inside which HTML element do we put the JavaScript? a.<script> b. <javascript> c.html");
if(ques1 == "a"){
    alert("Correct answer!");
    score++;
}

else{
    alert("Oops! wrong answer");
}

let ques2 = prompt("Q2 - Is JavaScript a case-sensitive language? a - true b - false");

if(ques2 == "a"){
    alert("Correct answer!");
    score++;
}

else{
    alert("Oops! wrong answer");
}

let ques3 = prompt("Q3 - How can you get the total number of arguments passed to a function? a- Using args.length property b- Using arguments.length property c- Both of the above. d- None of the above.");

if(ques3 == "b"){
    alert("Correct answer!");
    score++;
}

else{
    alert("Oops! wrong answer");
}

let ques4 = prompt("Q4 - Which of the following code creates an object? a- var book = Object(); b- var book = new Object(); c- var book = new OBJECT(); d- var book = new Book();");

if(ques4 == "d"){
    alert("Correct answer!");
    score++;
}

else{
    alert("Oops! wrong answer");
}

let ques5 = prompt("Q5 - Which of the following function of Number object returns a string value version of the current number in a format that may vary according to a browser's locale settings.? a- toExponential() b- toFixed() c- toLocaleString() d- toString()");

if(ques5 == "d"){
    alert("Correct answer!");
    score++;
}

else{
    alert("Oops! wrong answer");
}

alert("Your final score for the quiz: " +score+ " out of 5")