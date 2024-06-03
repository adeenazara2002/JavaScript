alert('Start Quiz')
alert("INSTRUCTIONS: Type answer only in 'yes' or 'no'")
let score = 0;
let totalScore = 5;

let answer1 = 'yes';
let answer2 = 'yes';
let answer3 = 'yes';
let answer4 = 'no';
let answer5 = 'no';

let ques1 = prompt('Is JavaScript a programming language?')
let response1 = ques1
if(response1 === answer1){
    alert("Your answer is correct!")
    score++;
}
else{
    alert("Oops! wrong answer")
}

let ques2 = prompt('Is JavaScript a case sensitive language?')
let response2 = ques2
if(response2 === answer2){
    alert("Your answer is correct!")
    score++;
}

else{
    alert("Oops! wrong answer")
}

let ques3 = prompt('To declare variable there are 3 types of keywords to use')
let response3 = ques3
if(response3 === answer3){
    alert("Your answer is correct!")
    score++;
}

else{
    alert("Oops! wrong answer")
}

let ques4 = prompt('If we store variable using let we can not change its value afterwards')
let response4 = ques4
if(response4 === answer4){
    alert("Your answer is correct!")
    score++;
}

else{
    alert("Oops! wrong answer")
}

let ques5 = prompt('Const can change value afterwards')
let response5 = ques5
if(response5 === answer5){
    alert("Your answer is correct!")
    score++;
}

else{
    alert("Oops! wrong answer")
}

alert('Your final score of the quiz is '+(score / totalScore*100)+'%')