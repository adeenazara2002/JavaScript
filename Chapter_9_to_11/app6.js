// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// Show the total marks, marks obtained, percentage, grade &
// remarks like:

document.write("<h1>MARKSHEET</h1><br>")

let computer = parseFloat(prompt("Enter computer marks"))
let phy = parseFloat(prompt("Enter physics marks"))
let che = parseFloat(prompt("Enter chemistry marks"))

let totalMarks = 300
let marksObt = computer + phy + che
let percentage = ((marksObt / totalMarks) * 100)

document.write("<h2>Total Marks: </h2> "+totalMarks+"<br>")
document.write("<h2>Obtained Marks: </h2> "+marksObt+"<br>")
document.write("<h2>Percentage: </h2>"+percentage+"%"+"<br>")


if(percentage >= 80 && percentage < 100){
    document.write("<h2>Grade: </h2>A1<br> <h2>Remarks: </h2>Excellent!!")
}

else if(percentage >= 70 && percentage < 80){
    document.write("<h2>Grade: </h2>A <br> <h2>Remarks: </h2>Good!!")
}

else if(percentage >= 60 && percentage < 70){
    document.write("<h2>Grade: </h2>B <br> <h2>Remarks:</h2> You need to improve")
}

else{
    alert("Invalid Inputs!")

}