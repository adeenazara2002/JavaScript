// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

let studentNames = ['Adina' , 'Tabassum' , 'Usman']
let studentMarks = [339, 420, 493]
let totalScore = 500
let percentage

for(let i =0; i<studentNames.length;i++){
        percentage =  (studentMarks[i]/totalScore)*100
        document.write("Score of "+studentNames[i]+" is "+studentMarks[i]+" and percentage is "+percentage+"% <br>")
    }

